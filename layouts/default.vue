<template>
  <div>
    <a href="#" id="top" />
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
