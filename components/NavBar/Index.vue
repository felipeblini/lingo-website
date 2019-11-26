<template>
  <b-navbar toggleable="custom" type="light" variant="">
    <div class="container">
      <b-navbar-brand href="#top"
        >Lingo Interpretação, tradução simultânea, transcrição, revisão e media
        trainning</b-navbar-brand
      >

      <div class="only-mobile switch-lang-mobile">
        <SwitchLanguageButton />
      </div>

      <b-navbar-toggle target="nav-collapse">
        <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Empresa</b-nav-item>
          <b-nav-item href="#">Quem somos</b-nav-item>
          <b-nav-item href="#">Serviços</b-nav-item>
          <b-nav-item href="#">Depoimentos</b-nav-item>
          <b-nav-item href="#">Parceiros</b-nav-item>
          <b-nav-item href="#">Contato</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="mr-3 only-desktop">
            <SwitchLanguageButton />
          </div>
          <WhatsappButton class="only-desktop" />
        </b-navbar-nav>
      </b-collapse>
    </div>
    <WhatsappButton class="only-mobile" />
  </b-navbar>
</template>

<script>
import SwitchLanguageButton from './SwitchLanguageButton'
import WhatsappButton from '~/components/WhatsappButton'

export default {
  components: {
    WhatsappButton,
    SwitchLanguageButton
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  max-width: 1090px;
  margin: 0 auto;
  z-index: 2;

  .container {
    padding-top: 3px;

    @media (min-width: 600px) {
      padding-top: 20px;
    }

    @media (min-width: 1200px) {
      padding-top: 34px;
      align-items: flex-end;
      flex-wrap: nowrap;
    }

    .navbar-brand {
      margin-right: 20px;
      width: 77px;
      text-indent: -9999px;
      overflow: hidden;

      @media (min-width: 600px) {
        width: 127px;
      }

      @media (min-width: 1200px) {
        width: 180px;
      }

      height: 55px;

      @include lingo-logo($white);
    }

    .switch-lang-mobile {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
    }

    .navbar-toggler {
      border: none;
      outline: none;
    }

    .navbar-collapse {
      @media (max-width: 1200px) {
        position: absolute;
        top: 100px;
        width: 300px;
        background: #fff;
        right: 72px;
      }
    }

    .navbar-nav {
      align-items: flex-end;

      a.nav-link {
        color: #fff;

        &:hover {
          text-decoration: underline;
        }
      }

      @media (min-width: 1200px) {
        align-items: center;
      }
    }
  }

  @media (min-width: 1200px) {
    &.navbar-expand-custom {
      // flex-direction: row;
      // flex-wrap: nowrap;
      // justify-content: flex-start;
    }
    &.navbar-expand-custom .navbar-nav {
      flex-direction: row;
    }
    &.navbar-expand-custom .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    &.navbar-expand-custom .navbar-collapse {
      display: flex !important;
    }
    &.navbar-expand-custom .navbar-toggler {
      display: none;
    }
  }
}
</style>