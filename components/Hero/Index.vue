<template>
  <div class="hero-cmp" ref="hero-container">
    <div class="hero-text container">
      <div>
        <h1 v-html="title[$store.state.language]" />
        <p v-html="text[$store.state.language]" />
      </div>
    </div>

    <div class="hero-ballon">
      <figure ref="hero-ballon-figure">
        <svg
          class="svg-ballon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2066.02 1378.36"
        >
          <defs>
            <linearGradient
              id="ballonGradient"
              x1="608.92"
              y1="909.57"
              x2="1792.24"
              y2="-273.76"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ef4865" />
              <stop offset="0.5" stop-color="#f47544" />
              <stop offset="0.92" stop-color="#fba91e" />
              <stop offset="1" stop-color="#fcb316" />
            </linearGradient>
            <mask id="shape-mask-hero">
              <path
                fill="#e1a831"
                opacity="0.8"
                d="M154.8,0H2066V848.79c-171,256-763.38,476.29-763.38,476.29,240.4-202.2,173-413.39,173-413.39-76.38-200-469.55-121.32-469.55-121.32-170.75,40.44-285.33,47.18-285.33,47.18-474,2.25-593.44-716.69-593.44-716.69L109.56,0Z"
              />
            </mask>
          </defs>

          <path
            fill="url(#ballonGradient)"
            d="M154.8,0H2066V848.79c-171,256-763.38,476.29-763.38,476.29,240.4-202.2,173-413.39,173-413.39-76.38-200-469.55-121.32-469.55-121.32-170.75,40.44-285.33,47.18-285.33,47.18-474,2.25-593.44-716.69-593.44-716.69L109.56,0Z"
          />

          <image
            v-if="isImageLoading"
            width="100%"
            height="100%"
            :xlink:href="img.imgLoading"
            mask="url(#shape-mask-hero)"
            style="opacity: 0.3"
          ></image>

          <image
            v-if="viewportWidth <= 768"
            width="100%"
            height="100%"
            :xlink:href="img.imgPhone"
            mask="url(#shape-mask-hero)"
            style="opacity: 0.3"
            @load="isImageLoading = false"
          ></image>

          <image
            v-if="viewportWidth > 768 && viewportWidth <= 992"
            width="100%"
            height="100%"
            :xlink:href="img.imgTablet"
            mask="url(#shape-mask-hero)"
            style="opacity: 0.3"
            @load="isImageLoading = false"
          ></image>

          <image
            v-if="viewportWidth > 992 && viewportWidth <= 2200"
            width="100%"
            height="100%"
            :xlink:href="img.imgDektop"
            mask="url(#shape-mask-hero)"
            style="opacity: 0.3"
            @load="isImageLoading = false"
          ></image>

          <image
            v-if="viewportWidth > 2200"
            width="100%"
            height="100%"
            :xlink:href="img.imgDesktopXl"
            mask="url(#shape-mask-hero)"
            style="opacity: 0.3"
            @load="isImageLoading = false"
          ></image>
        </svg>
      </figure>
      <figure>
        <svg class="svg-border" viewBox="0 0 2066.02 1378.36">
          <path
            fill="none"
            stroke="#ef4865"
            stroke-miterlimit="10"
            stroke-width="5px"
            d="M2079.76,868.18c-147.28,268.26-843.8,495.9-843.8,495.9,277.48-277.32,222.45-439.66,222.45-439.66C1413,736.47,964.22,800.53,964.22,800.53c-179.7,41.3-300.29,48.18-300.29,48.18C165,851,39.36,116.86,39.36,116.86L16.56-15.56"
          />
        </svg>
      </figure>
    </div>
  </div>
</template>

<script>
const imgLoading = require('./img/img_principal-blur.jpg')
const imgPhone = require('./img/img_principal-phone.jpg')
const imgTablet = require('./img/img_principal-tablet.jpg')
const imgDektop = require('./img/img_principal-desktop.jpg')
const imgDektopXl = require('./img/img_principal-desktop-xl.jpg')

