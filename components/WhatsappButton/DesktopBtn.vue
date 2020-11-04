<template>
  <WhatsappPopover>
    <template v-slot:button>
      <a style="cursor: pointer" class="tooltip-target b3 whatsapp-component">
        <div class="circle-icon">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </div>

        <div class="rectangle">
          <p>{{ text[$store.state.language] }}</p>
        </div>
      </a>
    </template>
  </WhatsappPopover>
</template>

<script>
import WhatsappPopover from './WhatsappPopover.vue'

export default {
  components: {
    WhatsappPopover
  },
  data() {
    return {
      text: {
        'pt-BR': 'Quer falar com a gente?',
        'en-US': 'Please give us a call'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a.whatsapp-component {
  text-decoration: none;
  outline: none;

  display: flex;
  align-items: center;

  .circle-icon {
    color: #fff;
    background: #4caf50;

    width: 53px;
    height: 53px;
    font-size: 36px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    -webkit-box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
    box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
  }

  .rectangle {
    width: 153px;
    height: 46px;

    border-radius: 30px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-left: none;

    -webkit-box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);
    box-shadow: 11px 11px 28px -12px rgba(0, 0, 0, 0.65);

    background: url('./whatsapp-btn-right-curve.svg') 0 -1px no-repeat,
      linear-gradient(
        to right,
        transparent 0%,
        transparent 11%,
        transparent 11%,
        #4caf50 11%,
        #4caf50 100%
      );
    background-size: auto;
    margin-left: -10px;
    margin-top: 1px;

    p {
      color: #fff;
      font-size: 12px;
      position: relative;
      top: 6px;
      left: 30px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 110px;
      line-height: 15px;
    }
  }
}
</style>
