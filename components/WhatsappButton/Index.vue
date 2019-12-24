<template>
  <a
    :href="`https://wa.me/${$store.state.whatsappNumber}`"
    target="_blank"
    class="whatsapp-component"
    ref="wp-button"
  >
    <div class="circle-icon">
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
    </div>

    <div class="rectangle">
      <p>{{ text[$store.state.language] }}</p>
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {
      text: {
        'pt-BR': 'Quer falar com a gente?',
        'en-US': 'Want to talk with us?'
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      setTimeout(() => {
        const scroll = window.pageYOffset
        const height = document.body.clientHeight - 1100

        if (scroll >= height) {
          this.$refs['wp-button'].style.bottom = '142px'
        } else {
          this.$refs['wp-button'].style.bottom = '20px'
        }
      }, 100)
    })
  }
}
</script>

<style lang="scss" scoped>
a.whatsapp-component {
  text-decoration: none;
  outline: none;

  display: flex;
  align-items: center;

  position: fixed;

  bottom: 20px;
  right: 17px;

  transition-property: bottom;
  transition-duration: 0.25s;

  @media (min-width: 1200px) {
    position: initial;
    right: initial;
  }

  .circle-icon {
    color: #fff;
    background: #4caf50;

    width: 60px;
    height: 60px;
    font-size: 30px;

    @media (min-width: 768px) {
      width: 80px;
      height: 80px;
      font-size: 48px;
    }

    @media (min-width: 1200px) {
      width: 53px;
      height: 53px;
      font-size: 36px;
    }

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

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
