<template>
  <div>
    <a id="top" href="#" />
    <lingo-navbar />

    <nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {
    'lingo-navbar': NavBar
  }
}
</script>
