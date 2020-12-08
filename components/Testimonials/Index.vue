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
          <div class="swipers-wrapper">
            <div
              class="swiper testimonials-swiper"
              ref="testimonialsSwiper"
              v-swiper:testimonialsSwiper="testimonialsSwiperOptions"
              @slide-next-transition-start="onTextNextStart"
              @slide-next-transition-end="onTextNextEnd"
              @slide-prev-transition-start="onTextPrevStart"
              @slide-prev-transition-end="onTextPrevEnd"
              @touchMove="onTouchMove"
              @touchEnd="onTouchEnd"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide testimonial-slide"
                  v-for="(testimonial, index) in listOfTestimonials"
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
              ref="personsSwiper"
              v-swiper:personsSwiper="personsSwiperOptions"
              @slide-next-transition-end="onPersonNextEnd"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide person-slide"
                  v-for="(person, index) in listOfPersons"
                  :key="index"
                >
                  <span class="name" v-if="person.title">
                    {{ person.title.rendered }}
                  </span>
                  <span class="role" v-if="person.acf">
                    {{ person.acf.empresa_e_cargo }}
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
          delay: 15000,
          disableOnInteraction: false
        }
      },
      personsSwiperOptions: {
        init: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true
      },
      listOfTestimonials: [],
      listOfPersons: [],
      isSwiperInitialized: false,
      isJustInitialized: false,
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
        this.listOfTestimonials = [{}]
        this.listOfPersons = [{}]

        list.forEach((item) => {
          this.listOfTestimonials.push(item)
          this.listOfPersons.push(item)
        })

        this.$emit('ready')
      },
      immediate: true
    },

    '$store.state.language'(value) {
      this.$emit('ready')
    }
  },
  methods: {
    calculatePersonSwiperTopPositon() {
      const testimonialsSwiper = this.$refs.testimonialsSwiper
      const testimonialSlideActive = document.querySelector(
        '.swiper-slide.testimonial-slide.swiper-slide-active'
      )
      const personsSwiper = this.$refs.personsSwiper

      if (testimonialSlideActive && testimonialSlideActive && personsSwiper) {
        const gap =
          testimonialsSwiper.clientHeight - testimonialSlideActive.clientHeight

        personsSwiper.style.transform = `translateY(-${gap}px)`
      }
    },

    initSwiper() {
      this.$refs.testimonialsSwiper.swiper.init()

      this.navigateText('next')
      this.isSwiperInitialized = true
      this.isJustInitialized = true
    },

    onTextNextStart() {
      this.$refs.personsSwiper.style.opacity = 0
      this.$refs.personsSwiper.style.visibility = 'hidden'
    },

    onTextNextEnd() {
      this.calculatePersonSwiperTopPositon()
      this.$refs.personsSwiper.style.visibility = 'visible'

      setTimeout(() => {
        if (this.touched) {
          const toIndex = this.$refs.testimonialsSwiper.swiper.activeIndex

          this.navigatePerson('', toIndex)
          this.thouched = false
        } else if (!this.isJustInitialized) {
          this.navigatePerson('next')
        }

        this.isJustInitialized = false

        this.$refs.personsSwiper.style.opacity = 1
      }, 400)

      setTimeout(() => {
        if (this.listOfTestimonials.length > this.testimonialsList.length) {
          this.listOfTestimonials = this.listOfTestimonials.slice(1)
        }
      }, 1500)
    },

    onTextPrevStart() {
      this.$refs.personsSwiper.style.opacity = 0
      this.$refs.personsSwiper.style.visibility = 'hidden'
      this.calculatePersonSwiperTopPositon()
    },

    onTextPrevEnd() {
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

    onPersonNextEnd() {
      setTimeout(() => {
        console.log('onPersonNextEnd sto')
        if (this.listOfPersons.length > this.testimonialsList.length) {
          this.listOfPersons = this.listOfPersons.slice(1)
        }
      }, 1500)
    },

    onTouchMove() {
      this.$refs.personsSwiper.style.opacity = 0.3
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

        if (this.isSwiperInitialized) {
          this.$refs.personsSwiper.style.opacity = 1
        }
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

      .swipers-wrapper {
        font-size: 14pt;

        @media (min-width: 1024px) {
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            font-size: 18pt;
          }
        }

        .swiper {
          .swiper-slide {
            // border: solid 3px transparent;
          }

          &.testimonials-swiper {
            // border: solid 3px #666;

            .swiper-slide.testimonial-slide {
              &.swiper-slide-active {
                // border: solid 3px red;
              }
            }
          }

          &.persons-swiper {
            transition: opacity 0.25s;
            pointer-events: none;
            outline: 0;

            .swiper-slide.person-slide {
              min-height: 50px;

              &.swiper-slide-active {
                // border: solid 3px blue;
              }

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


