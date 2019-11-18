<template>
  <a href="#" class="whatsapp-component">
    <div class="circle-icon">
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
    </div>

    <div class="rectangle">
      <p>Quer falar com a gente?</p>
    </div>
    <div class="circle-end"></div>
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

    -webkit-box-shadow: -9px 11px 28px -12px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: -9px 11px 28px -12px rgba(0, 0, 0, 0.65);
    box-shadow: -9px 11px 28px -12px rgba(0, 0, 0, 0.65);

    svg {
      position: relative;
      left: 1px;
    }
  }

  .rectangle {
    width: 102px;
    height: 51px;

    background-image: url('~assets/img/whatsapp-btn.png'),
      linear-gradient(
        to right,
        transparent 0%,
        transparent 18%,
        transparent 18%,
        #4caf50 18%,
        #4caf50 100%
      );
    background-size: contain;
    background-repeat: no-repeat;

    margin-left: -10px;

    p {
      color: #fff;
      font-size: 12px;
      position: relative;
      top: 7px;
      left: 26px;
      user-select: none;
    }
  }

  .circle-end {
    height: 51px;
    width: 51px;
    border-radius: 50%;
    margin-left: -24.5px;
    background: #4caf50;
  }
}
</style>
