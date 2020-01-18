<template>
  <div>
    <div v-if="isLoading" class="loading">
      <div class="loading-spinner">
        <font-awesome-icon :icon="['fas', 'spinner']" spin />
      </div>
    </div>

    <section class="about-group-wrapper d-none">
      <section class="hero">
        <LingoHero @height-calculated="onHeroHeightCalculated" />
      </section>

      <section class="mini-bio">
        <MiniBio
          :hero-height="heroHeight"
          :ssrText="minibioDefaultText"
          @minibio-margin-calculated="miniBioMgCalculated = true"
          @ready="childrenReady++"
        />
      </section>

      <section class="who-are-us">
        <AboutUs :hero-height="heroHeight" @ready="childrenReady++" />
      </section>
    </section>

    <section class=" d-none">
      <OurServices />
    </section>

    <section class="d-none">
      <CustomersTestimonials @ready="childrenReady++" />
    </section>

    <section class="d-none">
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

// TODO: fetch pt-BR text on wordPress for minibio
const _getSSRMinibioText = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        text: `Dolor corrupti facilis et nesciunt vel expedita eos sunt animi
              sint dolores minus adipisicing elit. Maiores, officiis
              Totam ea fugit distinctio ut a. assumenda magnam sit amet consectetur! pt-BR default-ssr`
      })
    }, 5000)
  })

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
  async asyncData() {
    const data = await _getSSRMinibioText()
    return { minibioDefaultText: data.text }
  },
  data() {
    return {
      heroHeight: 0,
      isLoading: true,
      childrenReady: 0,
      miniBioMgCalculated: false
    }
  },

  watch: {
    '$store.state.language'() {
      this.isLoading = true
      this.childrenReady = 2 // footer and partners are aready ready in this moment
    },

    childrenReady(ready) {
      console.log({ ready })
      const dinamicChildren = this.$children.filter((el) => el.$listeners.ready)

      if (ready === dinamicChildren.length) {
        this.isLoading = false
      }
    }
  },

  methods: {
    onHeroHeightCalculated(height) {
      this.heroHeight = height
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  background: #ffffffdb;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 2;

  .loading-spinner {
    position: fixed;
    left: 50%;
    top: 50%;
    height: 60px;
    margin-top: -30px;
    width: 60px;
    margin-left: -30px;
    font-size: 54px;
  }
}

.about-group-wrapper {
  overflow: hidden;
  background: #efeae4;
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
