<template>
  <div>
    <section class="about-group-wrapper">
      <section class="hero">
        <LingoHero
          :server-side-content="heroSSRContent"
          @height-calculated="onHeroHeightCalculated"
          @ready="childrenReady++"
        />
      </section>

      <section class="mini-bio">
        <MiniBio
          :hero-height="heroHeight"
          :server-side-text="minibioSSRText"
          @minibio-margin-calculated="miniBioMgCalculated = true"
          @ready="childrenReady++"
        />
      </section>

      <section class="who-are-us">
        <AboutUs
          :hero-height="heroHeight"
          :server-side-list-of-members="aboutUsSSRMembersList"
          @ready="childrenReady++"
        />
      </section>
    </section>

    <section>
      <OurServices />
    </section>

    <section>
      <CustomersTestimonials @ready="childrenReady++" />
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
    '$store.state.language'() {
      this.$nuxt.$loading.start()
      this.childrenReady = 2 // footer and partners are aready ready in this moment
    },
    childrenReady(ready) {
      if (ready === this.$children.filter((el) => el.$listeners.ready).length) {
        this.$nextTick(() => {
          this.$nuxt.$loading.finish()
        })
      }
    }
  },

  async asyncData(context) {
    const promises = []
    // hero content
    promises.push(context.$axios.get(`posts?slug=hero-ptbr`))

    // minibio content
    promises.push(context.$axios.get(`posts?slug=minibio-ptbr`))

    // members list
    promises.push(context.$axios.get('posts?categories=4'))

    const responses = await Promise.all(promises)

    return {
      heroSSRContent: {
        title: responses[0].data[0].title.rendered,
        text: responses[0].data[0].content.rendered
      },
      minibioSSRText: responses[1].data[0].content.rendered,
      aboutUsSSRMembersList: responses[2].data
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },

  methods: {
    onHeroHeightCalculated(height) {
      this.heroHeight = height
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
