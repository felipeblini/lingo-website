<template>
  <v-popover @hide="$emit('hide')">
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
