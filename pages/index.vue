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
import LingoHero from '~/components/Hero/'
import MiniBio from '~/components/Minibio/'
import WhoAreUs from '~/components/WhoAreUs/'
import OurServices from '~/components/OurServices/'
import CustomersTestemonials from '~/components/Testemonials/'
import OurPartners from '~/components/Partners/'
import MapaMundi from '~/components/MapaMundi/'
import LingoFooter from '~/components/Footer/'

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
