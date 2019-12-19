<template>
  <footer class="lingo-footer-wrapper">
    <div class="footer-background">
      <div class="container">
        <div class="row">
          <div class="col footer-container">
            <div class="footer-logo"></div>
            <address>
              Endereço da Lingo, 000 - Cidade/UF<br />
              <div class="d-flex">
                <span class="d-block">lingo@lingo.com.br</span>
                <span class="d-block">00.000-000</span>
              </div>
            </address>
            <div class="social-icons">
              <a href="#" class="whatsapp"
                ><font-awesome-icon :icon="['fab', 'whatsapp']"
              /></a>
              <a href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
              <a href="#"
                ><font-awesome-icon :icon="['fab', 'facebook-square']"
              /></a>
              <a href="#"><font-awesome-icon :icon="['fab', 'youtube']"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer.lingo-footer-wrapper {
  overflow: hidden;

  .footer-background {
    width: 200%;
    height: 228px;
    background-image: url('./img/curvarodape1.svg');
    background-repeat: no-repeat;
    background-size: cover;
    left: -62%;

    position: relative;

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

    .footer-container {
      padding-top: 43px;
      color: #fff;
      display: flex;
      flex-direction: column;

      align-items: center;

      left: 5%;

      @media (min-width: 441px) {
        left: -2%;
      }

      @media (min-width: 495px) {
        left: -4%;
      }

      @media (min-width: 495px) {
        left: -7%;
      }

      @media (min-width: 768px) {
        padding-top: 100px;
        flex-direction: row;
      }

      @media (min-width: 1080px) {
        left: unset;
        padding-left: 85px;
        padding-right: 85px;
        padding-top: 132px;
      }

      @media (min-width: 1500px) {
        padding-left: 0;
        padding-right: 0;
        padding-top: 180px;
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
