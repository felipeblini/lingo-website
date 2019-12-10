<template>
  <div>
    <div class="about-group-wrapper">
      <LingoHero @onHeightCalculated="onHeroHeightCalculated" />
      <LingoMiniBio :hero-height="heroHeight" />
      <LingoAbout :hero-height="heroHeight" />
    </div>

    <LingoServices />

    <div class="lingo-testemonials-component">
      <div class="quotations-image-wrapper">
        <img src="@/assets/img/testemonials/aspas.svg" alt="" />
      </div>
      <div class="container">
        <h1 class="yellow">Depoimentos</h1>
      </div>
    </div>
  </div>
</template>

<script>
import LingoHero from '~/components/Hero'
import LingoMiniBio from '~/components/Minibio'
import LingoAbout from '~/components/About'
import LingoServices from '~/components/OurServices'

export default {
  components: {
    LingoHero,
    LingoMiniBio,
    LingoAbout,
    LingoServices
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
.lingo-testemonials-component {
  z-index: 1;
  position: relative;

  .quotations-image-wrapper {
    margin-top: -20%;
    margin-bottom: 8px;
    padding-left: 67px;
    overflow: hidden;

    img {
      width: 104%;
    }

    @media (min-width: 1080px) {
      display: none;
    }
  }

  h1 {
    text-align: center;

    color: $light-gray;
    font-size: 36px;

    @media (min-width: 420px) {
      font-size: 51px;
    }

    @media (min-width: 700px) {
      font-size: 71px;
    }

    @media (min-width: 800px) {
      font-size: 81px;
    }

    @media (min-width: 1080px) {
      color: $yellow;
    }

    @media (min-width: 1200px) {
      font-size: 98px;
    }
  }
}

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
