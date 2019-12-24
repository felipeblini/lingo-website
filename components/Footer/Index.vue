<template>
  <div class="lingo-footer-cmp">
    <div class="footer-background"></div>
    <div class="container footer-container">
      <div class="row">
        <div class="col footer-items-wrapper">
          <div class="footer-logo"></div>
          <address>
            {{ contact.line1 }}<br />
            <div class="d-flex">
              <span class="d-block">{{ contact.line2 }}</span>
              <span class="d-block">{{ contact.line3 }}</span>
            </div>
          </address>
          <div class="social-icons">
            <a
              target="_blank"
              :href="`https://wa.me/${socialLinks.whatsapp}`"
              v-if="socialLinks.whatsapp"
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
      contact: {
        line1: '',
        line2: '',
        line3: ''
      },
      socialLinks: {
        whatsapp: '',
        instagram: '',
        facebook: '',
        youtube: ''
      }
    }
  },

  mounted() {
    // TODO: fetch data on wordpress
    this.contact.line1 = 'Endereço da Lingo, 000 - Cidade/UF'
    this.contact.line2 = 'lingo@lingo.com.br'
    this.contact.line3 = '00.000-000'

    this.socialLinks.whatsapp = '5521972627541'
    this.socialLinks.instagram = 'https://instagram.com'
    this.socialLinks.facebook = 'https://facebook.com'
    this.socialLinks.youtube = 'https://youtube.com'

    this.$store.commit('storeWhatsappNumber', this.socialLinks.whatsapp)

    console.log('footer ready')
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
    height: 228px;
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
