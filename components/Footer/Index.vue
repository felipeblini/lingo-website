<template>
  <div :id="anchorName" class="lingo-footer-cmp">
    <WhatsappButtonMobile
      class="d-xl-none"
      :class="{
        'd-none': $store.state.isModalOpen,
      }"
    />
    <div class="footer-background" v-if="showBkgImage"></div>
    <div class="container footer-container">
      <div class="row">
        <div class="col footer-items-wrapper">
          <div class="footer-logo"></div>
          <address v-html="address"></address>
          <div class="social-icons">
            <WhatsappPopover
              class="d-none d-xl-block"
              @hide="disableWhatsApppTooltip = false"
            >
              <template v-slot:button>
                <a
                  id="wp-icon-tooltip"
                  href="#"
                  @click.prevent="disableWhatsApppTooltip = true"
                  class="tooltip-target b3"
                  v-b-tooltip.hover
                >
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                </a>

                <b-tooltip
                  :disabled.sync="disableWhatsApppTooltip"
                  v-if="!disableWhatsApppTooltip"
                  target="wp-icon-tooltip"
                  placement="top"
                >
                  {{ whatsappTitle[$store.state.language] }}
                </b-tooltip>
              </template>
            </WhatsappPopover>

            <a
              target="_blank"
              :href="socialLinks.instagram"
              v-if="socialLinks.instagram"
              v-b-tooltip.hover
              :title="instagramTitle[$store.state.language]"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>

            <a
              target="_blank"
              :href="socialLinks.facebook"
              v-if="socialLinks.facebook"
              v-b-tooltip.hover
              :title="facebookTitle[$store.state.language]"
            >
              <font-awesome-icon :icon="['fab', 'facebook-square']" />
            </a>

            <a
              target="_blank"
              :href="socialLinks.youtube"
              v-if="socialLinks.youtube"
              v-b-tooltip.hover
              :title="youtubeTitle[$store.state.language]"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>

            <a
              target="_blank"
              :href="socialLinks.linkedin"
              v-if="socialLinks.linkedin"
              v-b-tooltip.hover
              :title="linkedinTitle[$store.state.language]"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhatsappPopover from '@/components/WhatsappButton/WhatsappPopover.vue'
import WhatsappButtonMobile from '@/components/WhatsappButton/MobileFloatBtn.vue'

export default {
  components: {
    WhatsappPopover,
    WhatsappButtonMobile,
  },
  props: {
    contactData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      address: '',
      socialLinks: {
        instagram: '',
        facebook: '',
        youtube: '',
        linkedin: '',
      },
      instagramTitle: {
        'pt-BR': 'Siga-nos no Instagram',
        'en-US': 'Follow us on Instagram',
      },
      facebookTitle: {
        'pt-BR': 'Acompanhe-nos pelo Facebook',
        'en-US': 'Follow us on Facebook',
      },
      youtubeTitle: {
        'pt-BR': 'Acompanhe nossos conteúdos no Youtube',
        'en-US': 'Subscribe on Youtube',
      },
      linkedinTitle: {
        'pt-BR': 'Saiba mais sobre a gente no LinkedIn',
        'en-US': 'Know more about us on LinkedIn',
      },
      whatsappTitle: {
        'pt-BR': 'Fale conosco pelo WhatsApp',
        'en-US': 'Contact us through WhatsApp',
      },
      disableWhatsApppTooltip: false,
      showBkgImage: false,
    }
  },

  computed: {
    anchorName() {
      return `${this.$store.state.menu.contact[this.$store.state.language]
        .toLowerCase()
        .replace(' ', '-')}`
    },
  },

  watch: {
    contactData: {
      handler: function (data) {
        this.address = data.content.rendered.trim()

        this.socialLinks.instagram = data.acf.instagram_url
        this.socialLinks.facebook = data.acf.facebook_url
        this.socialLinks.youtube = data.acf.youtube_url
        this.socialLinks.linkedin = data.acf.linkedin_url

        for (const property in this.socialLinks) {
          if (!this.socialLinks[property].includes('://')) {
            const value = Array.from(this.socialLinks[property])
            value.unshift('https://')
            this.socialLinks[property] = value.join('')
          }
        }

        this.$emit('ready')
      },
      immediate: true,
    },

    '$store.state.language'(value) {
      this.$emit('ready')
    },
  },

  mounted() {
    const showBkgImage = () => {
      const bottomDistanceFromTop =
        document.documentElement.scrollTop + window.innerHeight

      const hasReachedTheDistanceFromBottom =
        Math.floor(bottomDistanceFromTop) >
        document.documentElement.scrollHeight - 500

      if (!this.showBkgImage && hasReachedTheDistanceFromBottom) {
        this.$nextTick(() => {
          this.showBkgImage = true
          this.$forceUpdate()
        })
      }
    }

    showBkgImage()

    window.addEventListener('scroll', () => {
      setTimeout(() => {
        showBkgImage()
      }, 100)
    })
  },
}
</script>

<style lang="scss">
.lingo-footer-cmp {
  position: relative;
  overflow: hidden;

  .footer-background {
    position: absolute;
    width: 200%;
    height: 235px;
    background-image: url('./img/curvarodape1.svg');
    background-repeat: no-repeat;
    background-size: cover;
    left: -62%;

    @media (min-width: 440px) {
      left: -43%;
    }

    @media (min-width: 1080px) {
      width: 100%;
      height: 240px;

      background-image: url('./img/curvarodape1.svg'),
        url('./img/curvarodape2.svg');

      background-size: cover;
      background-position-x: right, -481px;
      background-position-y: top, 119px;

      left: unset;
    }

    @media (min-width: 1500px) {
      height: 320px;
    }
  }

  .footer-container {
    padding-top: 30px;

    @media (min-width: 768px) {
      padding-top: 90px;
      padding-bottom: 30px;
    }

    @media (min-width: 1080px) {
      padding-top: 125px;
      padding-left: 35px;
      padding-right: 35px;
    }

    @media (min-width: 1080px) {
      padding-left: 55px;
      padding-right: 55px;
    }

    @media (min-width: 1500px) {
      padding-top: 180px;
      padding-left: 0;
      padding-right: 0;
    }

    .footer-items-wrapper {
      color: #fff;

      display: flex;
      align-items: center;

      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      .footer-logo {
        width: 183px;
        height: 74px;
        margin-right: 30px;

        @include lingo-logo($white);
      }

      address {
        margin: 0;
        display: flex;
        align-items: center;
        font-size: 17px;

        @media (min-width: 768px) {
          height: 100%;

          @media (max-width: 992px) {
            margin-left: -15px;
          }
        }

        @media (min-width: 1024px) {
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            font-size: 18pt;
          }
        }

        p {
          margin: 0 !important;
          text-align: center;

          @media (min-width: 768px) {
            display: contents;
            text-align: initial;
          }
        }

        a {
          color: white;
        }
      }

      .social-icons {
        flex-grow: 1;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        a {
          color: white;
          font-size: 45px;
          margin: 0 10px;

          &:hover {
            color: #fafafa;
          }
        }
      }
    }
  }
}

.whatsapp-popover-content {
  display: flex;
}
</style>
