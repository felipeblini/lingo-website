<template>
  <div :id="anchorName" class="lingo-testimonials-component">
    <div class="quotations-image-wrapper">
      <img src="./img/aspas.svg" alt="" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-8 offset-xl-2 text-center">
          <h2>{{ title[$store.state.language] }}</h2>
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2 testimonials-line"
        >
          <div class="testimonials-wrapper">
            <div
              class="swiper testimonials-swiper"
              ref="testimonialsSwiper"
              v-swiper:testimonialsSwiper="testimonialsSwiperOptions"
              @slide-next-transition-start="onTextNextStart"
              @slide-next-transition-end="onTextNextEnd"
              @slide-prev-transition-start="onTextPrevStart"
              @slide-prev-transition-end="onPersonPrevEnd"
              @touchStart="onTouchStart"
              @touchEnd="onTouchEnd"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide testimonial-slide"
                  v-for="(testimonial, index) in listTexts"
                  :key="index"
                >
                  <span v-if="testimonial.acf">
                    {{ testimonial.acf[`depoimento_${$store.state.language}`] }}
                  </span>
                </div>
              </div>
            </div>

            <div
              class="swiper persons-swiper pt-3"
              v-swiper:personsSwiper="personsSwiperOptions"
              ref="personsSwiper"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide person-slide"
                  v-for="(testimonial, index) in listPersons"
                  :key="index"
                >
                  <span class="name" v-if="testimonial.title">
                    {{ testimonial.title.rendered }}
                  </span>
                  <span class="role" v-if="testimonial.acf">
                    {{ testimonial.acf.empresa_e_cargo }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="navigation">
            <button
              class="testimonial-navigator tn-left"
              @click="navigateText('prev')"
            >
              left
            </button>
            <button
              class="testimonial-navigator tn-right"
              ref="tn-right"
              @click="navigateText('next')"
            >
              right
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: Number,
      default: 480,
      description: 'wrapper maxwidth in points'
    },
    testimonialsList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      title: {
        'pt-BR': 'Depoimentos',
        'en-US': 'Testimonials'
      },
      testimonialsSwiperOptions: {
        init: false,
        autoHeight: false,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        }
      },
      personsSwiperOptions: {
        init: false,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true
      },
      listTexts: [],
      listPersons: [],
      isSwiperInitialized: false,
      touched: false
    }
  },

  computed: {
    anchorName() {
      return `${this.$store.state.menu.testimonials[this.$store.state.language]
        .toLowerCase()
        .replace(' ', '-')}`
    }
  },

  watch: {
    testimonialsList: {
      handler: function(list) {
        this.listTexts = [{}, ...list]
        this.listPersons = [{}, ...list]

        this.$emit('ready')
      },
      immediate: true
    },

    '$store.state.language'(value) {
      this.$emit('ready')
    }
  },
  methods: {
    calculateGap() {
      const slideActive = document.querySelector('.swiper-slide-active')
      const wrapper = document.querySelector('.testimonials-wrapper')

      if (slideActive && wrapper) {
        const gap = (wrapper.clientHeight - slideActive.clientHeight) * -1

        this.$refs.personsSwiper.style.top = `${gap + 79}px`
        this.$refs.personsSwiper.style.position = 'relative'
      }
    },

    initSwiper() {
      this.$refs.testimonialsSwiper.swiper.init()
      this.$refs.personsSwiper.swiper.init()
      this.navigateText('next')
      this.isSwiperInitialized = true
    },

    onTextNextStart() {
      this.$refs.personsSwiper.style.opacity = 0
      this.$refs.personsSwiper.style.visibility = 'hidden'
    },

    onTextNextEnd() {
      this.calculateGap()
      this.$refs.personsSwiper.style.visibility = 'visible'

      setTimeout(() => {
        const swiperIndex = this.$refs.testimonialsSwiper.swiper.activeIndex

        if (this.touched) {
          this.navigatePerson('', swiperIndex)
          this.thouched = false
        } else this.navigatePerson('next')

        this.$refs.personsSwiper.style.opacity = 1
      }, 500)

      setTimeout(() => {
        if (this.listTexts.length > this.testimonialsList.length) {
          this.listTexts = this.listTexts.slice(1)
          this.listPersons = this.listPersons.slice(1)
        }
      }, 2500)
    },

    onTextPrevStart() {
      this.$refs.personsSwiper.style.opacity = 0
      this.$refs.personsSwiper.style.visibility = 'hidden'
      this.calculateGap()
    },

    onPersonPrevEnd() {
      const swiperIndex = this.$refs.testimonialsSwiper.swiper.activeIndex

      if (this.touched) {
        this.$refs.personsSwiper.swiper.slideTo(swiperIndex, 0)
        this.thouched = false
      } else {
        this.$refs.personsSwiper.swiper.slidePrev()
      }

      this.$refs.personsSwiper.style.visibility = 'visible'

      setTimeout(() => {
        this.$refs.personsSwiper.style.opacity = 1
      }, 100)
    },

    onTouchStart() {
      this.$refs.personsSwiper.style.opacity = 0
    },

    onTouchEnd() {
      this.touched = true
      this.$refs.personsSwiper.style.opacity = 1
    },

    navigateText(direction) {
      direction === 'next'
        ? this.$refs.testimonialsSwiper.swiper.slideNext()
        : this.$refs.testimonialsSwiper.swiper.slidePrev()
    },

    navigatePerson(direction, index) {
      if (index) this.$refs.personsSwiper.swiper.slideTo(index, 0)
      else if (direction === 'next') this.$refs.personsSwiper.swiper.slideNext()
      else if (direction === 'prev') this.$refs.personsSwiper.swiper.slidePrev()
    }
  },
  mounted() {
    const initSwiper = () => {
      const swiperWraper = document.querySelector('.swiper-wrapper')

      if (
        swiperWraper.getBoundingClientRect().top <=
        window.innerHeight - 100
      ) {
        if (!this.isSwiperInitialized) this.initSwiper()
      }
    }

    initSwiper()

    window.addEventListener('scroll', () => {
      setTimeout(() => {
        initSwiper()
      }, 100)
    })
  }
}
</script>

