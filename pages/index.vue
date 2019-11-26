<template>
  <div>
    <LingoHero @onHeightCalculated="onHeroHeightCalculated" />
    <LingoMiniBio :marginTop="miniBioMarginTop" />
    <div
      class="lingo-about"
      :style="{ marginTop: percentsOfHeroHeight(20) + 'px' }"
    >
      <div class="container">
        <div class="about-title row justify-content-center mt-5">
          <div class="col-lg-4 text-center">
            <h2 class="pink">Quem Somos</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LingoHero from '~/components/Hero'
import LingoMiniBio from '~/components/Minibio'

export default {
  components: {
    LingoHero,
    LingoMiniBio
  },
  data() {
    return {
      heroHeight: 0
    }
  },
  computed: {
    miniBioMarginTop() {
      return ((this.heroHeight * 44) / 100) * -1
    },
    percentsOfHeroHeight() {
      return (percents) => (this.heroHeight * percents) / 100
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
.lingo-about {
  border: solid 2px red;
  height: 500px;

  @media (min-width: 992px) {
    padding-top: 127px;

    .about-title {
      justify-content: flex-end !important;
    }
  }

  @media (min-width: 1500px) {
    // margin-top: 200px;
    padding-top: 127px;
  }

  h2 {
    font-size: 9vw;

    @media (min-width: 600px) {
      font-size: 7vw;
    }

    @media (min-width: 992px) {
      font-size: 89px;
      line-height: 70px;
    }
  }

  .about-photo {
    border: solid;
    height: 400px;
  }
}
</style>
