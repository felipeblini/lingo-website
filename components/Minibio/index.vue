<template>
  <div ref="lingo-minibio" class="container lingo-minibio">
    <div>
      <h3 class="gray minibio-title">Conheça a</h3>
      <div class="minibio-brand"></div>
    </div>
    <div class="minibio-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, officiis
      assumenda magnam corrupti facilis et nesciunt vel expedita eos sunt animi
      sint dolores minus. Totam ea fugit distinctio ut a!
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heroHeight: Number
  },
  computed: {
    miniBioMarginTop() {
      return ((this.heroHeight * 44) / 100) * -1
    }
  },
  watch: {
    miniBioMarginTop(value) {
      this.$refs['lingo-minibio'].style.marginTop = `${value}px`
      this.$refs['lingo-minibio'].style.visibility = 'visible'
    }
  }
}
</script>

<style lang="scss" scoped>
.lingo-minibio {
  visibility: hidden;
  padding-top: 138px;
  padding-left: 50px;
  width: 100%;
  display: flex;

  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 411px) {
    padding-top: 38px;
  }

  @media (min-width: 576px) {
    padding-left: unset;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    padding-top: 30px;
    padding-left: 30px;
  }

  @media (min-width: 1200px) {
    padding-top: 36px;
  }

  h3.minibio-title {
    font-size: 8vw;

    @media (min-width: 430px) {
      font-size: 7vw;
    }

    @media (min-width: 530px) {
      font-size: 38px;
    }

    margin: 0px 0 -12px;

    @media (min-width: 560px) {
      margin: 0px 0 -18px;
    }

    @media (min-width: 1200px) {
      font-size: 53px;
      margin: 0px 0 -21px;
    }

    @media (min-width: 1800px) {
      font-size: 59px;
      margin: 0px 0 -28px;
    }
  }

  .minibio-brand {
    @include lingo-logo($gray);

    width: 269px;
    height: 97px;
    margin-left: -18px;

    @media (min-width: 411px) {
      width: 196px;
      height: 72px;
      margin-left: -14px;
    }

    @media (min-width: 477px) {
      width: 239px;
      height: 90px;
      margin-left: -14px;
    }

    @media (min-width: 560px) {
      width: 305px;
      height: 106px;
      margin-left: -23px;
    }

    @media (min-width: 992px) {
      width: 327px;
      height: 136px;
      margin-left: -26px;
    }

    @media (min-width: 1200px) {
      width: 370px;
      height: 147px;
      margin-left: -29px;
    }

    @media (min-width: 1800px) {
      width: 438px;
      height: 173px;
      margin-left: -33px;
    }
  }

  .minibio-text {
    padding-left: 0px;
    font-size: 0.9rem;
    padding-right: 50%;
    position: relative;

    @media (min-width: 992px) {
      padding-right: 35%;
    }

    @media (min-width: 1200px) {
      padding-right: 38%;
      padding-left: 0;
    }

    @media (min-width: 1300px) {
      padding-right: 38%;
      padding-left: 15px;
      font-size: 1rem;
    }

    @media (min-width: 1800px) {
      padding-right: 26%;
      padding-left: 11px;
      font-size: 1.1rem;
    }
  }
}
</style>
