<template>
  <div>
    <section class="about-group-wrapper">
      <section class="hero">
        <LingoHero
          :server-side-content="ssrHeroContent"
          @height-calculated="onHeroHeightCalculated"
          @ready="childrenReady++"
        />
      </section>

      <section class="mini-bio">
        <MiniBio
          :hero-height="heroHeight"
          :server-side-text-title="ssrMinibioTextTitle"
          :server-side-text-excerpt="ssrMinibioTextExcerpt"
          :server-side-text-complete="ssrMinibioTextComplete"
          :open-modal-by-default="ssrOpenMiniBioModalByDefault"
          @minibio-margin-calculated="miniBioMgCalculated = true"
          @ready="childrenReady++"
        />
      </section>

      <section class="who-are-us">
        <AboutUs
          :hero-height="heroHeight"
          :server-side-list-of-members="ssrMembersList"
          @ready="childrenReady++"
        />
      </section>
    </section>

    <section>
      <OurServices
        :server-side-text-content="ssrOurServiceTextContent"
        :server-side-list-of-services="ssrServicesList"
        :default-service="ssrDefaultService"
        @ready="childrenReady++"
      />
    </section>

    <section>
      <CustomersTestimonials
        :testimonialsList="ssrTestimonialsList"
        @ready="childrenReady++"
      />
    </section>

    <section>
      <OurPartners @ready="childrenReady++" />
    </section>

    <section>
      <MapaMundi />
    </section>

    <footer>
      <LingoFooter @ready="childrenReady++" />
    </footer>
  </div>
</template>

<script>
import LingoHero from '~/components/Hero/Index.vue'
import MiniBio from '~/components/Minibio/index.vue'
import AboutUs from '~/components/AboutUs/Index.vue'
import OurServices from '~/components/OurServices/Index.vue'
import CustomersTestimonials from '~/components/Testimonials/Index.vue'
import OurPartners from '~/components/Partners/Index.vue'
import MapaMundi from '~/components/MapaMundi/Index.vue'
import LingoFooter from '~/components/Footer/Index.vue'

