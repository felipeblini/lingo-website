<template>
  <v-popover @hide="$emit('hide')" class="d-none d-xl-block" ref="wp-popover">
    <slot name="button"></slot>

    <template slot="popover">
      <WhatsappNumbersList />
    </template>
  </v-popover>
</template>

<script>
import WhatsappNumbersList from '@/components/WhatsappButton/WhatsappNumbersList.vue'

export default {
  components: {
    WhatsappNumbersList
  },
  mounted() {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.$refs['wp-popover'].hide()
      }, 200)
    })
  }
}
</script>

<style lang="scss">
.tooltip {
  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }
}
</style>
