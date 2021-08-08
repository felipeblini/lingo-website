<template>
  <div :id="anchorName" class="container partners-container">
    <div class="row">
      <div class="col-12 col-lg-8 offset-lg-2">
        <div class="partners-wrapper">
          <div class="brackets">{</div>
          <div class="content">
            <h1 class="yellow">{{ title[$store.state.language] }}</h1>
            <b-overlay :show="!showSwiper" variant="transparent">
              <div class="swipper-partners-container" v-if="showSwiper">
                <button
                  @click.prevent.stop="slidePrev"
                  class="partners-navigator pn-left"
                >
                  left
                </button>

                <div
                  v-swiper:partnersSwiper="partnerSwiperOptions"
                  class="partners-list"
                >
                  <div class="swiper-wrapper partners-swiper-wrapper">
                    <a
                      target="_blank"
                      class="swiper-slide partner-item"
                      v-for="(partner, index) in list"
                      :key="index"
                      :href="partner.url"
                      :title="partner.name"
                      :style="{ backgroundImage: `url(${partner.logoUrl})` }"
                    >
                      {{ partner.name }}
                    </a>
                  </div>
                </div>

                <button
                  @click.prevent.stop="slideNext"
                  class="partners-navigator pn-right"
                >
                  right
                </button>
              </div>
            </b-overlay>
          </div>
          <div class="brackets">}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partnersList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      title: {
        'pt-BR': 'Parceiros',
        'en-US': 'Partners',
      },
      list: [],
      showSwiper: false,
      partnerSwiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        breakpoints: {
          400: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
      },
    }
  },

  computed: {
    anchorName() {
      return `${this.$store.state.menu.partners[this.$store.state.language]
        .toLowerCase()
        .replace(' ', '-')}`
    },
  },

  watch: {
    partnersList: {
      handler: function (data) {
        const list = data.map((logo) => ({
          ordem: logo.acf.ordem,
          name: logo.title.rendered,
          logoUrl: logo.acf.logotipo_url,
        }))

        this.list = list.sort((a, b) => a.ordem - b.ordem)

        this.$emit('ready')
      },
      immediate: true,
    },

    '$store.state.language'(value) {
      this.$emit('ready')
    },
  },

  mounted() {
    setTimeout(() => {
      this.showSwiper = true
    }, 500)
  },

  methods: {
    slideNext() {
      this.partnersSwiper.slideNext()
    },
    slidePrev() {
      this.partnersSwiper.slidePrev()
    },
  },
}
</script>

<style lang="scss" scoped>
.partners-container {
  padding-top: 30px;

  @media (min-width: 768px) {
    padding-top: 100px;
  }

  .partners-wrapper {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > div {
      &.brackets {
        min-width: 50px;
        height: 138px;
        display: none;

        @media (min-width: 557px) {
          display: block;
          min-width: 35px;
        }

        @media (min-width: 650px) {
          display: block;
          min-width: 45px;
        }

        @media (min-width: 768px) {
          min-width: 55px;
          height: 171px;
        }

        background-image: url('./img/brackets.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position-y: center;

        text-indent: -9999px;
        overflow: hidden;

        &:nth-last-child(1) {
          @include flip-horizontal;
        }
      }

      &.content {
        height: 168px;
        border-radius: 44px;
        z-index: 0;

        @media (min-width: 768px) {
          height: 217px;
          border-radius: 60px;
        }

        @media (min-width: 992px) and (max-width: 1200px) {
          height: 190px;
        }

        margin: 0 20px;

        border: solid 1px #fafafa;

        -webkit-box-shadow: 2px 18px 56px -1px rgba(0, 0, 0, 0.37);
        -moz-box-shadow: 2px 18px 56px -1px rgba(0, 0, 0, 0.37);
        box-shadow: 2px 18px 56px -1px rgba(0, 0, 0, 0.37);

        flex-grow: 1;
        padding: 10px;
        text-align: center;

        .swipper-partners-container {
          display: flex;
          align-items: center;
          max-width: 515px;
          width: 100%;

          .partners-list {
            flex-grow: 1;
            margin: 0;
            padding: 10px;
            width: 180px;

            @media (min-width: 400px) {
              padding: 0;
              width: 265px;
            }

            @media (min-width: 768px) {
              width: 402px;
            }

            .swiper-wrapper.partners-swiper-wrapper {
              width: 164px;

              @media (min-width: 768px) {
                width: auto;
              }

              .partner-item {
                display: block;
                min-height: 80px;

                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;

                text-indent: -999px;
                overflow: hidden;

                @media (min-width: 768px) {
                  min-height: 100px;
                }
              }
            }
          }

          button.partners-navigator {
            background-color: transparent;
            background-repeat: no-repeat;
            width: 33px;
            height: 30px;
            outline: none;
            text-indent: -999px;
            overflow: hidden;
            border: none;
            margin: 0 5px;

            background-image: url('./img/left-arrow.svg');

            &.pn-right {
              @include flip-horizontal-and-vertical;
            }
          }
        }
      }
    }
  }
}
</style>
