<template>
  <div class="lingo-testimonials-component">
    <div class="quotations-image-wrapper">
      <img src="./img/aspas.svg" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-8 offset-2 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2">
          <svg
            class="title light-gray"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 40"
          >
            <text>Depoimentos</text>
          </svg>
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2 testimonials-line "
        >
          <div
            class="testimonials-wrapper"
            ref="listWrapper"
            :style="{ width: `${responsiveWidth}px` }"
            v-touch:swipe="touchHandler"
          >
            <ul class="testimonialsList">
              <div
                class="items-wrapper"
                ref="itemsWrapper"
                :style="{ marginLeft: `${responsiveWidth}px` }"
              >
                <li
                  @click="restartInterval"
                  @mouseover="restartInterval"
                  class="testimonial"
                  v-for="(testimonial, index) in list"
                  :key="index"
                  :id="`t-${index}`"
                  :style="{ minWidth: `${responsiveWidth}px` }"
                >
                  <div
                    class="text"
                    :style="{
                      minWidth: `${responsiveWidth}px`,
                      maxWidth: `${responsiveWidth}px`,
                      marginLeft: `${responsiveWidth}px`
                    }"
                  >
                    "{{ testimonial.text }}"
                  </div>
                  <div
                    class="client"
                    :style="{
                      minWidth: `${responsiveWidth}px`,
                      maxWidth: `${responsiveWidth}px`,
                      marginLeft: `${responsiveWidth}px`
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
      default: 500
    }
  },
  data() {
    return {
      list: [],
      active: 0,
      cloneRightIndex: 0,
      cloneLeftIndex: 1,
      interval: 0,
      wrapperWidth: 0,
      originalListlength: 0,
      responsiveWidth: 0
    }
  },
  mounted() {
    this.responsiveWidth = this.maxWidth

    if (window.innerWidth < this.maxWidth) {
      this.responsiveWidth = window.innerWidth - 50
    }

    this.wrapperWidth = this.$refs.listWrapper
      ? this.$refs.listWrapper.clientWidth
      : this.maxWidth

    window.addEventListener('resize', () => {
      setTimeout(() => {
        if (window.innerWidth < this.maxWidth) {
          this.responsiveWidth = window.innerWidth - 50
          this.stepNext()
        }

        this.wrapperWidth = this.$refs.listWrapper
          ? this.$refs.listWrapper.clientWidth
          : this.maxWidth

        console.log({
          windowWidth: window.innerWidth,
          wrapperWidth: this.wrapperWidth,
          responsiveWidth: this.responsiveWidth
        })
      }, 100)
    })

    this.list = [
      {
        id: 1,
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
        client: {
          name: 'Nome da Silva 1',
          role: 'Empresa - Cargo'
        }
      },
      {
        id: 2,
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
        client: {
          name: 'Fulano de Souza 2',
          role: 'Empresa2 - Cargo2'
        }
      },
      {
        id: 2,
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
        client: {
          name: 'Fulano de Souza 3',
          role: 'Empresa2 - Cargo3'
        }
      },
      {
        id: 2,
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
        client: {
          name: 'Fulano de Souza 4',
          role: 'Empresa2 - Cargo4'
        }
      },
      {
        id: 2,
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
        client: {
          name: 'Fulano de Souza 5',
          role: 'Empresa2 - Cargo5'
        }
      },
      {
        id: 2,
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
        client: {
          name: 'Fulano de Souza 6',
          role: 'Empresa2 - Cargo6'
        }
      }
    ]

    this.originalListlength = this.list.length

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
  },
  methods: {
    touchHandler(direction) {
      if (window.innerWidth < 1080) {
        direction === 'left' ? this.stepNext() : this.stepPrev()
      }
    },

    stepNext(active = ++this.active) {
      if (active < this.list.length) {
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
        let clone = this.list[this.cloneRightIndex]

        if (!clone) {
          clone = this.list[(this.cloneRightIndex = 0)]
        }

        this.list.push(clone)
        this.cloneRightIndex++
        this.$nextTick(() => this.stepNext(this.active))
      }
    },

    stepPrev(active = this.active) {
      if (active >= 0) {
        const width = this.$refs.listWrapper
          ? this.$refs.listWrapper.clientWidth
          : this.maxWidth

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

            if (active > 0) this.active--

            setTimeout(() => {
              wrapper.style.transitionProperty = 'none'
              prevItem.children[0].style.transitionProperty = 'none'
              prevItem.children[0].style.transitionProperty = 'none'
            }, 1000)
          }
        } else {
          const clone = this.list[this.originalListlength - 1]
          setTimeout(() => {
            this.list.unshift(clone)

            const activeItem = document.querySelector(`#t-0`)
            console.log({ activeItem })

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
      }
    },

    restartInterval() {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.stepNext()
      }, 6000)
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
    svg.title {
      margin-bottom: 30px;

      @media (min-width: 1080px) and (max-width: 1200px) {
        top: -47px;
        position: relative;
      }

      text {
        @media (min-width: 992px) {
          fill: $yellow;
        }
      }
    }

    .testimonials-line {
      display: flex;
      justify-content: center;

      @media (min-width: 1080px) {
        justify-content: flex-end;
      }

      .testimonials-wrapper {
        @media (min-width: 1080px) {
          margin-top: -65px;
        }

        @media (min-width: 1200px) {
          margin-top: 0;
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

          height: 35px;
          padding-top: 5px;

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
