<template>
  <b-navbar toggleable="custom" type="light" variant="">
    <div class="container">
      <b-navbar-brand href="#top">
        Lingo Interpretação, tradução simultânea, transcrição, revisão e media
        trainning
      </b-navbar-brand>

      <div class="only-mobile switch-lang-mobile">
        <SwitchLanguageButton @toggled="onLanguageToggled" />
      </div>

      <b-navbar-toggle target="nav-collapse">
        <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            {{ menu[1][$store.state.language] }}
          </b-nav-item>
          <b-nav-item href="#">
            {{ menu[2][$store.state.language] }}
          </b-nav-item>
          <b-nav-item href="#">
            {{ menu[3][$store.state.language] }}
          </b-nav-item>
          <b-nav-item href="#">
            {{ menu[4][$store.state.language] }}
          </b-nav-item>
          <b-nav-item href="#">
            {{ menu[5][$store.state.language] }}
          </b-nav-item>
          <b-nav-item href="#">
            {{ menu[6][$store.state.language] }}
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="mr-3 only-desktop">
            <SwitchLanguageButton @toggled="onLanguageToggled" />
          </div>
          <WhatsappButton class="only-desktop" />
        </b-navbar-nav>
      </b-collapse>
    </div>

    <WhatsappButton class="only-mobile" />
  </b-navbar>
</template>

<script>
import SwitchLanguageButton from './SwitchLanguageButton.vue'
import WhatsappButton from '~/components/WhatsappButton/Index.vue'

export default {
  components: {
    WhatsappButton,
    SwitchLanguageButton
  },
  data() {
    return {
      menu: {
        1: {
          'pt-BR': 'Empresa',
          'en-US': 'The Company'
        },
        2: {
          'pt-BR': 'Quem somos',
          'en-US': 'About Us'
        },
        3: {
          'pt-BR': 'Serviços',
          'en-US': 'Services'
        },
        4: {
          'pt-BR': 'Depoimentos',
          'en-US': 'Testimonials'
        },
        5: {
          'pt-BR': 'Parceiros',
          'en-US': 'Partners'
        },
        6: {
          'pt-BR': 'Contato',
          'en-US': 'Contact'
        }
      }
    }
  },
  methods: {
    onLanguageToggled(value) {
      this.$store.commit('toggleLanguage', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 2;
  width: 100%;
  position: absolute;

  .container {
    @media (min-width: 600px) {
      padding-top: 20px;
    }

    @media (min-width: 1200px) {
      padding-top: 34px;
      align-items: flex-end;
      flex-wrap: nowrap;
    }

    .navbar-brand {
      margin-right: 0;
      width: 128px;
      height: 39px;

      text-indent: -9999px;
      overflow: hidden;

      @media (min-width: 768px) {
        width: 160px;
        height: 59px;
      }

      @media (min-width: 1200px) {
        width: 173px;
        height: 53px;
      }

      @include lingo-logo($white);
    }

    .switch-lang-mobile {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;

      padding-right: 23px;

      @media (min-width: 768px) {
        padding-right: 40px;
      }
    }

    .navbar-toggler {
      position: absolute;

      right: 5px;

      @media (min-width: 768px) {
        right: 18px;
      }

      font-size: 2rem;
      color: #fff;
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

      &.collapse {
        display: none;

        &.show {
          display: block;
          width: 100%;
          background-color: rgba(239, 72, 101, 0.92);
          padding: 30px 74px;
          position: absolute;
          left: 0px;
          font-size: 31px;
        }
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

  .only-desktop {
    visibility: hidden !important;
    position: absolute;
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1090px;
    }

    .only-mobile {
      visibility: hidden !important;
      position: absolute;
    }

    .only-desktop {
      visibility: visible !important;
      position: initial;
    }
  }
}
</style>