export default {
  data() {
    return {
      isImageLoading: true,
      img: {
        imgLoading,
        imgPhone,
        imgTablet,
        imgDektop,
        imgDektopXl
      },
      viewportWidth: 0,
      title: {
        'pt-BR': '',
        'en-US': ''
      },
      text: {
        'pt-BR': '',
        'en-US': ''
      }
    }
  },

  props: {
    serverSideContent: {
      type: Object,
      default: () => ({ title: '', text: '' }),
      description:
        'Initial pt-BR content (title and text) comming from server side rendering'
    }
  },

  watch: {
    '$store.state.language'(value) {
      this.fetchContent(value)
    },

    serverSideContent: {
      handler: function(value) {
        this.title[this.$store.state.language] = value.title
        this.text[this.$store.state.language] = value.text
        this.$emit('ready')
      },
      immediate: true
    }
  },

  mounted() {
    const container = this.$refs['hero-container']

    const emitHeroHeight = () => {
      const ballon = this.$refs['hero-ballon-figure']

      const navBarHeight = 91
      const heroHeight = ballon.clientHeight - navBarHeight

      container.style.height = `${heroHeight}px`
      this.$emit('height-calculated', heroHeight)
    }

    this.viewportWidth = window.innerWidth

    emitHeroHeight()

    window.addEventListener('resize', () => {
      setTimeout(() => {
        emitHeroHeight()
      }, 200)
    })
  },

  methods: {
    async fetchContent(lang) {
      if (this.title[lang] && this.text[lang]) {
        this.$emit('ready')
      } else {
        const slug = `hero-${lang.replace('-', '').toLowerCase()}`
        const response = await this.$axios.get(`posts?slug=${slug}`)
        this.title[lang] = response.data[0].title.rendered
        this.text[lang] = response.data[0].content.rendered
        this.$emit('ready')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-cmp {
  position: relative;
  z-index: 1;
  padding-top: 60px;

  // ballon -->
  .hero-ballon {
    position: absolute;
    z-index: 0;
    top: 0;
    overflow: hidden;

    width: 126%;

    @media (min-width: 768px) {
      @media (pointer: fine) {
        width: 103%;
      }
    }

    @media (min-width: 992px) {
      @media (pointer: fine) {
        width: 114%;
      }
    }

    svg.svg-ballon {
      position: relative;
      margin-top: -5%;
      z-index: 1;

      margin-left: -16%;

      @supports (-ms-ime-align: auto) {
        width: 115%;
      }
    }

    svg.svg-border {
      position: absolute;
      width: 117%;
      top: -19px;
      left: -69px;

      @media (min-width: 360px) {
        top: -24px;
        left: -74px;
      }

      @media (min-width: 375px) {
        top: -27px;
      }

      @media (min-width: 411px) {
        left: -85px;
      }

      @media (min-width: 768px) {
        top: -53px;
        left: -156px;

        @media (pointer: fine) {
          top: -43px;
          left: -119px;
        }
      }

      @media (min-width: 992px) {
        @media (pointer: fine) {
          top: -56px;
          left: -191px;
        }
      }

      @media (min-width: 1024px) {
        top: -73px;
        left: -206px;
      }

      @media (min-width: 1200px) {
        left: -16%;
        top: -8%;
      }
    }
  } // <-- ballon

  // hero-text -->
  .hero-text {
    color: white;
    z-index: 1;
    position: relative;

    display: flex;
    justify-content: center;

    @media (min-width: 500px) {
      top: 15px;
    }

    @media (min-width: 500px) and (cursor: coarse) {
      top: 25px;
    }

    @media (min-width: 730px) {
      top: 35px;
    }

    @media (min-width: 768px) {
      top: 55px;
    }

    @media (min-width: 1024px) {
      top: 75px;
    }

    @media (min-width: 1080px) {
      top: 137px;

      @media (pointer: fine) {
        top: 88px;
      }
    }

    @media (min-width: 1200px) {
      top: 137px;

      @media (pointer: fine) {
        top: 151px;
      }
    }

    @media (min-width: 1600px) {
      top: 257px;
    }

    > div {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;

      @media (min-width: 992px) {
        align-items: flex-end;
      }

      h1 {
        font-size: 27px;

        @media (min-width: 360px) {
          font-size: 32px;
        }

        @media (min-width: 411px) {
          font-size: 45px;
        }

        @media (min-width: 768px) {
          font-size: 70px;
        }

        @media (min-width: 880px) {
          font-size: 75px;
        }

        @media (min-width: 992px) {
          font-size: 87px;
        }

        font-weight: 800;
      }

      p {
        font-size: 11px;
        display: block;
        width: 250px;
        margin: 0 auto;
        margin-top: -10px;

        @media (min-width: 360px) {
          font-size: 12px;
        }

        @media (min-width: 411px) {
          font-size: 14px;
        }

        @media (min-width: 550px) {
          @media (pointer: fine) {
            font-size: 18pt;
            width: 500px;
          }
        }

        @media (min-width: 768px) {
          font-size: 18pt;
          width: 500px;
        }

        @media (min-width: 880px) {
          font-size: 20px;
        }

        @media (min-width: 992px) {
          font-size: 26px;
          width: auto;
          margin: unset;
        }
      }
    }

    @media (min-width: 992px) {
      > div {
        h1 {
          font-size: 102px;
        }

        p {
          width: 58%;
          text-align: right;
          margin-right: 20px;
          font-size: 26px;
        }
      }
    }

    @media (min-width: 1200px) {
      > div {
        h1 {
          font-size: 118px;
        }

        p {
          font-size: 30px;
        }
      }
    }

    @media (min-width: 1400px) {
      > div {
        h1 {
          font-size: 125px;
        }
      }
    }

    @media (min-width: 1600px) {
      > div {
        h1 {
          font-size: 127px;
        }
      }
    }
  } // <-- hero-text
}
</style>
