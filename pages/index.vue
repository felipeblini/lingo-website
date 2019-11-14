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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <mask id="shape-mask">
              <polygon points="0 0, 100 50, 0 100" fill="#fff" />
            </mask>
          </defs>
          <image
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            xlink:href="/team-huddle.jpg"
            mask="url(#shape-mask)"
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
