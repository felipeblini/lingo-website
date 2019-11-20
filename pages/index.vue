<template>
  <div>
    <div class="hero-text container">
      <div>
        <h2>LOREM IPSUM</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum
          dolor sit amet consectetur
        </h3>
      </div>
    </div>

    <div class="hero-background">
      <figure>
        <svg
          class="svg-ballon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2066.02 1378.36"
        >
          <defs>
            <linearGradient
              id="ballonGradient"
              x1="147.2"
              y1="240.01"
              x2="473.88"
              y2="-86.67"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.04" stop-color="#a54761" />
              <stop offset="0.31" stop-color="#bc6d4e" />
              <stop offset="0.59" stop-color="#d08d3e" />
              <stop offset="0.83" stop-color="#dda135" />
              <stop offset="0.99" stop-color="#e1a831" />
            </linearGradient>
            <style>
              .cls-1 {
                fill: #e1a831;
                opacity: 0.8;
              }
            </style>
            <mask id="shape-mask">
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
            width="100%"
            height="100%"
            xlink:href="~assets/img/img_principal-m.jpg"
            mask="url(#shape-mask)"
            style="opacity: 0.3"
          ></image>
        </svg>

        <svg class="svg-border" viewBox="0 0 2066.02 1378.36">
          <defs>
            <style>
              .ballon-border {
                fill: none;
                stroke: #a54761;
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
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.hero-text {
  color: white;
  z-index: 1;
  position: relative;
  top: 215px;

  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    justify-content: flex-end;
  }

  div {
    text-align: center;

    @media (min-width: 991px) {
      width: 58%;
    }

    @media (min-width: 1200px) {
      text-align: right;
    }
  }

  h2 {
    font-size: 104px;
    font-weight: 800;
  }
}

.hero-background {
  position: absolute;
  top: 0px;
  width: 100%;
  overflow: hidden;

  svg.svg-ballon {
    // width: calc(100vw + 50px);
    // left: -50px;
    // position: relative;

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
}
</style>
