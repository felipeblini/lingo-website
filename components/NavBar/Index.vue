<template>
  <b-navbar
    toggleable="custom"
    type="light"
    variant=""
    :class="{
      fixed: $store.state.navbarFixed || collapsed,
      'd-none': $store.state.isModalOpen
    }"
  >
    <div class="container">
      <b-navbar-brand href="#" @click.prevent="goToAnchor('top', 0)">
        Lingo Interpretação, tradução simultânea, transcrição, revisão e media
        training
      </b-navbar-brand>

      <div class="only-mobile switch-lang-mobile">
        <SwitchLanguageButton
          :initial-lang="$route.query.lang"
          @toggled="onLanguageToggled"
        />
      </div>

      <b-navbar-toggle
        target="nav-collapse"
        @click="onNavBarTogglerClick($event)"
      >
        <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="goToAnchor('company', -30)"
            >
              {{ $store.state.menu['company'][$store.state.language] }}
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="goToAnchor('who-are-us', 0)"
            >
              {{ $store.state.menu['who-are-us'][$store.state.language] }}
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="goToAnchor('services', ourServicesScrollOffset)"
            >
              {{ $store.state.menu['services'][$store.state.language] }}
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="
                goToAnchor('testimonials', testimonialsScrollOffset)
              "
            >
              {{ $store.state.menu['testimonials'][$store.state.language] }}
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="goToAnchor('partners', -30)"
            >
              {{ $store.state.menu['partners'][$store.state.language] }}
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="goToAnchor('contact', 0)"
            >
              {{ $store.state.menu['contact'][$store.state.language] }}
            </a>
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="mr-3 only-desktop">
            <SwitchLanguageButton
              :initial-lang="$route.query.lang"
              @toggled="onLanguageToggled"
            />
          </div>
          <WhatsappButtonDesktop class="d-none d-xl-block" />
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import SwitchLanguageButton from './SwitchLanguageButton.vue'
import WhatsappButtonDesktop from '~/components/WhatsappButton/DesktopBtn.vue'

export default {
  components: {
    WhatsappButtonDesktop,
    SwitchLanguageButton
  },
  data: () => ({
    collapsed: false
  }),
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
  mounted() {
    window.addEventListener('scroll', () => {
      setTimeout(() => {
        const navbar = document.querySelectorAll('.navbar')[0]
        const top = window.pageYOffset

        if (top > 50) {
          this.$store.commit('setNavbarFixed', true)
        } else {
          this.$store.commit('setNavbarFixed', false)
        }
      }, 200)
    })
  },

  methods: {
    goToAnchor(menu, offset) {
      const scrollTo = this.$store.state.menu[menu]
        ? this.$store.state.menu[menu][this.$store.state.language]
            .toLowerCase()
            .replace(' ', '-')
            .replace('ç', 'c')
        : menu

      this.$smoothScroll({
        scrollTo: document.getElementById(scrollTo),
        duration: 2000,
        offset,
        updateHistory: false
      })
    },
    onLanguageToggled(value) {
      this.$store.commit('toggleLanguage', value)
    },
    onNavBarTogglerClick(evt) {
      this.collapsed = !this.collapsed

      console.log(this.collapsed)
      this.$store.commit('setLoading', this.collapsed)
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
    z-index: 4;
    background-color: $pink;
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
        background: $pink;

        ul.navbar-nav {
          align-items: center;
          height: 100vh;
          justify-content: center;
          font-size: 26px;
          overflow: scroll;

          @media (orientation: landscape) {
            padding-top: 150px;
          }

          @media (min-width: 321px) {
            // padding: 105px 74px;
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

  // .only-mobile {
  //   display: flex;

  //   @media (min-width: 1201px) {
  //     display: none;
  //   }
  // }

  // .wpbtn-desktop {
  //   display: none;

  //   @media (min-width: 1201px) {
  //     display: flex;
  //   }
  // }

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