export default {
  head() {
    return {
      title: this.ssrDefaultTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.ssrDefaultDescription
        }
      ]
    }
  },
  components: {
    LingoHero,
    MiniBio,
    AboutUs,
    OurServices,
    CustomersTestimonials,
    OurPartners,
    MapaMundi,
    LingoFooter
  },
  middleware: 'check-browser-support',

  data: () => ({
    heroHeight: 0,
    childrenReady: 0,
    miniBioMgCalculated: false
  }),

  watch: {
    '$store.state.language'(newValue) {
      this.$nuxt.$loading.start()
      this.childrenReady = 0

      this.$ga.page({
        page: '/',
        title: `Home Page (${newValue})`,
        location: window.location.href
      })
    },
    childrenReady(ready) {
      if (ready === this.$children.filter((el) => el.$listeners.ready).length) {
        this.$nextTick(() => {
          this.$nuxt.$loading.finish()
        })
      }
    }
  },

  async asyncData({ query, $axios, store }) {
    const promises = []
    const lang = query.lang && query.lang === 'en-US' ? 'enus' : 'ptbr'
    const openMiniBioModal =
      query.c === 'conheca-a-lingo' || query.c === 'about-lingo'

    store.commit('setModalOpen', openMiniBioModal)

    if (query.lang && ['pt-BR', 'en-US'].includes(query.lang)) {
      store.commit('toggleLanguage', query.lang)
    }

    // 0. hero content
    promises.push($axios.get(`posts?slug=hero-${lang}`))

    // 1. minibio content
    promises.push($axios.get(`posts?slug=minibio-${lang}`))

    // 2. members list
    promises.push($axios.get('posts?categories=4'))

    // 3. our services text
    promises.push($axios.get(`posts?slug=nosso-trabalho-${lang}`))

    // 4. services list
    promises.push(
      $axios.get(
        `posts?categories=${query.lang && query.lang === 'en-US' ? '9' : '8'}`
      )
    )

    // 5. testimonials list
    promises.push($axios.get('posts?categories=5'))

    const responses = await Promise.all(promises)

    let ssrServicesList = responses[4].data

    try {
      ssrServicesList = ssrServicesList.sort(
        (a, b) => a.acf.order - b.acf.order
      )
    } catch (e) {}

    const ssrDefaultService = ssrServicesList.filter(
      (s) => s.slug === query.c
    )[0]

    const ssrHeroTitle = responses[0].data[0].title.rendered

    const pageTitle =
      query.lang && query.lang === 'en-US'
        ? 'Lingo - Translation, simultaneous and consecutive interpreting, proofreading, transcription, media training'
        : 'Lingo - Tradução, interpretação simultânea e consecutiva, revisão, transcrição, media training'

    const pageDescription =
      query.lang && query.lang === 'en-US'
        ? 'Translation, simultaneous and consecutive interpreting, proofreading, transcription, media training'
        : 'Tradução, interpretação simultânea e consecutiva, revisão, transcrição, media training'

    const ssrDefaultTitle =
      ssrDefaultService && ssrDefaultService.title.rendered
        ? ssrDefaultService.title.rendered + ' | ' + pageTitle
        : pageTitle

    const ssrDefaultDescription =
      ssrDefaultService && ssrDefaultService.title.rendered
        ? ssrDefaultService.title.rendered + ' | ' + pageTitle
        : pageDescription

    return {
      ssrDefaultTitle,
      ssrDefaultDescription,

      ssrHeroContent: {
        title: ssrHeroTitle,
        text: responses[0].data[0].content.rendered
      },

      ssrMinibioTextTitle: responses[1].data[0].title.rendered,
      ssrMinibioTextExcerpt: responses[1].data[0].excerpt.rendered,
      ssrMinibioTextComplete: responses[1].data[0].content.rendered,
      ssrOpenMiniBioModalByDefault: openMiniBioModal,

      ssrMembersList: responses[2].data,

      ssrOurServiceTextContent: {
        text: responses[3].data[0].content.rendered,
        quotation: responses[3].data[0].acf.quotation
      },

      ssrServicesList,
      ssrDefaultService,

      ssrTestimonialsList: responses[5].data
    }
  },

  mounted() {
    setTimeout(() => {
      this.ssrDefaultTitle = this.decodeHTMLEntities(this.ssrDefaultTitle)
      this.$forceUpdate()
    }, 1000)

    const lang = this.$route.query.lang

    if (lang && ['pt-BR', 'en-US'].includes(lang)) {
      this.$store.commit('toggleLanguage', lang)
    }

    this.$ga.page({
      page: '/',
      title: `Home Page (${this.$store.state.language})`
    })
  },

  methods: {
    onHeroHeightCalculated(height) {
      this.heroHeight = height
    },

    decodeHTMLEntities(str) {
      // this prevents any overhead from creating the object each time
      const element = document.createElement('div')

      if (str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '')
        element.innerHTML = str
        str = element.textContent
        element.textContent = ''
      }

      return str
    }
  }
}
</script>

<style lang="scss" scoped>
.about-group-wrapper {
  overflow: hidden;
  background-color: #efeae4;
  background-repeat: no-repeat;

  @media (min-width: 571px) {
    background-image: url('~assets/img/bg-linhas-sm@1X.jpg'),
      linear-gradient(to bottom, #efeae4 0%, #efeae4 68%, #fff 80%, #fff 100%);
  }
  @media (min-width: 900px) {
    background-image: url('~assets/img/bg-linhas-md@1X.jpg'),
      linear-gradient(to bottom, #efeae4 0%, #efeae4 68%, #fff 80%, #fff 100%);
  }
  @media (min-width: 1200px) {
    background-image: url('~assets/img/bg-linhas-lg@1X.jpg'),
      linear-gradient(to bottom, #efeae4 0%, #efeae4 68%, #fff 80%, #fff 100%);
  }
}
</style>
