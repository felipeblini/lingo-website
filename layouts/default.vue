<template>
  <div ref="globalWrapper" style="border: solid 6px green; height: 100vh">
    <!-- <a id="top" href="#" /> -->
    <lingo-navbar />

    <nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar/Index.vue'

export default {
  data() {
    return {
      responsiveWidth: 0
    }
  },

  mounted() {
    this.responsiveWidth = window.innerWidth
    this.$refs.globalWrapper.style.width = `${this.responsiveWidth}px`
  },
  components: {
    'lingo-navbar': NavBar
  }
}
</script>
