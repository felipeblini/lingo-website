<template>
  <div>
    <ul>
      <li>
        <a
          target="_blank"
          :href="`https://wa.me/${$store.state.whatsappNumber}`"
          class="whatsapp"
        >
          <span class="wp-icon">
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
          </span>
          <span>{{ $store.state.whatsappNumber }}</span>
        </a>
      </li>

      <li>
        <a
          target="_blank"
          :href="`https://wa.me/${$store.state.whatsappNumber2}`"
          class="whatsapp"
        >
          <span class="wp-icon">
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
          </span>
          <span>{{ $store.state.whatsappNumber2 }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;

  margin: -24px;

  background: $light-gray;
  border: solid 1px $pink;
  border-radius: 4px;

  -webkit-box-shadow: -7px 0px 42px 1px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: -7px 0px 42px 1px rgba(0, 0, 0, 0.26);
  box-shadow: -7px 0px 42px 1px rgba(0, 0, 0, 0.26);

  li {
    list-style: none;
    padding: 0;

    &:hover {
      background: #ccc;
    }

    a {
      padding-bottom: 0px;
      padding-right: 15px;
      padding-left: 10px;
      padding-top: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-decoration: none;
      font-size: 18px;
      color: $gray;

      &:last-child {
        padding-bottom: 15px;
        border-top: 1px solid #ccc;
      }

      .wp-icon {
        width: 38px;
        font-size: 30px;
        text-align: center;
        color: var(--success);
      }
    }
  }
}
</style>
