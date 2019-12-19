<template>
  <footer class="lingo-footer-wrapper">
    <div class="footer-background"></div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer.lingo-footer-wrapper {
  overflow-x: hidden;

  .footer-background {
    width: 200%;
    height: 228px;
    background-image: url('./img/curvarodape1.svg');
    background-repeat: no-repeat;
    background-size: cover;
    left: -62%;

    position: relative;

    @media (min-width: 440px) {
      left: -43%;
    }

    @media (min-width: 1080px) {
      width: 100%;
      height: 240px;

      background-image: url('./img/curvarodape1.svg'),
        url('./img/curvarodape2.svg');
      background-size: contain;

      background-position-x: right, -36%;
      background-position-y: top, 119px;

      left: unset;
    }
  }
}
</style>
