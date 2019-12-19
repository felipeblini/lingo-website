<template>
  <div class="mapa-mundi-wrapper">
    <div class="mapa-mundi"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mapa-mundi-wrapper {
  overflow: hidden;

  .mapa-mundi {
    background-image: url('./img/mapa-mundi-mobile.svg');
    background-size: contain;
    background-repeat: no-repeat;
    height: 0;
    padding-top: 52%;
    background-position-x: -6px;
    width: 102%;
    margin-top: 15px;

    @media (min-width: 1080px) {
      background-image: url('./img/mapa-mundi-desktop.svg');
      padding-top: 24%;
      background-position-x: -22px;
      width: 105%;
    }
  }
}
</style>
