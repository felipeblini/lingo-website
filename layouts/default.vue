<template>
  <!-- <b-overlay
    :show="true"
    opacity="0.8"
    blur="2px"
    variant="transparent"
    sppiner-variant="light"
  >
    <font-awesome-icon
      slot="overlay"
      :icon="['fas', 'spinner']"
      size="6x"
      spin
    /> -->
  <div style=" height: 100vh">
    <a id="top" href="#" />
    <lingo-navbar />

    <nuxt />
  </div>
  <!-- </b-overlay> -->
</template>

<script>
import NavBar from '~/components/NavBar/Index.vue'

export default {
  components: {
    'lingo-navbar': NavBar
  }
}
</script>
