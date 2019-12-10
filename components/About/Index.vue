<template>
  <div
    class="lingo-about"
    :style="{ marginTop: percentsOfHeroHeight(20) + 'px' }"
  >
    <figure class="about-equipe-image">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.2 864.8">
        <defs>
          <mask id="shape-mask-about">
            <path
              fill="#EFEAE4"
              d="M0.1,812.7L1.4,0h1918.9v561.2c-12.4,4.4-24.9,9.4-37.8,13.2c-35.3,10.5-70.6,21.5-106.3,30.5
	c-31.1,7.8-62.7,13.5-94.2,19.6c-19.9,3.8-39.9,7-59.9,9.9c-15.5,2.2-31.1,3.5-46.7,5.2c-15.9,1.7-31.8,3.3-47.7,4.9
	c-4.9,0.5-9.9,0.8-14.8,1c-16.1,0.7-32.1,1.4-48.2,2c-11.6,0.4-23.2,0.8-34.8,1c-27.8,0.4-55.6,0.8-83.3,1c-12.3,0-24.6-0.5-36.8-1
	c-14.7-0.5-29.5-1.2-44.2-2c-15.5-0.9-31-1.9-46.5-3c-16.1-1.2-32.3-2.5-48.4-4c-16.8-1.5-33.5-3.2-50.2-5c-20-2.2-40-4.5-59.9-7
	c-16.2-2-32.3-4.6-48.4-6.8c-19.6-2.7-39.2-5.3-58.7-8.2c-15.6-2.3-31.2-5.2-46.7-7.8c-21-3.4-41.9-6.7-62.9-10.2
	c-16.1-2.7-32.1-5.5-48.2-8.4c-19.8-3.5-39.5-7.1-59.3-10.6c-20.9-3.8-41.7-7.9-62.6-11.7c-17.8-3.2-35.7-6.2-53.5-9.3
	c-11.8-2-23.7-4.3-35.5-6c-11.6-1.6-23.2-3.1-34.9-3.9c-18.7-1.3-37.4-3.2-56-2.8c-21.9,0.4-43.9,2.5-65.7,4.8
	c-39.2,4-77.1,13.6-114.2,26.8c-30.2,10.8-59.3,24.2-87.2,40c-26.5,15.1-51.9,32.1-76,50.9c-12.7,9.8-24.7,20.5-36.5,31.4
	c-13.1,12-26.4,24-38.1,37.3c-17.7,20-34.2,41.1-51,62c-5.3,6.5-9.6,13.8-14.2,20.9L0,834.9C0,834.9,0,816.3,0.1,812.7
	c-0.1-1-0.2-2,0-3"
            />
          </mask>
        </defs>

        <image xlink:href="./img/equipe_xl.jpg" mask="url(#shape-mask-about)" />

        />
      </svg>
    </figure>

    <img
      v-if="isMobile"
      class="about-prancheta-mobile"
      src="./img/prancheta.svg"
      alt="Traduzindo simultaneamente"
    />

    <div class="container">
      <img
        v-if="!isMobile"
        class="about-prancheta-desktop"
        src="./img/prancheta-unido.svg"
        alt="Traduzindo simultaneamente"
      />

      <div class="about-title-wrapper row justify-content-center mt-5">
        <div class="col-sm-4 text-center">
          <h2 class="about-title pink">Quem Somos</h2>
        </div>
      </div>

      <LingoTeam />
    </div>

    <img
      v-if="isMobile"
      class="quebra-cabeca"
      src="./img/quebra-cabeca.svg"
      alt=""
    />
  </div>
</template>

<script>
import LingoTeam from './Team'

export default {
  components: {
    LingoTeam
  },
  data() {
    return {
      isMobile: false
    }
  },
  props: {
    heroHeight: Number
  },
  computed: {
    percentsOfHeroHeight() {
      return (percents) => (this.heroHeight * percents) / 100
    }
  },
  mounted() {
    const mobileBreakpoint = 1080

    this.isMobile = window.innerWidth < mobileBreakpoint

    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.isMobile = window.innerWidth < mobileBreakpoint
      }, 200)
    })
  }
}
</script>

<style lang="scss" scoped>
.lingo-about {
  @media (min-width: 571px) {
    padding-top: 20px;
  }

  @media (min-width: 2500px) {
    padding-top: 80px;
  }

  .about-title-wrapper {
    @media (min-width: 571px) {
      justify-content: flex-end !important;
    }

    @media (min-width: 571px) {
      width: 200px;

      position: absolute;
      right: 20px;
    }

    @media (min-width: 576px) {
      width: unset;

      position: initial;
      right: unset;
    }
  }

  .about-prancheta-mobile {
    width: 107%;
    margin-left: -7%;
    margin-bottom: -120px;

    @media (min-width: 571px) {
      width: 75%;
      position: absolute;
      margin-top: -8%;
    }

    @media (min-width: 768px) {
      margin-top: -12%;
    }

    @media (min-width: 1000px) {
      margin-top: -14%;
    }
  }

  .about-prancheta-desktop {
    @media (min-width: 571px) {
      position: absolute;
      width: 100%;
      max-width: 530px;
      margin-top: -54px;
      margin-left: -8px;
    }

    @media (min-width: 576px) {
      margin-top: -92px;
      margin-left: -15px;
    }

    @media (min-width: 768px) {
      max-width: 672px;
      margin-top: -107px;
      margin-left: initial;
    }

    @media (min-width: 992px) {
      max-width: 933px;
      margin-top: -183px;
      margin-left: 6px;
    }

    @media (min-width: 1200px) {
      max-width: 1092px;
      margin-top: -218px;
      margin-left: -46px;
    }
  }

  .about-equipe-image {
    position: absolute;
    width: 100%;
    opacity: 0.5;

    margin-top: 182px;

    display: none;

    @media (min-width: 571px) {
      display: block;
    }

    @media (min-width: 1200px) {
      margin-top: 250px;
    }
  }

  .about-title {
    font-size: 9vw;

    @media (min-width: 571px) {
      text-align: left;
      line-height: 7vw;
    }

    @media (min-width: 1215px) {
      font-size: 101px;
      line-height: 88px;
    }

    @media (min-width: 1300px) {
      font-size: 123px;
      line-height: 96px;
    }
  }

  .quebra-cabeca {
    background: #eeeae5;

    @media (min-width: 571px) {
      background: linear-gradient(to bottom, #fff, #eeeae5);
    }
  }
}
</style>
