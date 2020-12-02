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
              @slide-next-transition-start="onSwiperSlideNextStart"
              @slide-next-transition-end="onSwiperSlideNextEnd"
              @slide-prev-transition-start="onSwiperSlidePrevStart"
              @slide-prev-transition-end="onSwiperSlidePrevEnd"
              @touchStart="onTouchStart"
              @touchEnd="onTouchEnd"
            >
              <div class="swiper-wrapper">
                <!-- <div class="swiper-slide"></div> -->
                <div
                  class="swiper-slide testimonial-slide"
                  v-for="(testimonial, index) in list"
                  :key="index"
                >
                  <span v-if="testimonial.acf">
                    {{ testimonial.acf[`depoimento_${$store.state.language}`] }}
                  </span>
                </div>
              </div>
            </div>

            <div
              class="swiper persons-swiper"
              v-swiper:personsSwiper="personsSwiperOptions"
              ref="personsSwiper"
            >
              <div class="swiper-wrapper">
                <!-- <div class="swiper-slide"></div> -->
                <div
                  class="swiper-slide person-slide"
                  v-for="(testimonial, index) in list"
                  :key="index"
                >
                  <span class="name" v-if="testimonial.title">{{
                    testimonial.title.rendered
                  }}</span>
                  <span class="role" v-if="testimonial.acf">{{
                    testimonial.acf.empresa_e_cargo
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="navigation">
            <button
              class="testimonial-navigator tn-left"
              @click="navigate('prev')"
            >
              left
            </button>
            <button
              class="testimonial-navigator tn-right"
              ref="tn-right"
              @click="navigate('next')"
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
          delay: 5000,
          disableOnInteraction: true
        }
      },
      personsSwiperOptions: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true
      },
      list: [],
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
        this.list = [{}, ...list]
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
      const gap = (wrapper.clientHeight - slideActive.clientHeight) * -1
      const personsSwiper = document.querySelector('.persons-swiper')

      personsSwiper.style.top = `${gap + 59}px`
      personsSwiper.style.position = 'relative'
    },

    onSwiperSlideNextStart() {
      this.$refs.personsSwiper.style.opacity = 0
      this.$refs.personsSwiper.style.visibility = 'hidden'
    },

    onSwiperSlideNextEnd() {
      if (this.touched) {
        const swiperIndex = this.$refs.testimonialsSwiper.swiper.activeIndex
        this.$refs.personsSwiper.swiper.slideTo(swiperIndex, 0)
        this.thouched = false
      } else {
        this.$refs.personsSwiper.swiper.slideNext()
      }

      this.$refs.personsSwiper.style.visibility = 'visible'
      this.calculateGap()

      setTimeout(() => {
        this.$refs.personsSwiper.style.opacity = 1
      }, 100)

      if (this.list.length > this.testimonialsList.length)
        this.list = this.list.slice(1)
    },

    onSwiperSlidePrevStart() {
      this.$refs.personsSwiper.style.opacity = 0
      this.$refs.personsSwiper.style.visibility = 'hidden'
    },

    onTouchStart() {
      this.$refs.personsSwiper.style.opacity = 0
    },

    onTouchEnd() {
      this.touched = true
      console.log('touched')
      this.$refs.personsSwiper.style.opacity = 1
    },

    onSwiperSlidePrevEnd() {
      if (this.touched) {
        const swiperIndex = this.$refs.testimonialsSwiper.swiper.activeIndex
        this.$refs.personsSwiper.swiper.slideTo(swiperIndex, 0)
        this.thouched = false
      } else {
        this.$refs.personsSwiper.swiper.slidePrev()
      }

      this.$refs.personsSwiper.style.visibility = 'visible'

      this.calculateGap()

      setTimeout(() => {
        this.$refs.personsSwiper.style.opacity = 1
      }, 100)
    },

    navigate(direction) {
      direction === 'next'
        ? this.$refs.testimonialsSwiper.swiper.slideNext()
        : this.$refs.testimonialsSwiper.swiper.slidePrev()
    }
  },
  mounted() {
    const componentWrapper = document.querySelector(`#${this.anchorName}`)
    const initSwiper = () => {
      this.calculateGap()

      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight

      const componentBounding = componentWrapper.getBoundingClientRect()

      console.log({ top: componentBounding.top })
      if (componentBounding.top <= 400) {
        setTimeout(() => {
          this.calculateGap()
          console.log('show testimonials swiper')
          this.$refs.testimonialsSwiper.swiper.init()
        }, 3000)
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
              line-height: 14pt;

              &.name {
                text-transform: uppercase;
                font-weight: bold;
                color: #000;
              }
              &.role {
                font-weight: bold;
                margin-top: 5px;
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
          background-size: cover;
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


