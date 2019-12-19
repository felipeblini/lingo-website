<template>
  <div>
    <div class="about-group-wrapper">
      <LingoHero @onHeightCalculated="onHeroHeightCalculated" />
      <LingoMiniBio :hero-height="heroHeight" />
      <LingoAbout :hero-height="heroHeight" />
    </div>

    <LingoServices />
    <LingoTestemonials />
    <LingoPartners />
    <LingoMapaMundi />
    <LingoFooter />
  </div>
</template>

<script>
import LingoHero from '~/components/Hero'
import LingoMiniBio from '~/components/Minibio'
import LingoAbout from '~/components/About/Index.vue'
import LingoServices from '~/components/OurServices'
import LingoTestemonials from '~/components/Testemonials'
import LingoPartners from '~/components/Partners'
import LingoMapaMundi from '~/components/MapaMundi'
import LingoFooter from '~/components/Footer/Index.vue'

export default {
  components: {
    LingoHero,
    LingoMiniBio,
    LingoAbout,
    LingoServices,
    LingoTestemonials,
    LingoPartners,
    LingoMapaMundi,
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