<style lang="scss">
.lingo-testimonials-component {
  position: relative;

  .quotations-image-wrapper {
    z-index: 0;
    margin-top: -20%;
    margin-bottom: 8px;
    padding-left: 67px;
    overflow: hidden;
    img {
      width: 104%;
    }
    @media (min-width: 1080px) {
      display: none;
    }
  }

  .container {
    h2 {
      color: $yellow;
      font-size: 32pt;
      @media (min-width: 768px) {
        font-size: 56pt;
      }
      @media (min-width: 1080px) {
        margin-left: 175px;
      }
      @media (min-width: 1200px) {
        margin-top: 17px;
      }
      @media (min-width: 1500px) {
        margin-top: 150px;
      }
    }

    .testimonials-line {
      justify-content: space-between;

      @media (min-width: 577px) {
        padding-left: 0px;
        padding-right: 0px;
      }

      @media (min-width: 1080px) {
        padding-left: 240px;
        // min-height: 258px;
      }

      @media (min-width: 1200px) {
        padding-left: 190px;
      }

      // @media (min-width: 1080px) {
      //   justify-content: flex-end;
      //   margin-left: 177px;
      // }
      // @media (min-width: 1200px) {
      //   margin-left: 309px;
      // }

      display: flex;
      flex-direction: column;

      .testimonials-wrapper {
        font-size: 14pt;

        @media (min-width: 1024px) {
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            font-size: 18pt;
          }
        }

        .swiper {
          &.testimonials-swiper {
            // border: solid 3px blue;
          }

          &.persons-swiper {
            margin-top: 15px;
            transition: opacity 0.25s;
            pointer-events: none;
            outline: 0;

            span {
              display: block;

              &.name {
                text-transform: uppercase;
                font-weight: bold;
                color: #000;
                line-height: 14pt;
              }

              &.role {
                font-weight: bold;
                margin-top: 5px;
                line-height: 13pt;
              }
            }
          }

          .swiper-slide {
            &.testimonial-slide {
              // border: solid 3px orangered;
            }

            &.person-slide {
              // border: solid 3px orangered;
            }
          }
        }
      }

      .navigation {
        @media (min-width: 1080px) {
          width: 269px;
        }

        padding-top: 18px;
        display: flex;
        justify-content: space-between;

        button.testimonial-navigator {
          background-color: transparent;
          background-repeat: no-repeat;
          width: 30px;
          height: 30px;
          outline: none;
          text-indent: -999px;
          overflow: hidden;
          border: none;
          background-image: url('./img/left-arrow.svg');

          &.tn-right {
            @include flip-horizontal-and-vertical;
          }
        }
      }
    }
  }
}
</style>


