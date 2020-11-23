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
          class="col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2 testimonials-line "
        >
          <div
            class="testimonials-wrapper"
            ref="listWrapper"
            :style="{ width: `${responsiveWidth}pt` }"
            v-touch:swipe="touchHandler"
          >
            <ul
              class="testimonialsList"
              @click="stopInterval"
              @mouseover="stopInterval"
              @mouseout="restartInterval"
            >
              <div
                class="items-wrapper"
                ref="itemsWrapper"
                :style="`transform: translateX(${responsiveWidth}px)`"
              >
                <!-- :style="{ marginLeft: `${responsiveWidth}pt` }" -->
                <li
                  class="testimonial"
                  v-for="(testimonial, index) in testimonialsList"
                  :key="index"
                  :id="`t-${index}`"
                  :style="{ minWidth: `${responsiveWidth}pt` }"
                >
                  <div
                    class="text"
                    :style="{
                      minWidth: `${responsiveWidth}pt`,
                      maxWidth: `${responsiveWidth}pt`,
                      // marginLeft: `${responsiveWidth}pt`
                      transform: `translateX(${responsiveWidth}px)`
                    }"
                  >
                    "{{
                      testimonial.acf[`depoimento_${$store.state.language}`]
                    }}"
                  </div>
                  <div
                    class="client"
                    :style="{
                      minWidth: `${responsiveWidth}pt`,
                      maxWidth: `${responsiveWidth}pt`,
                      // marginLeft: `${responsiveWidth}pt`
                      transform: `translateX(${responsiveWidth}px)`
                    }"
                  >
                    <div class="name">{{ testimonial.title.rendered }}</div>
                    <div class="role">
                      {{ testimonial.acf.empresa_e_cargo }}
                    </div>
                  </div>
                </li>
              </div>
            </ul>
            <div class="navigation">
              <button
                class="testimonial-navigator tn-left"
                @click="navigate('prev')"
              >
                left
              </button>
              <button
                class="testimonial-navigator tn-right"
                v-if="!$store.state.isLoading"
                @click="navigate('next')"
              >
                right
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const _transitionProp = 'transform'
const _transitionTime = 6000

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
      active: 0,
      cloneRightIndex: 0,
      cloneLeftIndex: 1,
      interval: null,
      wrapperWidth: 0,
      originalListlength: 0,
      responsiveWidth: 0
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
  mounted() {
    function _pixelToPoint(pixel) {
      return Math.floor(pixel / 1.3333333333333333)
    }

    this.responsiveWidth = this.maxWidth

    if (_pixelToPoint(window.innerWidth) < this.maxWidth) {
      this.responsiveWidth = _pixelToPoint(window.innerWidth) - 50
    }

    this.wrapperWidth = this.$refs.listWrapper
      ? this.$refs.listWrapper.clientWidth
      : this.maxWidth

    window.addEventListener('resize', () => {
      setTimeout(() => {
        if (_pixelToPoint(window.innerWidth) < this.maxWidth) {
          this.responsiveWidth = _pixelToPoint(window.innerWidth) - 40
          this.stepNext()
        }

        this.wrapperWidth = this.$refs.listWrapper
          ? this.$refs.listWrapper.clientWidth
          : this.maxWidth
      }, 100)
    })

    const handleScroll = () => {
      setTimeout(() => {
        if (
          document
            .querySelectorAll('.testimonial > .text')[0]
            .getBoundingClientRect().top <=
            window.innerHeight - 100 &&
          !this.interval
        ) {
          console.log('initialized testimonials swiper')
          this.stepNext(0)

          window.removeEventListener('scroll', handleScroll)
          this.active = 0

          this.restartInterval()
        }
      }, 100)
    }

    window.addEventListener('scroll', handleScroll)
    // this.fetchList()
  },

  destroyed() {
    clearInterval(this.interval)
  },

  methods: {
    navigate(to) {
      this.restartInterval(3000)
      console.log({ to })
      to === 'next' ? this.stepNext() : this.stepPrev()
    },
    touchHandler(direction) {
      function _isTouchDevice() {
        try {
          document.createEvent('TouchEvent')
          return true
        } catch (e) {
          return false
        }
      }

      if (_isTouchDevice()) {
        direction === 'left' ? this.stepNext() : this.stepPrev()
      }
    },

    stepNext(active = ++this.active) {
      if (active < this.testimonialsList.length) {
        const width = this.$refs.listWrapper
          ? this.$refs.listWrapper.clientWidth
          : this.maxWidth

        const wrapper = this.$refs.itemsWrapper

        if (wrapper) {
          wrapper.style.transitionDelay = '0s'
          wrapper.style.transitionProperty = _transitionProp

          // wrapper.style.marginLeft = `${active * width * -1}px`
          wrapper.style.transform = `translateX(${active * width * -1}px)`

          document.querySelectorAll('.testimonial').forEach((el) => {
            el.classList.remove('active')
          })

          const activeItem = document.querySelector(`#t-${active}`)
          const prevItem = document.querySelector(`#t-${active - 1}`)

          activeItem.classList.add('active')

          activeItem.children[0].style.transitionProperty = _transitionProp
          // activeItem.children[0].style.marginLeft = 0
          activeItem.children[0].style.transform = `translateX(0)`

          activeItem.children[1].style.transitionProperty = _transitionProp
          // activeItem.children[1].style.marginLeft = 0
          activeItem.children[1].style.transform = `translateX(0)`

          activeItem.children[0].style.visibility = 'visible'
          activeItem.children[1].style.visibility = 'visible'

          activeItem.children[1].style.opacity = '0'
          setTimeout(() => {
            activeItem.children[1].style.opacity = '1'
          }, 300)

          if (prevItem) {
            prevItem.children[0].style.transitionProperty = _transitionProp
            // prevItem.children[0].style.marginLeft = `${width * -1}px`
            prevItem.children[0].style.transform = `translateX(${width * -1}px)`

            prevItem.children[1].style.transitionProperty = _transitionProp
            // prevItem.children[1].style.marginLeft = `${width * -1}px`
            prevItem.children[1].style.marginLeft = `translateX(${width *
              -1}px)`

            setTimeout(() => {
              prevItem.children[0].style.transitionProperty = 'none'
              prevItem.children[1].style.transitionProperty = 'none'
            }, 500)
          }

          setTimeout(() => {
            wrapper.style.transitionProperty = 'none'
            activeItem.children[0].style.transitionProperty = 'none'
            activeItem.children[1].style.transitionProperty = 'none'
          }, 500)
        }

        this.restartInterval()
      } else {
        let clone = this.testimonialsList[this.cloneRightIndex]

        if (!clone) {
          clone = this.testimonialsList[(this.cloneRightIndex = 0)]
        }

        this.testimonialsList.push(clone)
        this.cloneRightIndex++
        this.$nextTick(() => this.stepNext(this.active))
      }
    },

    stepPrev(active = this.active) {
      const width = this.$refs.listWrapper
        ? this.$refs.listWrapper.clientWidth
        : this.maxWidth

      if (active > 0) {
        const wrapper = this.$refs.itemsWrapper

        if (wrapper) {
          // const wrapperMgLeft = Number(
          //   wrapper.style.marginLeft.replace('px', '')
          // )

          const transfProp = wrapper.style.transform
          const wrpTransfX = Number(transfProp.split('(')[1].replace('px)', ''))

          const activeItem = document.querySelector(`#t-${active}`)
          const prevItem = document.querySelector(`#t-${active - 1}`)

          if (prevItem) {
            activeItem.classList.remove('active')
            prevItem.classList.add('active')

            wrapper.style.transitionProperty = _transitionProp

            prevItem.children[0].style.transitionProperty = _transitionProp
            prevItem.children[1].style.transitionProperty = _transitionProp

            // wrapper.style.marginLeft = `${wrapperMgLeft + width}px`
            wrapper.style.transform = `translateX(${wrpTransfX + width}px)`

            // prevItem.children[0].style.marginLeft = 0
            prevItem.children[0].style.transform = `translateX(0)`
            // prevItem.children[1].style.marginLeft = 0
            prevItem.children[1].style.transform = `translateX(0)`

            // activeItem.children[0].style.marginLeft = `${width}px`
            activeItem.children[0].style.transform = `translateX(${width}px)`
            // activeItem.children[1].style.marginLeft = `${width}px`
            activeItem.children[1].style.transform = `translateX(${width}px)`

            this.active--

            setTimeout(() => {
              wrapper.style.transitionProperty = 'none'

              prevItem.children[0].style.transitionProperty = 'none'
              prevItem.children[1].style.transitionProperty = 'none'
            }, 1000)
          }
        }
      } else {
        const clone = this.testimonialsList[this.originalListlength - 1]

        setTimeout(() => {
          this.testimonialsList.unshift(clone)

          const activeItem = document.querySelector(`#t-0`)

          document.querySelectorAll('.testimonial').forEach((el) => {
            el.classList.remove('active')
          })

          activeItem.classList.add('active')

          // activeItem.children[0].style.marginLeft = `${width * -1}px`
          activeItem.children[0].style.transform = `translateX(${width * -1}px)`

          // activeItem.children[1].style.marginLeft = `${width * -1}px`
          activeItem.children[1].style.transform = `translateX(${width * -1}px)`

          activeItem.children[0].style.visibility = 'visible'
          activeItem.children[1].style.visibility = 'visible'

          setTimeout(() => {
            activeItem.children[0].style.transitionProperty = _transitionProp
            activeItem.children[1].style.transitionProperty = _transitionProp

            // activeItem.children[0].style.marginLeft = 0
            activeItem.children[0].style.transform = `translateX(0)`
            // activeItem.children[1].style.marginLeft = 0
            activeItem.children[1].style.transform = `translateX(0)`
          }, 200)

          setTimeout(() => {
            activeItem.children[0].style.transitionProperty = 'none'
            activeItem.children[1].style.transitionProperty = 'none'
          }, 900)
        }, 0)
      }

      this.restartInterval()
    },

    stopInterval() {
      clearInterval(this.interval)
    },

    restartInterval(prostponeTime) {
      clearInterval(this.interval)

      this.interval = setInterval(() => {
        setTimeout(() => {
          this.stepNext()
        }, prostponeTime || 0)
      }, _transitionTime)
    }
  }
}
</script>

