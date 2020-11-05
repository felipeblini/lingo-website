<template>
  <div :id="anchorName" ref="lingo-minibio" class="container lingo-minibio">
    <div>
      <h3 class="gray minibio-title">{{ title[$store.state.language] }}</h3>
      <div class="minibio-brand"></div>
    </div>
    <div class="minibio-content">
      <div class="minibio-text" v-html="textExcerpt[$store.state.language]" />
      <div class="minibio-button">
        <b-button variant="outline-primary" size="sm" @click="showModal">
          {{ buttonOpenModalText[$store.state.language] }}
        </b-button>
      </div>
    </div>

    <modal
      name="text-complete-modal"
      classes="minibio-modal"
      :scrollable="true"
      height="auto"
      :adaptive="true"
    >
      <div v-html="textComplete[$store.state.language]" />

      <div class="d-flex p-2 align-items-center justify-content-end">
        <b-button
          variant="outline-primary"
          size="sm"
          @click="$modal.hide('text-complete-modal')"
        >
          {{ buttonCloseModalText[$store.state.language] }}
        </b-button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  props: {
    heroHeight: Number,
    serverSideTextExcerpt: {
      type: String,
      default: '',
      description:
        'Initial pt-BR article excerpt comming from server side rendering'
    },
    serverSideTextComplete: {
      type: String,
      default: '',
      description:
        'Initial pt-BR artivcle content comming from server side rendering'
    },
    openModalByDefault: {
      type: Boolean,
      default: false,
      description: 'When content modal shoud be opened by defaul'
    }
  },
  data() {
    return {
      title: {
        'pt-BR': 'Conheça a',
        'en-US': 'About'
      },
      textExcerpt: {
        'pt-BR': '',
        'en-US': ''
      },
      textComplete: {
        'pt-BR': '',
        'en-US': ''
      },
      buttonOpenModalText: {
        'pt-BR': 'Leia mais',
        'en-US': 'Read more'
      },
      buttonCloseModalText: {
        'pt-BR': 'Fechar',
        'en-US': 'Close'
      }
    }
  },
  computed: {
    miniBioMarginTop() {
      return ((this.heroHeight * 44) / 100) * -1
    },
    anchorName() {
      return `${this.$store.state.menu.company[this.$store.state.language]
        .toLowerCase()
        .replace(' ', '-')}`
    }
  },

  watch: {
    miniBioMarginTop(newValue) {
      this.$refs['lingo-minibio'].style.marginTop = `${newValue}px`
      this.$refs['lingo-minibio'].style.visibility = 'visible'

      this.$emit('minibio-margin-calculated')
    },

    '$store.state.language'(newValue) {
      this.fetchContent(newValue)
    },

    serverSideTextExcerpt: {
      handler: function(newValue) {
        this.textExcerpt['pt-BR'] = newValue
        this.$emit('ready')
      },
      immediate: true
    },

    serverSideTextComplete: {
      handler: function(newValue) {
        this.textComplete['pt-BR'] = newValue
      },
      immediate: true
    }
  },

  mounted() {
    if (this.openModalByDefault) this.$modal.show('text-complete-modal')
  },

  methods: {
    async fetchContent(lang) {
      if (this.textExcerpt[lang]) {
        this.$emit('ready')
      } else {
        const slug = `minibio-${lang.replace('-', '').toLowerCase()}`
        const response = await this.$axios.get(`posts?slug=${slug}`)

        this.textExcerpt[lang] = response.data[0].excerpt.rendered
        this.textComplete[lang] = response.data[0].content.rendered
        this.$emit('ready')
      }
    },

    showModal() {
      this.$modal.show('text-complete-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.lingo-minibio {
  position: relative;
  z-index: 1;

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

  @media (min-width: 490px) and (max-width: 775px) {
    padding-top: 164px;

    @media (min-width: 640px) {
      padding-top: 200px;
    }
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
    padding-top: 96px;
    padding-left: 30px;
  }

  @media (min-width: 1015px) {
    padding-top: 120px;
  }

  @media (min-width: 1040px) {
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

  .minibio-content {
    padding-left: 0px;
    font-size: 0.9rem;
    position: relative;
    font-size: 16pt;

    @media (min-width: 768px) {
      padding-right: 28%;
    }

    @media (min-width: 1024px) {
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        font-size: 20pt;
      }
    }

    @media (min-width: 1300px) {
      padding-left: 15px;
    }

    @media (min-width: 1800px) {
      padding-right: 26%;
      padding-left: 11px;
    }

    .minibio-button {
      a {
        color: $pink;
      }
    }
  }
}
</style>

<style lang="scss">
.minibio-modal {
  padding: 40px;
  border: solid 1px $pink;
  border-radius: 3px;
  background: rgba($light-gray, 0.96);
}
</style>
