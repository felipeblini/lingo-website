<template>
  <div class="lingo-testemonials-component">
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
          class="col-8 offset-2 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2 testemonials-line"
        >
          <div class="testemonials-wrapper">
            <ul class="list" ref="list">
              <div class="items-wrapper" ref="itemsWrapper">
                <li
                  @click="restartInterval"
                  @mouseover="restartInterval"
                  class="testemonial"
                  v-for="(testemonial, index) in list"
                  :key="index"
                  :id="`t-${index}`"
                >
                  <div class="text">"{{ testemonial.text }}"</div>
                  <div class="client">
                    <div class="name">{{ testemonial.client.name }}</div>
                    <div class="role">{{ testemonial.client.role }}</div>
                  </div>
                </li>
              </div>
            </ul>
            <div class="navigation">
              <button class="navigator left" @click="stepPrev()">
                left
              </button>
              <button class="navigator right" @click="stepNext()">
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
  data() {
    return {
      list: [],
      active: 0,
      initialListLenght: 0,
      cloneRightIndex: 0,
      cloneLeftIndex: 1,
      interval: 0
    }
  },
  mounted() {
    this.list = [
      {
        id: 1,
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit, magnam doloribus illum quo. Quibusdam qui distinctio doloribus illum quo, est praesentium accusamus',
        client: {
          name: 'Nome da Silva',
          role: 'Empresa - Cargo'
        }
      },
      {
        id: 2,
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error, est praesentium accusamus minima illo odio cumque, voluptates ut necessitatibus reprehenderit',
        client: {
          name: 'Fulano de Souza',
          role: 'Empresa2 - Cargo2'
        }
      }
    ]

    this.initialListLenght = this.list.length

    const handleScroll = () => {
      setTimeout(() => {
        if (
          document
            .querySelectorAll('.testemonial > .text')[0]
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
    stepNext(active = ++this.active) {
      console.log({ active, listLength: this.list.length })

      if (active < this.list.length) {
        const width = this.$refs.list.clientWidth
        const wrapper = this.$refs.itemsWrapper

        wrapper.style.transitionDelay = '0s'
        wrapper.style.transitionProperty = 'margin-left'
        wrapper.style.marginLeft = `${active * width * -1}px`

        document.querySelectorAll('.testemonial').forEach((el) => {
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
      console.log({ active })

      if (active >= 0) {
        const width = this.$refs.list.clientWidth
        const wrapper = this.$refs.itemsWrapper
        const wrapperMgLeft = Number(wrapper.style.marginLeft.replace('px', ''))
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
        } else {
          console.log('clonning left', this.cloneLeftIndex)
          console.log('last item ' + this.list[this.cloneLeftIndex])

          const clone = this.list[this.list.length - this.cloneLeftIndex]
          setTimeout(() => {
            this.list.unshift(clone)
            this.cloneLeftIndex++
          }, 0)

          setTimeout(() => {
            const activeItem = document.querySelector(`#t-0`)
            console.log({ activeItem })

            document.querySelectorAll('.testemonial').forEach((el) => {
              el.classList.remove('active')
            })

            activeItem.classList.add('active')

            activeItem.children[0].style.marginLeft = '-500px'
            activeItem.children[1].style.marginLeft = '-500px'
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
$testemonial-width: 100px;

.lingo-testemonials-component {
  z-index: 1;
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

    .testemonials-line {
      display: flex;
      justify-content: center;

      @media (min-width: 1080px) {
        justify-content: flex-end;
      }

      .testemonials-wrapper {
        width: $testemonial-width * 5;
        margin-top: -65px;
        height: 240px;

        @media (min-width: 1200px) {
          margin-top: 0;
        }

        ul.list {
          width: $testemonial-width * 5;
          height: 205px;
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;

          .items-wrapper {
            height: 205px;
            width: 100%;
            display: flex;

            transition-property: none;
            margin-left: $testemonial-width * 5;

            li.testemonial {
              min-width: $testemonial-width * 5;
              min-height: 205px;

              .text {
                min-width: $testemonial-width * 5;
                max-width: $testemonial-width * 5;
                margin-left: $testemonial-width * 5;

                transition-property: none;
                transition-duration: 0.25s;
                transition-timing-function: ease-in-out;

                visibility: hidden;
              }

              .client {
                min-width: $testemonial-width * 5;
                max-width: $testemonial-width * 5;
                margin-left: $testemonial-width * 5;

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

          button.navigator {
            background-color: transparent;
            background-repeat: no-repeat;
            background-size: cover;
            width: 30px;
            height: 30px;
            outline: none;
            text-indent: -999px;
            overflow: hidden;
            border: none;

            &.left {
              background-image: url('./img/left-arrow.svg');
            }

            &.right {
              background-image: url('./img/right-arrow.svg');
            }
          }
        }
      }
    }
  }
}
</style>
