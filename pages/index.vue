<template>
  <div>
    <LingoHero />
    <div class="know-lingo">
      <h3 class="gray">Conheça a</h3>
      <div class="lingo-brand"></div>
    </div>
  </div>
</template>

<script>
import LingoHero from '~/components/Hero'

export default {
  components: {
    LingoHero
  }
}
</script>

<style lang="scss" scoped>
.lingo-brand {
  @include lingo-logo($gray);
  width: 200px;
  height: 80px;
}
</style>
