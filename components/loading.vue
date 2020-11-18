<template>
  <div v-if="$store.state.isLoading" class="loading">
    <div class="loading-spinner">
      <font-awesome-icon :icon="['fas', 'spinner']" spin />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$store.commit('setLoading', true)
    },
    finish() {
      this.$store.commit('setLoading', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  background: #ffffffdb;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 2;

  .loading-spinner {
    position: fixed;
    left: 50%;
    top: 50%;
    height: 60px;
    margin-top: -30px;
    width: 60px;
    margin-left: -30px;
    font-size: 54px;
  }
}
</style>
