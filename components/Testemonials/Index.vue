<template>
  <div class="lingo-testemonials-component">
    <div class="quotations-image-wrapper">
      <img src="@/assets/img/testemonials/aspas.svg" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-8 offset-2 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2">
          <svg
            class="title light-gray"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 40"
          >
            <text>Depoimentosoi</text>
          </svg>
        </div>
      </div>

      lista: {{ list }}

      <div class="row">
        <div
          class="col-8 offset-2 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2 testemonials-line"
        >
          <div class="testemonials-wrapper">
            <ul class="list" ref="list">
              <div class="items-wrapper" ref="itemsWrapper">
                <li
                  class="testemonial"
                  v-for="(testemonial, index) in list"
                  :key="index"
                  ref="testemonial"
                >
                  <div class="text" ref="text">"{{ testemonial.text }}"</div>
                  <div class="client" ref="client">
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
      isClone: false
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

    //this.list = this.list.concat(this.list)

    const handleScroll = () => {
      setTimeout(() => {
        if (
          this.$refs.itemsWrapper.getBoundingClientRect().top <=
          window.innerHeight
        ) {
          this.stepNext(0)

          window.removeEventListener('scroll', handleScroll)
          this.active = 1
          console.log({ active: this.active })
        }
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll)

    // setInterval(() => {
    //   this.stepNext()
    // }, 6000)
  },
  methods: {
    stepNext(active = this.active) {
      console.log({ active, lenth: this.list.length })
      if (active < this.list.length) {
        const width = this.$refs.list.clientWidth

        this.$refs.itemsWrapper.style.transitionDelay = '0s'
        this.$refs.itemsWrapper.style.transitionProperty = 'margin-left'
        this.$refs.itemsWrapper.style.marginLeft = `${active * width * -1}px`

        this.$refs.text[active].style.transitionProperty = 'margin-left'
        this.$refs.client[active].style.transitionProperty = 'margin-left'
        this.$refs.text[active].style.marginLeft = 0
        this.$refs.client[active].style.marginLeft = 0

        try {
          this.$refs.text[active - 1].style.transitionProperty = 'margin-left'
          this.$refs.client[active - 1].style.transitionProperty = 'margin-left'
          this.$refs.text[active - 1].style.marginLeft = `${width * -1}px`
          this.$refs.client[active - 1].style.marginLeft = `${width * -1}px`
        } catch (e) {}

        setTimeout(() => {
          this.$refs.itemsWrapper.style.transitionProperty = 'none'
          this.$refs.text[active].style.transitionProperty = 'none'
          this.$refs.client[active].style.transitionProperty = 'none'

          try {
            this.$refs.text[active - 1].style.transitionProperty = 'none'
            this.$refs.client[active - 1].style.transitionProperty = 'none'
          } catch (e) {}
        }, 1000)

        this.active++

        console.log({ active: this.active })
      } else {
        console.log('clonning')
        this.list = this.list.concat(this.list)
        this.$nextTick(() => this.stepNext())
      }
    },

    stepPrev() {
      console.log({ active: this.active })

      console.log('go back without clone')
      const active = --this.active

      this.$refs.text[active].style.transitionProperty = 'margin-left'
      this.$refs.client[active].style.transitionProperty = 'margin-left'
      this.$refs.itemsWrapper.style.transitionProperty = 'margin-left'

      const marginLeft = (el) =>
        (el.style.marginLeft = `${Number(
          el.style.marginLeft.replace('px', '')
        ) + width}px`)

      marginLeft(this.$refs.itemsWrapper)
      marginLeft(this.$refs.text[active])
      marginLeft(this.$refs.client[active])

      setTimeout(() => {
        this.$refs.itemsWrapper.style.transitionProperty = 'none'
        this.$refs.text[active].style.transitionProperty = 'none'
        this.$refs.client[active].style.transitionProperty = 'none'
        this.$refs.text[active - 1].style.transitionProperty = 'none'
        this.$refs.client[active - 1].style.transitionProperty = 'none'
      }, 1000)

      console.log({ active: this.active })
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
          //overflow: hidden;

          .items-wrapper {
            height: 205px;
            width: 100%;
            display: flex;

            transition-property: none;
            margin-left: $testemonial-width * 5;

            li.testemonial {
              min-width: $testemonial-width * 5;
              min-height: 205px;
              border: solid 2px red;

              &:nth-child(2) {
                border: solid 2px green;
              }

              .text {
                border: solid 2px black;
                min-width: $testemonial-width * 5;
                max-width: $testemonial-width * 5;
                min-height: 130px;

                margin-left: $testemonial-width * 5;

                transition-property: none;
                transition-duration: 0.25s;
                transition-timing-function: ease-in-out;
              }

              .client {
                border: solid 2px blue;
                min-width: $testemonial-width * 5;
                max-width: $testemonial-width * 5;
                height: 75px;
                padding-top: 15px;

                margin-left: $testemonial-width * 5;

                transition-property: none;
                transition-duration: 0.25s;
                transition-timing-function: ease-in-out;
                transition-delay: 0.3s;

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
              background-image: url('~assets/img/testemonials/left-arrow.svg');
            }

            &.right {
              background-image: url('~assets/img/testemonials/right-arrow.svg');
            }
          }
        }
      }
    }
  }
}
</style>
