<template>
  <div>
    <a
      :href="`/?lang=${$store.state.language === 'pt-BR' ? 'en-US' : 'pt-BR'}`"
      ref="switchlang-wrapper"
      class="swl switchlang-wrapper"
      :title="
        $store.state.language === 'pt-BR'
          ? 'Mudar para Inglês'
          : 'Switch to Portuguese'
      "
      :class="{
        br: initialLang === 'pt-BR' || initialLang === '',
        en: initialLang === 'en-US',
      }"
      @click="toggle($event)"
    >
      <p class="swl br">BR</p>
      <p class="swl en">EN</p>
      <div class="swl swipper en"></div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    initialLang: {
      type: String,
      default: '',
      description: 'When lang is passed in by query',
    },
  },
  methods: {
    toggle(evt) {
      evt.preventDefault()
      const switcher = this.$refs['switchlang-wrapper']

      const currentPath = this.$route.path
      const query = this.$route.query

      if (switcher.classList.value.includes('en')) {
        switcher.classList.remove('en')
        switcher.classList.add('br')

        if (query.lang) {
          this.$router.push({ path: currentPath, query: { lang: 'pt-BR' } })
        }

        this.$emit('toggled', 'pt-BR')
      } else if (switcher.classList.value.includes('br')) {
        switcher.classList.remove('br')
        switcher.classList.add('en')

        if (query.lang) {
          this.$router.push({ path: currentPath, query: { lang: 'en-US' } })
        }

        this.$emit('toggled', 'en-US')
      }
    },
  },

  watch: {
    '$store.state.language': {
      handler: function (value) {
        const switcher = this.$refs['switchlang-wrapper']

        if (value === 'pt-BR') {
          switcher.classList.remove('en')
          switcher.classList.add('br')
        } else if (value === 'en-US') {
          switcher.classList.remove('br')
          switcher.classList.add('en')
        }
      },
    },
  },
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
  height: $sm;
  color: #333;

  &:hover {
    text-decoration: none;
  }
}

.switchlang-wrapper {
  width: calc(#{$sm} * 2 + 10px);
  background: #efeae4;

  display: flex;

  position: relative;

  justify-content: space-around;
  font-size: calc(#{$sm} / 1.9);

  p {
    margin-top: calc(#{$sm} / 10);
    cursor: pointer;
    user-select: none;
  }

  .swipper {
    cursor: pointer;
    transition: left 0.15s linear;
    width: calc(#{$sm} + 6px);
    height: calc(#{$sm} - 2px);
    position: absolute;
    background: $pink;

    margin-top: 1px;
  }

  &.br {
    .swipper {
      left: 1px;
    }

    p.br {
      @include lang-active;
    }
  }

  &.en {
    .swipper {
      @media (min-width: 1200px) {
        left: calc(#{$sm} + 2px);
      }
      left: calc(#{$sm} + 3px);
    }

    p.en {
      @include lang-active;
    }
  }
}

@media (min-width: 1024px) {
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .swl {
      height: $md;
    }

    .switchlang-wrapper {
      width: calc(#{$md} * 2 + 10px);
      font-size: calc(#{$md} / 1.9);

      .swipper {
        width: calc(#{$md} + 6px);
        height: calc(#{$md} - 2px);
      }

      p {
        margin-top: calc(#{$md} / 10);
      }

      &.en {
        .swipper {
          left: calc(#{$md} + 2px);
        }
      }
    }

    .swipper {
      width: calc(#{$md} + 6px);
    }
  }
}
</style>
