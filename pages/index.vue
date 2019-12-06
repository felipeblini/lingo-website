<template>
  <div>
    <div class="about-group-wrapper">
      <LingoHero @onHeightCalculated="onHeroHeightCalculated" />
      <LingoMiniBio :hero-height="heroHeight" />
      <LingoAbout :hero-height="heroHeight" />
    </div>

    <div class="lingo-services">
      <div class="container">
        <div class="boxes-wrapper">
          <div class="boxes-collumns">
            <!--left collumn-->
            <div class="left-boxes-collumn">
              <div class="line">
                <div class="logo-box">
                  <div class="logo">Lingo</div>
                </div>

                <div class="service-box small revisao">
                  <div class="service-info">
                    <div class="service-icon">
                      <img
                        class="icon small"
                        src="@/assets/box-icons/revisao.svg"
                        alt=""
                      />
                    </div>
                    <h4 class="service-title">Revisão</h4>
                  </div>
                </div>
              </div>

              <div class="line">
                <div class="service-box small transcricao">
                  <div class="service-info">
                    <div class="service-icon">
                      <img
                        class="icon small"
                        src="@/assets/box-icons/transcricao.svg"
                        alt=""
                      />
                    </div>
                    <h4 class="service-title">Transcrição</h4>
                  </div>
                </div>

                <div class="service-box small media">
                  <div class="service-info">
                    <div class="service-icon">
                      <img
                        class="icon small"
                        src="@/assets/box-icons/media.svg"
                        alt=""
                      />
                    </div>
                    <h4 class="service-title">Media Training</h4>
                  </div>
                </div>
              </div>

              <div class="line">
                <div class="ponto-virgula"></div>
                <div class="service-box big traducoes">
                  <div class="service-info">
                    <div class="service-icon">
                      <img
                        class="icon big"
                        src="@/assets/box-icons/traducoes.svg"
                        alt=""
                      />
                    </div>
                    <h4 class="service-title">Traduções</h4>
                  </div>
                </div>
              </div>
            </div>

            <!--right collumn-->
            <div class="right-boxes-collumn">
              <div class="line">
                <div class="alfabet-box">
                  <img
                    src="@/assets/designs/alfabeto.svg"
                    class="mb-5 ml-5"
                    alt=""
                  />
                </div>
              </div>

              <div class="line">
                <div class="box-gradient">
                  <h1 class="section-title white">Nosso Trabalho</h1>
                  <p class="section-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    impedit cupiditate fugit, voluptatum fuga blanditiis
                  </p>
                </div>
              </div>

              <div class="line">
                <div class="service-box small interpretacao">
                  <div class="service-info">
                    <div class="service-icon">
                      <img
                        class="icon small"
                        src="@/assets/box-icons/interpretacao.svg"
                        alt=""
                      />
                    </div>
                    <h4 class="service-title">Interpretação</h4>
                  </div>
                </div>

                <div class="paragrafo-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LingoHero from '~/components/Hero'
import LingoMiniBio from '~/components/Minibio'
import LingoAbout from '~/components/About'

export default {
  components: {
    LingoHero,
    LingoMiniBio,
    LingoAbout
  },
  data() {
    return {
      heroHeight: 0
    }
  },
  methods: {
    onHeroHeightCalculated(height) {
      this.heroHeight = height
    }
  }
}
</script>

<style lang="scss" scoped>
$service-box-small-width: 200px;
$service-box-big-width: 300px;

