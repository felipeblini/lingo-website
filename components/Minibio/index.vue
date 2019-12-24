<template>
  <div ref="lingo-minibio" class="container lingo-minibio">
    <div>
      <h3 class="gray minibio-title">{{ title[$store.state.language] }}</h3>
      <div class="minibio-brand"></div>
    </div>
    <div class="minibio-text" v-html="text[$store.state.language]" />
  </div>
</template>

<script>
export default {
  props: {
    heroHeight: Number
  },
  data() {
    return {
      title: {
        'pt-BR': 'Conheça a',
        'en-US': 'Know'
      },
      text: {
        'pt-BR': '',
        'en-US': ''
      }
    }
  },
  computed: {
    miniBioMarginTop() {
      return ((this.heroHeight * 44) / 100) * -1
    }
  },
  mounted() {
    this.fetchContent()
  },
  methods: {
    fetchContent() {
      if (!this.text[this.$store.state.language]) {
        // TODO: fetch <language> text on wordPress
        this.text[
          this.$store.state.language
        ] = `Dolor corrupti facilis et nesciunt vel expedita eos sunt animi
              sint dolores minus adipisicing elit. Maiores, officiis
              Totam ea fugit distinctio ut a. assumenda magnam sit amet consectetur! ${this.$store.state.language}`
      }

      setTimeout(() => {
        console.log('minibio ready')
        this.$emit('ready')
      }, 1000)
    }
  },

  watch: {
    miniBioMarginTop(value) {
      this.$refs['lingo-minibio'].style.marginTop = `${value}px`
      this.$refs['lingo-minibio'].style.visibility = 'visible'

      console.log('minibio-margin-calculated')
      this.$emit('minibio-margin-calculated')
    },

    '$store.state.language'() {
      this.fetchContent()
    }
  }
}
</script>

<style lang="scss" scoped>
.lingo-minibio {
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 92px;
  padding-left: 17px;
  width: 100%;

  @media (min-width: 360px) {
    padding-top: 100px;
  }

  @media (min-width: 411px) {
    padding-top: 120px;
  }

  @media (min-width: 576px) {
    padding-left: unset;
  }

  @media (min-width: 768px) {
    padding-top: 176px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    padding-top: 30px;
    padding-left: 30px;

    @media (pointer: fine) {
      padding-top: 96px;
    }
  }

  @media (min-width: 1024px) {
    padding-top: 98px;
  }

  @media (min-width: 1200px) {
    padding-top: 136px;
  }

  @media (min-width: 1900px) {
    padding-top: 10%;
  }

  h3.minibio-title {
    font-size: 8vw;

    @media (min-width: 430px) {
      font-size: 7vw;
    }

    @media (min-width: 530px) {
      font-size: 38px;
    }

    @media (min-width: 768px) {
      font-size: 53px;
    }

    @media (min-width: 1024px) {
      font-size: 48px;
    }

    @media (min-width: 1800px) {
      font-size: 59px;
    }
  }

  .minibio-brand {
    @include lingo-logo($gray);

    width: 229px;
    height: 79px;
    margin-left: -19px;
    margin-top: -22px;

    @media (min-width: 411px) {
      width: 274px;
      height: 101px;
      margin-top: -26px;
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

    @media (min-width: 768px) {
      width: 496px;
      height: 183px;
      margin-left: -39px;
      margin-top: -43px;

      @media (pointer: fine) {
        width: 448px;
        height: 166px;
      }
    }

    @media (min-width: 992px) {
      width: 327px;
      height: 136px;
      margin-left: -26px;

      @media (pointer: fine) {
        margin-top: -30px;
      }
    }

    @media (min-width: 960px) {
      @media (pointer: fine) {
        top: -50px;
        left: -168px;
      }
    }

    @media (min-width: 1024px) {
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        width: 367px;
        height: 135px;
        margin-top: -34px;
      }
    }

    @media (min-width: 1200px) {
      width: 370px;
      height: 137px;
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
    position: relative;

    @media (min-width: 768px) {
      font-size: 1.3rem;
    }

    @media (min-width: 992px) {
      padding-right: 27%;
    }

    @media (min-width: 1024px) {
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        font-size: 1.5rem;
      }
    }

    @media (min-width: 1300px) {
      padding-left: 15px;
    }

    @media (min-width: 1800px) {
      padding-right: 26%;
      padding-left: 11px;
      font-size: 1.1rem;
    }
  }
}
</style>
