<template>
  <div :id="anchorName" class="container partners-container">
    <div class="row">
      <div class="col-12 col-lg-8 offset-lg-2">
        <div class="partners-wrapper">
          <div class="brackets">{</div>
          <div class="content">
            <h1 class="yellow">{{ title[$store.state.language] }}</h1>
            <div class="swipper-partners-container">
              <button
                @click.prevent.stop="slidePrev"
                class="partners-navigator pn-left"
              >
                left
              </button>

              <div
                v-swiper:mySwiper="swiperOption"
                class="partners-list"
                v-if="showSlider"
              >
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide partner-item"
                    v-for="(partner, index) in list"
                    :key="index"
                    :style="{ backgroundImage: `url(${partner.logoUrl})` }"
                  >
                    {{ partner.nome }}
                  </div>
                </div>
              </div>

              <button
                @click.prevent.stop="slideNext"
                class="partners-navigator pn-right"
              >
                right
              </button>
            </div>
          </div>
          <div class="brackets">}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        'pt-BR': 'Parceiros',
        'en-US': 'Partners'
      },
      list: [],
      showSlider: false,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 8,
        loop: true,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },

          819: {
            slidesPerView: 3,
            spaceBetween: 10
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 6
          }
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        }
      }
    }
  },

  computed: {
    anchorName() {
      return `${this.$store.state.menu.partners[this.$store.state.language]
        .toLowerCase()
        .replace(' ', '-')}`
    }
  },

  mounted() {
    this.list = [
      {
        nome: 'p1',
        link: '',
        logoUrl:
          'https://res.cloudinary.com/dwtuxv53y/image/upload/v1576620062/logo1_1X_yaf1mg.jpg'
      },
      {
        nome: 'p2',
        link: '',
        logoUrl:
          'https://res.cloudinary.com/dwtuxv53y/image/upload/v1576620062/logo2_1X_lm12ww.jpg'
      },
      {
        nome: 'p3',
        link: '',
        logoUrl:
          'https://res.cloudinary.com/dwtuxv53y/image/upload/v1576620063/logo3_1X_xu2iqw.jpg'
      },
      {
        nome: 'p4',
        link: '',
        logoUrl:
          'https://res.cloudinary.com/dwtuxv53y/image/upload/v1576620063/logo4_1X_gnf3jk.jpg'
      },
      {
        nome: 'p5',
        link: '',
        logoUrl:
          'https://res.cloudinary.com/dwtuxv53y/image/upload/v1576620062/logo2_1X_lm12ww.jpg'
      }
    ]

    setTimeout(() => {
      if (this.list.length < 5) {
        this.swiperOption.slidesPerView = this.list.length
        this.swiperOption.loop = false
        this.swiperOption.spaceBetween = 0

        this.showSlider = true

        setTimeout(() => {
          const list = document.querySelectorAll('.partners-list')[0]
          list.classList.add('d-flex')
          list.classList.add('justify-content-center')

          const swiperWrapper = document.querySelectorAll('.swiper-wrapper')[0]
          swiperWrapper.classList.add('d-flex')
          swiperWrapper.classList.add('justify-content-center')
        }, 500)
      }

      this.showSlider = true
    }, 500)

    console.log('partners ready')
    this.$emit('ready')
  },

  methods: {
    slideNext() {
      this.mySwiper.slideNext()
    },
    slidePrev() {
      this.mySwiper.slidePrev()
    }
  }
}
</script>

<style lang="scss" scoped>
.partners-container {
  padding-top: 73px;

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
        width: 50px;
        height: 138px;

        @media (min-width: 768px) {
          width: 62px;
          height: 171px;
        }

        background-image: url('./img/brackets.svg');
        background-repeat: no-repeat;
        background-size: contain;

        text-indent: -9999px;
        overflow: hidden;

        &:nth-last-child(1) {
          @include flip-horizontal;
        }
      }

      &.content {
        height: 168px;
        border-radius: 44px;

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
            padding: 0;

            width: 100%;

            .swiper-wrapper {
              width: 164px;

              .partner-item {
                min-height: 80px;
                max-width: 200px;

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
            background-size: cover;
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
