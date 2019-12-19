<template>
  <div>
    <div
      ref="switchlang-wrapper"
      class="swl switchlang-wrapper br"
      @click="toggle"
    >
      <p class="swl br">BR</p>
      <p class="swl en">EN</p>
      <div class="swl swipper en"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      if (this.$refs['switchlang-wrapper'].classList.value.includes('en')) {
        this.$refs['switchlang-wrapper'].classList.remove('en')
        this.$refs['switchlang-wrapper'].classList.add('br')
      } else if (
        this.$refs['switchlang-wrapper'].classList.value.includes('br')
      ) {
        this.$refs['switchlang-wrapper'].classList.remove('br')
        this.$refs['switchlang-wrapper'].classList.add('en')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin lang-active {
  color: #fff;
  position: relative;
  z-index: 2;
}

$sm: 30px;
$md: 60px;

.swl {
  border-radius: 30px;
  // height: 29px;
  height: $sm;
}

.switchlang-wrapper {
  // width: 71px;
  width: calc(#{$sm} * 2 + 10px);
  background: #efeae4;

  display: flex;

  position: relative;

  justify-content: space-around;
  // font-size: 14px;
  font-size: calc(#{$sm} / 1.9);

  p {
    margin-top: calc(#{$sm} / 10);
    cursor: pointer;
    user-select: none;
  }

  .swipper {
    cursor: pointer;
    transition: left 0.15s linear;
  }

  &.br {
    .swipper {
      left: 0;
    }

    p.br {
      @include lang-active;
    }
  }

  &.en {
    .swipper {
      // left: 35px;
      left: calc(#{$sm} + 5px);
    }

    p.en {
      @include lang-active;
    }
  }
}

.swipper {
  // width: 36px;
  width: calc(#{$sm} + 6px);
  background: #ef4865;
  position: absolute;
}

@media (min-width: 1024px) {
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .swl {
      height: $md;
    }

    .switchlang-wrapper {
      width: calc(#{$md} * 2 + 10px);
      font-size: calc(#{$md} / 1.9);

      p {
        margin-top: calc(#{$md} / 10);
      }

      &.en {
        .swipper {
          left: calc(#{$md} + 5px);
        }
      }
    }

    .swipper {
      width: calc(#{$md} + 6px);
    }
  }
}
</style>
