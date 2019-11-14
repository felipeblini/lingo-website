<template>
  <div>
    <a href="#" id="top" />
    <lingo-navbar />

    <nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/Navbar'

export default {
  components: {
    'lingo-navbar': NavBar
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/app.scss';
</style>
