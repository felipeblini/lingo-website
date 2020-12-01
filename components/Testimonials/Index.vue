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
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide testimonial-slide"
                  v-for="(testimonial, index) in testimonialsList"
                  :key="index"
                >
                  <span>
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
                <div
                  class="swiper-slide person-slide"
                  v-for="(testimonial, index) in testimonialsList"
                  :key="index"
                >
                  <span class="name">{{ testimonial.title.rendered }}</span>
                  <span class="role">{{
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
        autoHeight: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true
        }
      },
      personsSwiperOptions: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true
      }
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
      handler: function(newValue) {
        this.originalListlength = newValue.length
        this.$emit('ready')
      },
      immediate: true
    },

    '$store.state.language'(value) {
      this.$emit('ready')
    }
  },
  methods: {
    onSwiperSlideNextStart() {
      this.$refs.personsSwiper.style.opacity = 0
      this.$refs.personsSwiper.style.visibility = 'hidden'
    },
    onSwiperSlideNextEnd() {
      this.$refs.personsSwiper.swiper.slideNext()
      this.$refs.personsSwiper.style.visibility = 'visible'

      setTimeout(() => {
        this.$refs.personsSwiper.style.opacity = 1
      }, 200)
    },

    onSwiperSlidePrevStart() {
      this.$refs.personsSwiper.style.opacity = 0
      this.$refs.personsSwiper.style.visibility = 'hidden'
    },

    onSwiperSlidePrevEnd() {
      this.$refs.personsSwiper.swiper.slidePrev()

      this.$refs.personsSwiper.style.visibility = 'visible'

      setTimeout(() => {
        this.$refs.personsSwiper.style.opacity = 1
      }, 200)
    },

    navigate(direction) {
      direction === 'next'
        ? this.$refs.testimonialsSwiper.swiper.slideNext()
        : this.$refs.testimonialsSwiper.swiper.slidePrev()
    }
  },
  mounted() {
    // this.showSwipper = false
    // const componentWrapper = document.querySelector(`#${this.anchorName}`)
    // const showSwiper = () => {
    //   const viewportHeight =
    //     window.innerHeight || document.documentElement.clientHeight
    //   const componentBounding = componentWrapper.getBoundingClientRect()
    //   console.log({ top: componentBounding.top })
    //   if (componentBounding.top <= 900 && !this.isShowSwipperSettle) {
    //     console.log('show testimonials swiper')
    //     this.isShowSwipperSettle = true
    //     this.$nextTick(() => {
    //       setTimeout(() => {
    //         this.showSwipper = true
    //       }, 300)
    //       this.$forceUpdate()
    //     })
    //   }
    // }
    // showSwiper()
    // window.addEventListener('scroll', () => {
    //   setTimeout(() => {
    //     showSwiper()
    //   }, 100)
    // })
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
      border: solid 3px red;
      justify-content: space-between;

      @media (min-width: 577px) {
        padding-left: 0px;
        padding-right: 0px;
      }

      @media (min-width: 1080px) {
        padding-left: 210px;
        min-height: 258px;
      }

      @media (min-width: 1200px) {
        padding-left: 150px;
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
        border: solid;
        font-size: 14pt;

        @media (min-width: 1024px) {
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            font-size: 18pt;
          }
        }

        .swiper {
          //border: solid;

          &.testimonials-swiper {
            // border: solid 3px blue;
          }

          &.persons-swiper {
            margin-top: 15px;
            transition: opacity 0.25s;

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
        border: solid 1px orangered;

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


