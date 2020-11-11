<template>
  <div
    class="float-wp-btn-container"
    ref="wp-button"
    v-click-outside="hideNumbers"
  >
    <div class="float-numbers-list" ref="numbers-list">
      <WhatsappNumbersList />
    </div>

    <a style="cursor: pointer" @click.prevent="toggleNumbers">
      <div class="circle-icon">
        <font-awesome-icon :icon="['fab', 'whatsapp']" />
      </div>
    </a>
  </div>
</template>

<script>
import WhatsappNumbersList from '@/components/WhatsappButton/WhatsappNumbersList.vue'
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
  },
  components: {
    WhatsappNumbersList
  },
  mounted() {
    window.addEventListener('scroll', () => {
      setTimeout(() => {
        const width = window.innerWidth

        if (width < 1090) {
          const bottomDistanceFromTop =
            document.documentElement.scrollTop + window.innerHeight

          if (
            Math.floor(bottomDistanceFromTop) >
            document.documentElement.scrollHeight - 10
          ) {
            this.$refs['wp-button'].style.bottom = '101px'
            this.$forceUpdate()
          } else {
            this.$refs['wp-button'].style.bottom = '20px'
            this.$forceUpdate()
          }
        }
      }, 100)
    })
  },
  methods: {
    toggleNumbers() {
      this.$refs['numbers-list'].classList.toggle('show-numbers')
    },
    hideNumbers() {
      this.$refs['numbers-list'].classList.remove('show-numbers')
    }
  }
}
</script>

<style lang="scss" scoped>
.float-wp-btn-container {
  position: fixed;
  bottom: 20px;
  right: 11px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition-property: bottom;
  transition-duration: 0.25s;
  z-index: 3;

  .float-numbers-list {
    margin-bottom: 15px;
    padding: 24px;

    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s linear;
    position: relative;
    z-index: 1000;

    &.show-numbers {
      visibility: visible;
      opacity: 1;
    }

    transition: all 0.25s ease;

    &::after {
      content: '';
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      border: solid 6px;
      color: $pink;
      bottom: -12px;
      right: 34px;
      position: absolute;
    }
  }

  a {
    outline: none;

    .circle-icon {
      color: #fff;
      border: solid;
      background: #4caf50;

      width: 60px;
      height: 60px;
      font-size: 30px;

      @media (min-width: 768px) {
        width: 80px;
        height: 80px;
        font-size: 48px;
      }

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      -webkit-box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
      -moz-box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
      box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
    }
  }
}
</style>
