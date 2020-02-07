<template>
  <div :id="anchorName" class="lingo-footer-cmp">
    <div class="footer-background"></div>
    <div class="container footer-container">
      <div class="row">
        <div class="col footer-items-wrapper">
          <div class="footer-logo"></div>
          <address v-html="address"></address>
          <div class="social-icons">
            <a
              target="_blank"
              :href="`https://wa.me/${$store.state.whatsappNumber}`"
              class="whatsapp"
            >
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>

            <a
              target="_blank"
              :href="socialLinks.instagram"
              v-if="socialLinks.instagram"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>

            <a
              target="_blank"
              :href="socialLinks.facebook"
              v-if="socialLinks.facebook"
            >
              <font-awesome-icon :icon="['fab', 'facebook-square']" />
            </a>

            <a
              target="_blank"
              :href="socialLinks.youtube"
              v-if="socialLinks.youtube"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: '',
      socialLinks: {
        instagram: '',
        facebook: '',
        youtube: ''
      }
    }
  },

  computed: {
    anchorName() {
      return `${this.$store.state.menu.contact[this.$store.state.language]
        .toLowerCase()
        .replace(' ', '-')}`
    }
  },

  watch: {
    '$store.state.language'(value) {
      this.$emit('ready')
    }
  },

  async mounted() {
    const response = await this.$axios.get(`posts?slug=contato`)
    this.address = response.data[0].content.rendered

    this.socialLinks.instagram = response.data[0].acf.instagram_url
    this.socialLinks.facebook = response.data[0].acf.facebook_url
    this.socialLinks.youtube = response.data[0].acf.youtube_url

    for (const property in this.socialLinks) {
      if (!this.socialLinks[property].includes('://')) {
        const value = Array.from(this.socialLinks[property])
        value.unshift('https://')
        this.socialLinks[property] = value.join('')
      }
    }

    this.$emit('ready')
  }
}
</script>

<style lang="scss" scoped>
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
        width: 200px;
        height: 74px;
        margin-right: 30px;

        @include lingo-logo($white);
      }

      address {
        margin-bottom: 0;

        @media (min-width: 1024px) {
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            font-size: 18pt;
          }
        }

        .d-flex {
          flex-direction: row;
          text-align: center;

          span {
            &:nth-last-child(1) {
              margin-left: 10px;
            }
          }

          @media (min-width: 768px) {
            flex-direction: column;
            text-align: left;

            span {
              &:nth-last-child(1) {
                margin-left: 0;
              }
            }
          }
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

        .whatsapp {
          display: none;

          @media (min-width: 1200px) {
            display: block;
          }
        }
      }
    }
  }
}
</style>
