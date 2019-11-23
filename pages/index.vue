<template>
  <div>
    <LingoHero @onHeightCalculated="onHeroHeightCalculated" />
    <LingoMiniBio :marginTop="miniBioMarginTop" />
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
