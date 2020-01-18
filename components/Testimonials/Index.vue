<template>
  <div :id="anchorName" class="lingo-testimonials-component">
    <div class="quotations-image-wrapper">
      <img src="./img/aspas.svg" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-8 offset-xl-2 text-center">
          <h2 class="gray">
            {{ title[$store.state.language] }}
          </h2>
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
            <ul class="testimonialsList">
              <div
                class="items-wrapper"
                ref="itemsWrapper"
                :style="{ marginLeft: `${responsiveWidth}pt` }"
              >
                <li
                  @click="restartInterval"
                  @mouseover="restartInterval"
                  class="testimonial"
                  v-for="(testimonial, index) in list[$store.state.language]"
                  :key="index"
                  :id="`t-${index}`"
                  :style="{ minWidth: `${responsiveWidth}pt` }"
                >
                  <div
                    class="text"
                    :style="{
                      minWidth: `${responsiveWidth}pt`,
                      maxWidth: `${responsiveWidth}pt`,
                      marginLeft: `${responsiveWidth}pt`
                    }"
                  >
                    "{{ testimonial.text }}"
                  </div>
                  <div
                    class="client"
                    :style="{
                      minWidth: `${responsiveWidth}pt`,
                      maxWidth: `${responsiveWidth}pt`,
                      marginLeft: `${responsiveWidth}pt`
                    }"
                  >
                    <div class="name">{{ testimonial.client.name }}</div>
                    <div class="role">{{ testimonial.client.role }}</div>
                  </div>
                </li>
              </div>
            </ul>
            <div class="navigation">
              <button class="testimonial-navigator tn-left" @click="stepPrev()">
                left
              </button>
              <button
                class="testimonial-navigator tn-right"
                @click="stepNext()"
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
export default {
  props: {
    maxWidth: {
      type: Number,
      default: 480,
      description: 'wrapper maxwidth in points'
    }
  },
  data() {
    return {
      title: {
        'pt-BR': 'Depoimentos',
        'en-US': 'Testimonials'
      },
      list: {
        'pt-BR': [],
        'en-US': []
      },
      active: 0,
      cloneRightIndex: 0,
      cloneLeftIndex: 1,
      interval: 0,
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
  mounted() {
    function _pixelToPoint(pixel) {
      return Math.floor(pixel / 1.3333333333333333)
    }

    this.responsiveWidth = this.maxWidth

    console.log({
      innerWidth: _pixelToPoint(window.innerWidth),
      maxWidth: this.maxWidth
    })

    if (_pixelToPoint(window.innerWidth) < this.maxWidth) {
      this.responsiveWidth = _pixelToPoint(window.innerWidth) - 50
    }

    console.log({ responsiveWidth: this.responsiveWidth })

    this.wrapperWidth = this.$refs.listWrapper
      ? this.$refs.listWrapper.clientWidth
      : this.maxWidth

    window.addEventListener('resize', () => {
      setTimeout(() => {
        if (_pixelToPoint(window.innerWidth) < this.maxWidth) {
          this.responsiveWidth = _pixelToPoint(window.innerWidth) - 50
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
          window.innerHeight - 100
        ) {
          this.stepNext(0)

          window.removeEventListener('scroll', handleScroll)
          this.active = 0

          if (!this.interval) {
            this.interval = setInterval(() => {
              this.stepNext()
            }, 6000)
          }
        }
      }, 100)
    }

    window.addEventListener('scroll', handleScroll)
    this.fetchList()
  },
  methods: {
    fetchList() {
      if (this.list[this.$store.state.language].length === 0) {
        this.list[this.$store.state.language] = [
          {
            id: 1,
            text:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
            client: {
              name: 'Nome da Silva 1',
              role: `Empresa - Cargo ${this.$store.state.language}`
            }
          },
          {
            id: 2,
            text:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
            client: {
              name: 'Fulano de Souza 2',
              role: `Empresa2 - Cargo2 ${this.$store.state.language}`
            }
          },
          {
            id: 2,
            text:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
            client: {
              name: 'Fulano de Souza 3',
              role: `Empresa2 - Cargo3 ${this.$store.state.language}`
            }
          },
          {
            id: 2,
            text:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
            client: {
              name: 'Fulano de Souza 4',
              role: `Empresa2 - Cargo4 ${this.$store.state.language}`
            }
          },
          {
            id: 2,
            text:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
            client: {
              name: 'Fulano de Souza 5',
              role: `Empresa2 - Cargo5 ${this.$store.state.language}`
            }
          },
          {
            id: 2,
            text:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
            client: {
              name: 'Fulano de Souza 6',
              role: `Empresa2 - Cargo6 ${this.$store.state.language}`
            }
          }
        ]

        this.originalListlength = this.list[this.$store.state.language].length
      }

      this.$emit('ready')
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
      if (active < this.list[this.$store.state.language].length) {
        const width = this.$refs.listWrapper
          ? this.$refs.listWrapper.clientWidth
          : this.maxWidth

        const wrapper = this.$refs.itemsWrapper

        if (wrapper) {
          wrapper.style.transitionDelay = '0s'
          wrapper.style.transitionProperty = 'margin-left'
          wrapper.style.marginLeft = `${active * width * -1}px`

          document.querySelectorAll('.testimonial').forEach((el) => {
            el.classList.remove('active')
          })

          const activeItem = document.querySelector(`#t-${active}`)
          const prevItem = document.querySelector(`#t-${active - 1}`)

          activeItem.classList.add('active')

          activeItem.children[0].style.transitionProperty = 'margin-left'
          activeItem.children[0].style.marginLeft = 0

          activeItem.children[1].style.transitionProperty = 'margin-left'
          activeItem.children[1].style.marginLeft = 0

          activeItem.children[0].style.visibility = 'visible'
          activeItem.children[1].style.visibility = 'visible'

          if (prevItem) {
            prevItem.children[0].style.transitionProperty = 'margin-left'
            prevItem.children[0].style.marginLeft = `${width * -1}px`

            prevItem.children[1].style.transitionProperty = 'margin-left'
            prevItem.children[1].style.marginLeft = `${width * -1}px`

            setTimeout(() => {
              prevItem.children[0].style.transitionProperty = 'none'
              prevItem.children[1].style.transitionProperty = 'none'
            }, 1000)
          }

          setTimeout(() => {
            wrapper.style.transitionProperty = 'none'
            activeItem.children[0].style.transitionProperty = 'none'
            activeItem.children[1].style.transitionProperty = 'none'
          }, 1000)
        }

        clearInterval(this.interval)

        this.interval = setInterval(() => {
          this.stepNext()
        }, 6000)
      } else {
        let clone = this.list[this.$store.state.language][this.cloneRightIndex]

        if (!clone) {
          clone = this.list[this.$store.state.language][
            (this.cloneRightIndex = 0)
          ]
        }

        this.list[this.$store.state.language].push(clone)
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
          const wrapperMgLeft = Number(
            wrapper.style.marginLeft.replace('px', '')
          )
          const activeItem = document.querySelector(`#t-${active}`)

          const prevItem = document.querySelector(`#t-${active - 1}`)

          if (prevItem) {
            activeItem.classList.remove('active')
            prevItem.classList.add('active')

            wrapper.style.transitionProperty = 'margin-left'
            prevItem.children[0].style.transitionProperty = 'margin-left'
            prevItem.children[1].style.transitionProperty = 'margin-left'

            wrapper.style.marginLeft = `${wrapperMgLeft + width}px`
            prevItem.children[0].style.marginLeft = 0
            prevItem.children[1].style.marginLeft = 0

            activeItem.children[0].style.marginLeft = `${width}px`
            activeItem.children[1].style.marginLeft = `${width}px`

            this.active--

            setTimeout(() => {
              wrapper.style.transitionProperty = 'none'
              prevItem.children[0].style.transitionProperty = 'none'
              prevItem.children[0].style.transitionProperty = 'none'
            }, 1000)
          }
        }
      } else {
        const clone = this.list[this.$store.state.language][
          this.originalListlength - 1
        ]

        setTimeout(() => {
          this.list[this.$store.state.language].unshift(clone)

          const activeItem = document.querySelector(`#t-0`)

          document.querySelectorAll('.testimonial').forEach((el) => {
            el.classList.remove('active')
          })

          activeItem.classList.add('active')

          activeItem.children[0].style.marginLeft = `${width * -1}px`
          activeItem.children[1].style.marginLeft = `${width * -1}px`
          activeItem.children[0].style.visibility = 'visible'
          activeItem.children[1].style.visibility = 'visible'

          setTimeout(() => {
            activeItem.children[0].style.transitionProperty = 'margin-left'
            activeItem.children[1].style.transitionProperty = 'margin-left'
            activeItem.children[0].style.marginLeft = 0
            activeItem.children[1].style.marginLeft = 0
          }, 200)

          setTimeout(() => {
            activeItem.children[0].style.transitionProperty = 'none'
            activeItem.children[1].style.transitionProperty = 'none'
          }, 900)
        }, 0)
      }

      clearInterval(this.interval)

      this.interval = setInterval(() => {
        this.stepNext()
      }, 6000)
    },

    restartInterval() {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.stepNext()
      }, 6000)
    }
  },

  watch: {
    '$store.state.language'() {
      this.fetchList()
    }
  }
}
</script>

<style lang="scss" scoped>
.lingo-testimonials-component {
  position: relative;

  .quotations-image-wrapper {
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
      // margin-bottom: 30px;
      color: $light-gray;
      font-size: 32pt;

      @media (min-width: 768px) {
        font-size: 56pt;
      }

      @media (min-width: 992px) {
        color: $yellow;
      }
    }

    .testimonials-line {
      display: flex;
      justify-content: center;

      @media (min-width: 1080px) {
        justify-content: flex-end;
        margin-left: 177px;
        margin-top: 63px;
      }

      @media (min-width: 1200px) {
        margin-top: 0;
        margin-left: 360px;
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
                  margin-top: -5px;
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
            }
          }
        }
      }
    }
  }
}
</style>
