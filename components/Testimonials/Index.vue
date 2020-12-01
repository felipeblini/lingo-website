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
        <div class="col-12 testimonials-line">
          <div class="testimonials-wrapper" v-if="false">
            <div
              class="swipper testimonials-swiper"
              v-swiper:testimonialsSwiper="testimonialsSwiperOptions"
              @ready="onSwiperSlideChange"
              @click-slide="onSwiperSlideChange"
              @slide-change-transition-start="onSwiperSlideChange"
              @slide-next-transition-end="onSwiperSlideChange"
              @slide-prev-transition-start="onSwiperSlideChange"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide testimonial-swiper-slide"
                  v-for="(testimonial, index) in testimonialsList"
                  :key="index"
                >
                  <span>{{
                    testimonial.acf[`depoimento_${$store.state.language}`]
                  }}</span>
                </div>
              </div>

              <div class="swiper-pagination swiper-pagination-bullets"></div>
            </div>
          </div>

          <div
            v-swiper:personSwiper="swiperPersonOption"
            style="border: solid 3px green"
            class="mt-3"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(testimonial, index) in testimonialsList"
                :key="index"
              >
                {{ testimonial.title.rendered }} -
                {{ testimonial.acf.empresa_e_cargo }}
              </div>
            </div>
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
      swiperPersonOption: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true
      }
      // showSwipper: true,
      // isShowSwipperSettle: false
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
    onSwiperSlideChange() {
      this.$emit('testimonial swipper changed')
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
      min-height: 300px;

      .testimonials-wrapper {
        .swiper {
          &.testimonials-swiper {
            border: solid 3px blue;
          }
        }

        .swiper-slide {
        }

        .swiper-pagination {
          > .swiper-pagination-bullet {
            background-color: red;
          }
        }
      }
    }
  }
}
</style>


