<template>
  <div>
    <section class="about-group-wrapper">
      <section class="hero">
        <LingoHero @onHeightCalculated="onHeroHeightCalculated" />
      </section>

      <section class="mini-bio">
        <MiniBio :hero-height="heroHeight" />
      </section>

      <section class="who-are-us">
        <WhoAreUs :hero-height="heroHeight" />
      </section>
    </section>

    <section>
      <OurServices />
    </section>

    <section>
      <CustomersTestemonials />
    </section>

    <section>
      <OurPartners />
    </section>

    <section>
      <MapaMundi />
    </section>

    <footer>
      <LingoFooter />
    </footer>
  </div>
</template>

<script>
import LingoHero from '~/components/Hero/Index.vue'
import MiniBio from '~/components/Minibio/index.vue'
import WhoAreUs from '~/components/WhoAreUs/Index.vue'
import OurServices from '~/components/OurServices/Index.vue'
import CustomersTestemonials from '~/components/Testemonials/Index.vue'
import OurPartners from '~/components/Partners/Index.vue'
import MapaMundi from '~/components/MapaMundi/Index.vue'
import LingoFooter from '~/components/Footer/Index.vue'

export default {
  components: {
    LingoHero,
    MiniBio,
    WhoAreUs,
    OurServices,
    CustomersTestemonials,
    OurPartners,
    MapaMundi,
    LingoFooter
  },
  data() {
    return {
      heroHeight: 0
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
.about-group-wrapper {
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
