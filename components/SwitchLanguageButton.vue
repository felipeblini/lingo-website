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

.swl {
  border-radius: 30px;
  height: 29px;
}

.switchlang-wrapper {
  width: 71px;
  background: #efeae4;

  display: flex;

  position: relative;

  justify-content: space-around;
  font-size: 14px;

  p {
    margin-top: 3px;
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
      left: 35px;
    }

    p.en {
      @include lang-active;
    }
  }
}

.swipper {
  width: 36px;
  background: #ef4865;
  position: absolute;
}
</style>
