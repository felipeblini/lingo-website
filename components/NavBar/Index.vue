<template>
  <b-navbar toggleable="custom" type="light" variant="">
    <div class="container">
      <b-navbar-brand href="#top" v-smooth-scroll="{ duration: 2000 }">
        Lingo Interpretação, tradução simultânea, transcrição, revisão e media
        training
      </b-navbar-brand>

      <div class="only-mobile switch-lang-mobile">
        <SwitchLanguageButton @toggled="onLanguageToggled" />
      </div>

      <b-navbar-toggle target="nav-collapse">
        <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <a
              class="nav-link"
              :href="
                `#${$store.state.menu['company'][$store.state.language]
                  .toLowerCase()
                  .replace(' ', '-')}`
              "
              v-smooth-scroll="{ duration: 2000, offset: -30 }"
              >{{ $store.state.menu['company'][$store.state.language] }}</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              :href="
                `#${$store.state.menu['who-are-us'][$store.state.language]
                  .toLowerCase()
                  .replace(' ', '-')}`
              "
              v-smooth-scroll="{ duration: 2000, offset: whoAreUsScrollOffset }"
              >{{ $store.state.menu['who-are-us'][$store.state.language] }}</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              :href="
                `#${$store.state.menu['services'][$store.state.language]
                  .toLowerCase()
                  .replace(' ', '-')
                  .replace('ç', 'c')}`
              "
              v-smooth-scroll="{
                duration: 2000,
                offset: ourServicesScrollOffset
              }"
              >{{ $store.state.menu['services'][$store.state.language] }}</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              :href="
                `#${$store.state.menu['testimonials'][$store.state.language]
                  .toLowerCase()
                  .replace(' ', '-')}`
              "
              v-smooth-scroll="{
                duration: 2000,
                offset: testimonialsScrollOffset
              }"
              >{{ $store.state.menu['testimonials'][$store.state.language] }}</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              :href="
                `#${$store.state.menu['partners'][$store.state.language]
                  .toLowerCase()
                  .replace(' ', '-')}`
              "
              v-smooth-scroll="{ duration: 2000, offset: -30 }"
              >{{ $store.state.menu['partners'][$store.state.language] }}</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              :href="
                `#${$store.state.menu['contact'][$store.state.language]
                  .toLowerCase()
                  .replace(' ', '-')}`
              "
              v-smooth-scroll="{ duration: 2000 }"
              >{{ $store.state.menu['contact'][$store.state.language] }}</a
            >
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="mr-3 only-desktop">
            <SwitchLanguageButton @toggled="onLanguageToggled" />
          </div>
          <!-- <WhatsappButton class="wpbtn-desktop" /> -->
        </b-navbar-nav>
      </b-collapse>
    </div>

    <!-- <WhatsappButton class="wpbtn-mobile" /> -->
  </b-navbar>
</template>

<script>
import SwitchLanguageButton from './SwitchLanguageButton.vue'
// import WhatsappButton from '~/components/WhatsappButton/Index.vue'

if (process.client) {
  window.addEventListener('scroll', () => {
    setTimeout(() => {
      const navbar = document.querySelectorAll('.navbar')[0]
      const top = window.pageYOffset

      if (top > 50) {
        if (!navbar.classList.contains('fixed')) {
          navbar.classList.add('fixed')
        }
      } else {
        navbar.classList.remove('fixed')
      }
    }, 200)
  })
}

export default {
  components: {
    // WhatsappButton,
    SwitchLanguageButton
  },
  computed: {
    whoAreUsScrollOffset() {
      if (process.client) {
        if (window.innerWidth <= 414) return -60
        if (window.innerWidth <= 768) return -220
        if (window.innerWidth <= 1024) return -250
        return -270
      }

      return -270
    },

    ourServicesScrollOffset() {
      if (process.client) {
        if (window.innerWidth <= 320) return -50
        if (window.innerWidth <= 414) return -30
        if (window.innerWidth <= 768) return 250
        if (window.innerWidth <= 1024) return -100
        return 250
      }

      return 250
    },

    testimonialsScrollOffset() {
      if (process.client) {
        if (window.innerWidth <= 320) return 15
        if (window.innerWidth <= 414) return 30
        if (window.innerWidth <= 768) return 50
        if (window.innerWidth <= 1024) return 100
        return -160
      }

      return -160
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

  transition: all 0.25s;

  &.fixed {
    position: fixed;
    background-color: rgba(198, 78, 97, 0.96078);
  }

  .container {
    @media (min-width: 600px) {
      padding: 20px;
    }

    @media (min-width: 1200px) {
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
        top: 0;
        left: 0px;
        right: 72px;
        z-index: -1;

        width: 100%;
        background: rgba(198, 78, 97, 0.96078);

        ul.navbar-nav {
          align-items: center;
          height: calc(100vh - 19px);
          justify-content: center;
          padding: 105px 40px;
          font-size: 26px;

          @media (min-width: 321px) {
            padding: 105px 74px;
            font-size: 40px;
          }

          @media (min-width: 360px) {
            font-size: 30px;
          }

          @media (min-width: 768px) {
            font-size: 45px;
          }

          @media (min-width: 1024px) {
            font-size: 55px;
          }

          li {
            padding: 6px 0;

            @media (min-width: 768px) {
              padding: 10px 0;
            }

            @media (min-width: 1024px) {
              padding: 14px 0;
            }
          }
        }
      }

      &.collapse {
        display: none;

        &.show {
          display: block;
        }
      }
    }

    .navbar-nav {
      align-items: flex-end;

      a.nav-link {
        color: #fff;

        @media (min-width: 1201px) and (pointer: coarse) {
          font-size: 11pt;
        }

        &:hover {
          text-decoration: underline;
        }
      }

      @media (min-width: 1200px) {
        align-items: center;
      }
    }
  }

  @media (min-width: 1201px) {
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

  .wpbtn-mobile {
    display: flex;

    @media (min-width: 1201px) {
      display: none;
    }
  }

  .wpbtn-desktop {
    display: none;

    @media (min-width: 1201px) {
      display: flex;
    }
  }

  @media (min-width: 1201px) {
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
