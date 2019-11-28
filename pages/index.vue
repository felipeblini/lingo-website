<template>
  <div>
    <LingoHero @onHeightCalculated="onHeroHeightCalculated" />
    <LingoMiniBio :hero-height="heroHeight" />
    <LingoAbout :hero-height="heroHeight" />
  </div>
</template>

<script>
import LingoHero from '~/components/Hero'
import LingoMiniBio from '~/components/Minibio'
import LingoAbout from '~/components/About'

export default {
  components: {
    LingoHero,
    LingoMiniBio,
    LingoAbout
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

<style lang="scss" scoped></style>
