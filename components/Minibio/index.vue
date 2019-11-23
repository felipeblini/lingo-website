<template>
  <div ref="lingo-minibio" class="container lingo-minibio">
    <div>
      <h3 class="gray">Conheça a</h3>
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
    marginTop: Number
  },
  watch: {
    marginTop(value) {
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

  h3 {
    font-size: 25px;
    margin: 0px 0 -12px;
  }

  .minibio-brand {
    @include lingo-logo($gray);
    width: 201px;
    height: 72px;
    margin-left: -14px;
  }

  .minibio-text {
    padding-left: 0px;
    font-size: 0.8rem;
    padding-right: 50%;
  }

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

    h3 {
      font-size: 38px;
      margin: 0px 0 -23px;
    }

    .minibio-brand {
      @include lingo-logo($gray);
      width: 327px;
      height: 136px;
      margin-left: -26px;
    }

    .minibio-text {
      padding-right: 35%;
      padding-left: 15px;
      font-size: 0.9rem;
    }
  }

  @media (min-width: 1200px) {
    padding-top: 0;

    h3 {
      font-size: 53px;
      margin: 0px 0 -21px;
    }

    .minibio-brand {
      @include lingo-logo($gray);
      width: 370px;
      height: 147px;
      margin-left: -29px;
    }

    .minibio-text {
      padding-right: 35%;
      padding-left: 20px;
      font-size: 1rem;
    }
  }

  @media (min-width: 1800px) {
    .minibio-text {
      padding-right: 30%;
      padding-left: 30px;
    }
  }
}
</style>
