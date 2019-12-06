<template>
  <div>
    <div class="about-group-wrapper">
      <LingoHero @onHeightCalculated="onHeroHeightCalculated" />
      <LingoMiniBio :hero-height="heroHeight" />
      <LingoAbout :hero-height="heroHeight" />
    </div>

    <div class="lingo-services-component">
      <div class="container services-container">
        <div class="boxes-collumns-wrapper">
          <!--left or bottom collumn-->
          <div class="first-boxes-collumn">
            <div class="line only-desktop-flex">
              <div class="logo-box">
                <div class="logo">Lingo</div>
              </div>

              <div class="service-box revisao">
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
                      src="@/assets/box-icons/revisao.svg"
                      alt=""
                    />
                  </div>
                  <h4 class="service-title">Revisão</h4>
                </div>
              </div>
            </div>

            <div class="line all-items">
              <div class="service-box revisao only-mobile-flex">
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
                      src="@/assets/box-icons/revisao.svg"
                      alt=""
                    />
                  </div>
                  <h4 class="service-title">Revisão</h4>
                </div>
              </div>

              <div class="service-box transcricao">
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
                      src="@/assets/box-icons/transcricao.svg"
                      alt=""
                    />
                  </div>
                  <h4 class="service-title">Transcrição</h4>
                </div>
              </div>

              <div class="service-box media">
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
                      src="@/assets/box-icons/media.svg"
                      alt=""
                    />
                  </div>
                  <h4 class="service-title">Media Training</h4>
                </div>
              </div>

              <div class="service-box traducoes only-mobile-flex">
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
                      src="@/assets/box-icons/traducoes.svg"
                      alt=""
                    />
                  </div>
                  <h4 class="service-title">Traduções</h4>
                </div>
              </div>

              <div class="service-box interpretacao only-mobile-flex">
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
                      src="@/assets/box-icons/interpretacao.svg"
                      alt=""
                    />
                  </div>
                  <h4 class="service-title">Interpretação</h4>
                </div>
              </div>
            </div>

            <div class="line only-desktop-flex">
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
                  <h4 class="service-title big">Traduções</h4>
                </div>
              </div>
            </div>
          </div>

          <!--right or top collumn-->
          <div class="second-boxes-collumn">
            <div class="line only-desktop-flex">
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

            <div class="line only-desktop-flex">
              <div class="service-box interpretacao">
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
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
$service-box-width: 100px;
$service-box-big-width: 300px;

$services-box-padding: 8px;

@mixin only-desktop($display) {
  display: none !important;

  @media (min-width: 571px) {
    display: #{$display} !important;
  }
}

@mixin only-mobile($display) {
  display: #{$display} !important;

  @media (min-width: 571px) {
    display: none !important;
  }
}

.only-desktop-flex {
  @include only-desktop(flex);
}

.only-mobile-flex {
  @include only-mobile(flex);
}

.lingo-services-component {
  position: relative;

  &::before {
    content: '';
    width: 400px;
    height: 911px;
    position: absolute;
    top: 10%;
    background: url('~assets/designs/curva.svg') no-repeat;

    @include only-desktop(block);

    left: -300px;

    @media (min-width: 1200px) {
      left: -200px;
    }

    @media (min-width: 1560px) {
      left: 0;
    }
  }

  &::after {
    content: '';
    width: 471px;
    height: 1415px;
    position: absolute;
    right: 0;
    top: 63%;
    background: url('~assets/designs/curva02.svg') no-repeat;

    @include only-desktop(block);
  }

  .services-container {
    border: solid 3px goldenrod;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    @media (min-width: 571px) {
      padding-top: 290px;
    }

    .boxes-collumns-wrapper {
      border: solid 3px red;
      display: flex;
      flex-direction: column-reverse;

      @media (min-width: 571px) {
        flex-direction: row;
        width: calc(#{$service-box-width * 2} * 4);
      }

      .line {
        border: solid 3px steelblue;
        display: flex;
        flex-wrap: wrap;

        margin-top: 1px;

        width: calc(
          (#{$service-box-width * 1.5} * 2) + #{$services-box-padding}
        );

        @media (min-width: 430px) {
          width: calc(
            (#{$service-box-width * 1.8} * 2) + #{$services-box-padding}
          );
        }

        @media (min-width: 500px) {
          width: calc(
            (#{$service-box-width * 2} * 2) + #{$services-box-padding}
          );
        }

        @media (min-width: 571px) {
          flex-wrap: nowrap;
          align-items: flex-end;
        }
      }

      .first-boxes-collumn {
        position: relative;

        @media (min-width: 571px) {
          top: -156px;
        }

        .logo-box {
          width: $service-box-width;
          height: calc(#{$service-box-width} * 2);

          .logo {
            height: $service-box-width;
            width: calc(#{$service-box-width} * 2);

            @include lingo-logo(#eeeae5);

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

      .second-boxes-collumn {
        width: calc(#{$service-box-width} * 2);

        .alfabet-box {
          width: calc(#{$service-box-width} * 2);

          img {
            width: $service-box-width + 15px;
          }
        }

        .box-gradient {
          width: calc(#{$service-box-width} * 2);
          height: calc(#{$service-box-width} * 2);
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
          width: #{$service-box-width};
          height: #{$service-box-width};

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

    .service-box {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-items: center;

      padding: $services-box-padding;
      margin-right: 1px;

      min-width: #{$service-box-width * 1.5};
      min-height: #{$service-box-width * 1.5};

      @media (min-width: 430px) {
        min-width: calc(#{$service-box-width * 1.8});
        min-height: calc(#{$service-box-width * 1.8});
      }

      @media (min-width: 500px) {
        min-width: calc(#{$service-box-width * 2});
        min-height: calc(#{$service-box-width * 2});
      }

      &.big {
        width: #{$service-box-big-width};
        height: #{$service-box-big-width};
      }

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
          text-align: center;

          @media (min-width: 571px) {
            padding: 20px;
          }

          img.icon {
            width: 76px;

            @media (min-width: 430px) {
              width: 102px;
            }

            &.big {
              width: 130px;
            }
          }
        }

        h4.service-title {
          text-align: center;
          color: black;

          font-size: 16px;

          @media (min-width: 430px) {
            font-size: 20px;
            padding: 5px;
          }

          &.big {
            font-size: 40px;
          }
        }
      }

      &:hover {
        .service-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          justify-content: space-evenly;
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
