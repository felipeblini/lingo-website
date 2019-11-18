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
      <figure class="hero-svg-mask">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 564 350.33">
          <defs>
            <linearGradient
              id="myGradient"
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
            <mask id="shape-mask">
              <path
                fill="url(#myGradient)"
                d="M0,0S34.73,209.15,172.64,208.5c0,0,33.33-2,83-13.73,0,0,114.38-22.87,136.6,35.3,0,0,19.61,61.43-50.33,120.26,0,0,201-85.62,222.08-138.57V0Z"
              />
            </mask>
          </defs>

          <path
            fill="url(#myGradient)"
            d="M0,0S34.73,209.15,172.64,208.5c0,0,33.33-2,83-13.73,0,0,114.38-22.87,136.6,35.3,0,0,19.61,61.43-50.33,120.26,0,0,201-85.62,222.08-138.57V0Z"
          />

          <image
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            xlink:href="~assets/img/img_principal-m.jpg"
            mask="url(#shape-mask)"
            style="opacity: 0.3"
          ></image>
        </svg>
      </figure>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.hero-text {
  border: solid;
  color: white;
  z-index: 1;
  position: relative;
  top: 200px;

  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    top: 300px;
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
    font-size: 60px;
    font-weight: 800;
  }
}

.hero-background {
  border: solid;
  position: absolute;
  top: 0px;
  width: 100%;
}
</style>
