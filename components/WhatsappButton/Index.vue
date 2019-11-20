<template>
  <a href="#" class="whatsapp-component">
    <div class="circle-icon">
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
    </div>

    <div class="rectangle">
      <p>Quer falar com a gente?</p>
    </div>
  </a>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
a.whatsapp-component {
  text-decoration: none;
  outline: none;

  display: flex;
  align-items: center;

  position: fixed;
  bottom: 27px;
  right: 34px;

  @media (min-width: 1200px) {
    position: initial;
    right: initial;
  }

  .circle-icon {
    width: 53px;
    height: 53px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-size: 36px;
    background: #4caf50;

    -webkit-box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
    box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
  }

  .rectangle {
    display: none;

    @media (min-width: 1200px) {
      display: block;
    }

    width: 153px;
    height: 46px;

    border-radius: 30px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-left: none;

    -webkit-box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
    box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);

    background: url('./whatsapp-btn-right-curve.svg') 0 -1px no-repeat,
      linear-gradient(
        to right,
        transparent 0%,
        transparent 11%,
        transparent 11%,
        #4caf50 11%,
        #4caf50 100%
      );
    background-size: auto;
    margin-left: -10px;
    margin-top: 1px;

    p {
      color: #fff;
      font-size: 12px;
      position: relative;
      top: 6px;
      left: 30px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 110px;
      line-height: 15px;
    }
  }
}
</style>
