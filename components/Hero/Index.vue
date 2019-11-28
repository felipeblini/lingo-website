<template>
  <div ref="hero-container">
    <div class="hero-text container">
      <div>
        <h1>LOREM IPSUM</h1>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum
          dolor sit amet consectetur
        </p>
      </div>
    </div>

    <div class="hero-background">
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
            <style>
              .cls-1 {
                fill: #e1a831;
                opacity: 0.8;
              }
            </style>
            <mask id="shape-mask-hero">
              <path
                class="cls-1"
                d="M154.8,0H2066V848.79c-171,256-763.38,476.29-763.38,476.29,240.4-202.2,173-413.39,173-413.39-76.38-200-469.55-121.32-469.55-121.32-170.75,40.44-285.33,47.18-285.33,47.18-474,2.25-593.44-716.69-593.44-716.69L109.56,0Z"
              />
            </mask>
          </defs>

          <path
            fill="url(#ballonGradient)"
            d="M154.8,0H2066V848.79c-171,256-763.38,476.29-763.38,476.29,240.4-202.2,173-413.39,173-413.39-76.38-200-469.55-121.32-469.55-121.32-170.75,40.44-285.33,47.18-285.33,47.18-474,2.25-593.44-716.69-593.44-716.69L109.56,0Z"
          />

          <image
            v-if="isMobile"
            width="100%"
            height="100%"
            xlink:href="./img_principal-mobile.jpg"
            mask="url(#shape-mask-hero)"
            style="opacity: 0.3"
          ></image>

          <image
            v-else
            width="100%"
            height="100%"
            xlink:href="./img_principal-desktop.jpg"
            mask="url(#shape-mask-hero)"
            style="opacity: 0.3"
          ></image>
        </svg>

        <svg class="svg-border" viewBox="0 0 2066.02 1378.36">
          <defs>
            <style>
              .ballon-border {
                fill: none;
                stroke: #ef4865;
                stroke-miterlimit: 10;
                stroke-width: 5px;
              }
            </style>
          </defs>
          <title>contorno</title>
          <path
            class="ballon-border"
            d="M2079.76,868.18c-147.28,268.26-843.8,495.9-843.8,495.9,277.48-277.32,222.45-439.66,222.45-439.66C1413,736.47,964.22,800.53,964.22,800.53c-179.7,41.3-300.29,48.18-300.29,48.18C165,851,39.36,116.86,39.36,116.86L16.56-15.56"
          />
        </svg>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    const container = this.$refs['hero-container']

    const emitHeroHeight = () => {
      const ballon = this.$refs['hero-ballon-figure']

      const navBarHeight = 91
      const heroHeight = ballon.clientHeight - navBarHeight

      container.style.height = `${heroHeight}px`
      this.$emit('onHeightCalculated', heroHeight)
    }

    emitHeroHeight()

    window.addEventListener('resize', () => {
      setTimeout(() => {
        emitHeroHeight()
      }, 200)
    })

    if (window.innerWidth <= 600) {
      this.isMobile = true
    }
  }
}
</script>

<style lang="scss" scoped>
// hero-text
.hero-text {
  color: white;
  z-index: 1;
  position: relative;

  display: flex;
  justify-content: center;

  @media (min-width: 730px) {
    top: 35px;
  }

  @media (min-width: 992px) {
    top: 65px;
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
      font-size: 29px;

      @media (min-width: 540px) {
        font-size: 49px;
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
      font-size: 10px;
      display: block;
      width: 250px;
      margin: 0 auto;
      margin-top: -10px;

      @media (min-width: 540px) {
        font-size: 14px;
      }

      @media (min-width: 880px) {
        font-size: 20px;
        width: 500px;
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
    top: 40px;

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
    top: 67px;

    > div {
      h1 {
        font-size: 125px;
      }
    }
  }

  @media (min-width: 1600px) {
    top: 113px;

    > div {
      h1 {
        font-size: 141px;
      }
    }
  }

  @media (min-width: 1920px) {
    top: 159px;
  }

  @media (min-width: 2000px) {
    top: 177px;
  }
} // hero-text

.hero-background {
  position: absolute;
  top: 0px;
  width: 100%;
  overflow: hidden;

  svg.svg-ballon {
    margin-left: -10%;
    margin-top: -3%;
  }

  svg.svg-border {
    margin-top: -3%;
    width: calc(100% + 10%);
    left: 0;
    position: absolute;
    top: 0;
    margin-left: -10%;
    z-index: -1;
  }
} // backgroung
</style>