.lingo-services {
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 400px;
    height: 911px;
    position: absolute;
    top: 10%;
    left: 0;
    background: url('~assets/designs/curva.svg') no-repeat;
  }

  &::after {
    content: '';
    display: block;
    width: 471px;
    height: 1415px;
    position: absolute;
    right: 0;
    top: 63%;
    background: url('~assets/designs/curva02.svg') no-repeat;
  }

  .container {
    position: relative;
    z-index: 2;

    padding-top: 290px;

    .boxes-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 50px;

      .service-box {
        $services-box-padding: 8px;

        cursor: pointer;
        display: flex;

        padding: $services-box-padding;
        margin-right: 1px;

        &.small {
          width: #{$service-box-small-width};
          height: #{$service-box-small-width};
        }

        &.big {
          width: #{$service-box-big-width};
          height: #{$service-box-big-width};
        }

        // &.small {
        //   width: calc(
        //     #{$service-box-small-width} - #{$services-box-padding} * 2
        //   );
        //   height: calc(
        //     #{$service-box-small-width} - #{$services-box-padding} * 2
        //   );
        // }

        // &.big {
        //   width: calc(#{$service-box-big-width} - #{$services-box-padding} * 2);
        //   height: calc(
        //     #{$service-box-big-width} - #{$services-box-padding} * 2
        //   );
        // }

        background-size: contain;

        &.revisao {
          background-image: url('~assets/box-images/revisao.jpg');
          background-repeat: no-repeat;
        }

        &.media {
          background-image: url('~assets/box-images/media.jpg');
          background-repeat: no-repeat;
        }

        &.interpretacao {
          background-image: url('~assets/box-images/interpretacao.jpg');
          background-repeat: no-repeat;
        }

        &.traducoes {
          background-image: url('~assets/box-images/traducoes.jpg');
          background-repeat: no-repeat;
        }

        &.transcricao {
          background-image: url('~assets/box-images/transcricao.jpg');
          background-repeat: no-repeat;
        }

        .service-info {
          display: none;
          width: 100%;
          height: 100%;
          background: rgba($color: #fff, $alpha: 0.8);

          .service-icon {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            img.icon {
              &.big {
                width: 200px;
              }

              &.small {
                width: 102px;
              }
            }
          }

          h4.service-title {
            color: black;
            padding: 0px 12px;
            flex-grow: 1;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            font-size: 20px;
          }
        }

        &:hover {
          .service-info {
            display: flex;
            flex-direction: column;
          }
        }
      }

      .boxes-collumns {
        display: flex;

        .line {
          display: flex;
          align-items: flex-end;
          margin-top: 1px;
        }

        .left-boxes-collumn {
          position: relative;
          top: -156px;

          .logo-box {
            width: $service-box-small-width;
            height: calc(#{$service-box-small-width} * 2);

            .logo {
              height: $service-box-small-width;
              width: calc(#{$service-box-small-width} * 2);
              @include lingo-logo(#ccc);
              transform: rotate(-90deg);
              transform-origin: bottom;
              margin-left: 14px;
              text-indent: -9999px;
              overflow: hidden;
            }
          }

          .ponto-virgula {
            height: $service-box-big-width;
            flex-grow: 1;
            display: flex;
            align-items: flex-end;
            justify-content: center;

            &:after {
              content: '';
              display: block;
              width: 59px;
              height: 227px;
              background: url('~assets/designs/pontovirgula.svg') no-repeat;
              margin-bottom: -30px;
            }
          }
        }

        .right-boxes-collumn {
          width: calc(#{$service-box-small-width} * 2);

          .alfabet-box {
            width: calc(#{$service-box-small-width} * 2);

            img {
              width: $service-box-small-width + 15px;
            }
          }

          .box-gradient {
            width: calc(#{$service-box-small-width} * 2);
            height: calc(#{$service-box-small-width} * 2);
            background: url('~assets/designs/box-gradient.svg');
            background-size: cover;
            padding-left: 45px;
            color: #fff;

            h1.section-title {
              margin-top: 41px;
              font-size: 55px;
              line-height: 53px;
            }

            p.section-description {
              font-size: 19px;
            }
          }

          .paragrafo-icon {
            width: #{$service-box-small-width};
            height: #{$service-box-small-width};
            display: flex;

            align-items: flex-end;
            justify-content: flex-end;

            &::after {
              content: '';
              display: block;
              width: 126px;
              height: 223px;
              background: url('~assets/designs/paragrafo.svg') no-repeat;
              background-size: contain;
              position: relative;
              top: 58%;
              right: -40%;
            }

            img {
              border: solid;
              position: relative;
              width: 156px;
              height: 282px;
            }
          }
        }
      }
    }
  }
}

.about-group-wrapper {
  background: #efeae4;
  background-repeat: no-repeat;

  @media (min-width: 571px) {
    background-image: url('~assets/img/bg-linhas-sm@1X.jpg'),
      linear-gradient(to bottom, #efeae4 0%, #efeae4 68%, #fff 80%, #fff 100%);
  }
  @media (min-width: 900px) {
    background-image: url('~assets/img/bg-linhas-md@1X.jpg'),
      linear-gradient(to bottom, #efeae4 0%, #efeae4 68%, #fff 80%, #fff 100%);
  }
  @media (min-width: 1200px) {
    background-image: url('~assets/img/bg-linhas-lg@1X.jpg'),
      linear-gradient(to bottom, #efeae4 0%, #efeae4 68%, #fff 80%, #fff 100%);
  }
}
</style>