<style lang="scss" scoped>
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
      display: flex;
      justify-content: center;

      @media (min-width: 1080px) {
        justify-content: flex-end;
        margin-left: 177px;
      }

      @media (min-width: 1200px) {
        margin-left: 309px;
      }

      .testimonials-wrapper {
        font-size: 14pt;

        @media (min-width: 1024px) {
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            font-size: 18pt;
          }
        }

        ul.testimonialsList {
          width: 100%;
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;

          .items-wrapper {
            width: 100%;
            display: flex;
            border-bottom: solid 4px transparent;

            transition-property: none;

            li.testimonial {
              .text {
                transition-property: none;
                transition-duration: 0.25s;
                transition-timing-function: ease-in-out;

                visibility: hidden;
              }

              .client {
                height: 75px;
                padding-top: 15px;

                transition-property: none;
                transition-duration: 0.25s;
                transition-timing-function: ease-in-out;
                transition-delay: 0.3s;

                visibility: hidden;

                .name {
                  text-transform: uppercase;
                  font-weight: bold;
                  color: #000;
                }

                .role {
                  font-weight: bold;
                  margin-top: -12px;
                }
              }
            }
          }
        }

        .navigation {
          @media (min-width: 1080px) {
            width: 269px;
          }

          height: 57px;
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
              z-index: 4;
            }
          }
        }
      }
    }
  }
}
</style>
