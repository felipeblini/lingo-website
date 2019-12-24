<template>
  <div>
    <loading :active.sync="isLoading" color="#EF4865" :opacity="0.8"></loading>

    <section class="about-group-wrapper">
      <section class="hero">
        <LingoHero @height-calculated="onHeroHeightCalculated" />
      </section>

      <section class="mini-bio">
        <MiniBio
          :hero-height="heroHeight"
          @minibio-margin-calculated="miniBioMgCalculated = true"
          @ready="childrenReady++"
          data-isdinamic
        />
      </section>

      <section class="who-are-us">
        <AboutUs :hero-height="heroHeight" @ready="childrenReady++" />
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
import Loading from 'vue-loading-overlay'
import LingoHero from '~/components/Hero/Index.vue'
import MiniBio from '~/components/Minibio/index.vue'
import AboutUs from '~/components/AboutUs/Index.vue'
import OurServices from '~/components/OurServices/Index.vue'
import CustomersTestimonials from '~/components/Testimonials/Index.vue'
import OurPartners from '~/components/Partners/Index.vue'
import MapaMundi from '~/components/MapaMundi/Index.vue'
import LingoFooter from '~/components/Footer/Index.vue'

import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Loading,
    LingoHero,
    MiniBio,
    AboutUs,
    OurServices,
    CustomersTestimonials,
    OurPartners,
    MapaMundi,
    LingoFooter
  },
  data() {
    return {
      heroHeight: 0,
      isLoading: true,
      childrenReady: 0,
      miniBioMgCalculated: false
    }
  },

  methods: {
    onHeroHeightCalculated(height) {
      this.heroHeight = height
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
  }
}
</script>

<style lang="scss" scoped>
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
