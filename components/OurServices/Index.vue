<template>
  <div :id="anchorName" class="lingo-services-component">
    <img
      class="only-mobile-block"
      src="./img/designs/curva-division-mobile.svg"
      alt=""
    />

    <div class="container services-container">
      <div class="boxes-collumns-wrapper">
        <!--left or bottom collumn-->
        <div class="first-boxes-collumn">
          <div class="line only-desktop-flex">
            <div class="logo-box">
              <div class="logo">Lingo</div>
            </div>

            <div tabindex="0" class="service-box service-1 revisao">
              <div class="service-info">
                <div class="service-icon">
                  <img class="icon" src="./img/box-icons/revisao.svg" alt="" />
                </div>
                <h4 class="service-title" :class="$store.state.language">
                  {{ services.titles.revision[$store.state.language] }}
                </h4>
              </div>
            </div>
          </div>

          <div class="line all-services-list">
            <div class="list-wrapper">
              <div
                tabindex="1"
                class="service-box service-1 revisao only-mobile-flex"
              >
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
                      src="./img/box-icons/revisao.svg"
                      alt=""
                    />
                  </div>
                  <h4 class="service-title" :class="$store.state.language">
                    {{ services.titles.revision[$store.state.language] }}
                  </h4>
                </div>
              </div>

              <div tabindex="2" class="service-box service-2 transcricao">
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
                      src="./img/box-icons/transcricao.svg"
                      alt=""
                    />
                  </div>
                  <h4 class="service-title" :class="$store.state.language">
                    {{ services.titles.transcription[$store.state.language] }}
                  </h4>
                </div>
              </div>

              <div tabindex="3" class="service-box service-3 media">
                <div class="service-info">
                  <div class="service-icon">
                    <img class="icon" src="./img/box-icons/media.svg" alt="" />
                  </div>
                  <h4 class="service-title" :class="$store.state.language">
                    {{ services.titles.mediaTraining[$store.state.language] }}
                  </h4>
                </div>
              </div>

              <div
                tabindex="4"
                class="service-box service-4 traducoes only-mobile-flex"
              >
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
                      src="./img/box-icons/traducoes.svg"
                      alt=""
                    />
                  </div>
                  <h4 class="service-title" :class="$store.state.language">
                    {{ services.titles.tranlations[$store.state.language] }}
                  </h4>
                </div>
              </div>

              <div
                tabindex="5"
                class="service-box service-5 interpretacao only-mobile-flex"
              >
                <div class="service-info">
                  <div class="service-icon">
                    <img
                      class="icon"
                      src="./img/box-icons/interpretacao.svg"
                      alt=""
                    />
                  </div>
                  <h4 class="service-title" :class="$store.state.language">
                    {{ services.titles.interpreting[$store.state.language] }}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div class="line only-desktop-flex">
            <div class="ponto-virgula"></div>

            <div tabindex="6" class="service-box service-4 big traducoes">
              <div class="service-info">
                <div class="service-icon">
                  <img
                    class="icon big"
                    src="./img/box-icons/traducoes.svg"
                    alt=""
                  />
                </div>
                <h4 class="service-title big" :class="$store.state.language">
                  {{ services.titles.tranlations[$store.state.language] }}
                </h4>
              </div>
            </div>
          </div>

          <div class="line only-desktop-flex quote">
            <p>
              {{ quotation[$store.state.language] }}
            </p>
          </div>
        </div>

        <!--right or top collumn-->
        <div class="second-boxes-collumn">
          <div class="line only-desktop-flex">
            <div class="alfabet-box">
              <img src="./img/designs/alfabeto.svg" class="mb-5 ml-5" alt="" />
            </div>
          </div>

          <div class="line">
            <div class="box-gradient">
              <h1 class="section-title white">
                {{ title[$store.state.language] }}
              </h1>
              <p class="section-description">
                {{ text[$store.state.language] }}
              </p>
            </div>
          </div>

          <div class="line only-desktop-flex">
            <div tabindex="7" class="service-box service-5 interpretacao">
              <div class="service-info">
                <div class="service-icon">
                  <img
                    class="icon"
                    src="./img/box-icons/interpretacao.svg"
                    alt=""
                  />
                </div>
                <h4 class="service-title" :class="$store.state.language">
                  {{ services.titles.interpreting[$store.state.language] }}
                </h4>
              </div>
            </div>

            <div class="paragrafo-icon"></div>
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
      title: {
        'pt-BR': 'Nosso Trabalho',
        'en-US': 'Our Services'
      },
      text: {
        'pt-BR':
          'Lorem ipsum dolor sit amet consectetur adipisicing elit impedit cupiditate fugit, voluptatum fuga blanditiis pt-BR',
        'en-US':
          'Lorem ipsum dolor sit amet consectetur adipisicing elit impedit cupiditate fugit, voluptatum fuga blanditiis en-US'
      },
      services: {
        titles: {
          revision: {
            'pt-BR': 'Revisão',
            'en-US': 'Revision'
          },
          transcription: {
            'pt-BR': 'Trancrições',
            'en-US': 'Transcriptions'
          },
          mediaTraining: {
            'pt-BR': 'Media Training',
            'en-US': 'Media Training'
          },
          tranlations: {
            'pt-BR': 'Traduções',
            'en-US': 'Translations'
          },
          interpreting: {
            'pt-BR': 'Interpretação',
            'en-US': 'Interpreting'
          }
        }
      },
      quotation: {
        'pt-BR':
          'Lorem ipsum dolor sit amet consectetur adipisicing elit exercitationem distinctio earum eaque ab nisi pt-BR',
        'en-US':
          'Lorem ipsum dolor sit amet consectetur adipisicing elit exercitationem distinctio earum eaque ab nisi en-US'
      }
    }
  },

  computed: {
    anchorName() {
      return `${this.$store.state.menu.services[this.$store.state.language]
        .toLowerCase()
        .replace(' ', '-')
        .replace('ç', 'c')}`
    }
  },

  mounted() {
    let active = 1

    document
      .querySelectorAll('.service-box')
      .forEach((el) =>
        el.classList.contains('service-1')
          ? el.classList.add('active')
          : el.classList.remove('active')
      )

    active++

    const interval = setInterval(() => {
      document
        .querySelectorAll('.service-box')
        .forEach((el) =>
          el.classList.contains(`service-${active}`)
            ? el.classList.add('active')
            : el.classList.remove('active')
        )

      active++

      if (active > 5) active = 1
    }, 3000)

    document.querySelectorAll('.service-box').forEach((el) => {
      const selectItem = () => {
        console.log('select')
        clearInterval(interval)

        document.querySelectorAll('.service-box').forEach((el2) => {
          el2.classList.remove('active')
        })

        el.classList.add('active')
      }

      el.onmouseover = selectItem
      el.onclick = selectItem
    })
  }
}
</script>

<style lang="scss" scoped>
$service-box-width: 100px;
$service-box-big-width: 150px;

$services-box-padding: 8px;

@mixin only-desktop($display) {
  display: none !important;

  @media (min-width: 1080px) {
    display: #{$display} !important;
  }
}

@mixin only-mobile($display) {
  display: #{$display} !important;

  @media (min-width: 1080px) {
    display: none !important;
  }
}

@mixin only-md-screen($display) {
  display: none !important;

  @media (min-width: 768px) {
    display: #{$display} !important;
  }
}

.only-desktop-flex {
  @include only-desktop(flex);
}

.only-mobile-flex {
  @include only-mobile(flex);
}

.only-mobile-block {
  @include only-mobile(block);
}

.lingo-services-component {
  position: relative;

  &::before {
    content: '';
    width: 400px;
    height: 911px;
    position: absolute;
    top: 10%;
    background: url('./img/designs/curva.svg') no-repeat;

    @include only-desktop(block);

    left: -240px;

    @media (min-width: 930px) {
      left: -200px;
    }

    @media (min-width: 1080px) {
      left: -300px;
    }

    @media (min-width: 1250px) {
      left: -200px;
    }

    @media (min-width: 1600px) {
      left: 0;
    }
  }

  &::after {
    content: '';

    width: 204px;
    height: 608px;
    top: 65%;

    @media (min-width: 992px) {
      width: 242px;
      height: 731px;
    }

    @media (min-width: 1080px) {
      top: 80%;
    }

    @media (min-width: 1200px) {
      width: 237px;
      height: 697px;
      top: 93%;
    }

    @media (min-width: 1600px) {
      width: 471px;
      height: 1415px;
      top: 40%;
    }

    position: absolute;
    background: url('./img/designs/curva02.svg') no-repeat;

    @include only-md-screen(block);

    right: 0;
  }

  .services-container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    margin-top: -67px;

    @media (min-width: 725px) {
      margin-top: -117px;
    }

    @media (min-width: 725px) {
      margin-top: -174px;
    }

    @media (min-width: 900px) {
      margin-top: -252px;
    }

    @media (min-width: 1080px) {
      margin-top: 50px;
      padding-top: 290px;
    }

    .boxes-collumns-wrapper {
      display: flex;
      flex-direction: column-reverse;

      @media (min-width: 1080px) {
        flex-direction: row;
        width: calc(
          #{$service-box-width * 2} * 4 + #{$services-box-padding * 4}
        );
      }

      .line {
        display: flex;
        flex-wrap: wrap;

        margin-top: 1px;

        width: calc((#{$service-box-width * 1.5} * 2));

        @media (min-width: 430px) {
          width: calc((#{$service-box-width * 1.8} * 2));
        }

        @media (min-width: 500px) {
          width: calc((#{$service-box-width * 2} * 2));
        }

        @media (min-width: 760px) and (max-width: 1079px) {
          width: calc((#{$service-box-width * 2} * 3));
        }

        @media (min-width: 1080px) {
          width: calc((#{$service-box-width * 2} * 2));

          flex-wrap: nowrap;
          align-items: flex-end;
        }

        &.all-services-list {
          justify-content: center;

          .list-wrapper {
            display: flex;
            flex-wrap: inherit;

            @media (min-width: 430px) {
              width: calc(#{$service-box-width * 1.8} * 2);
            }

            @media (min-width: 779px) {
              width: calc(#{$service-box-width * 2} * 2);
            }
          }
        }
      }

      .first-boxes-collumn {
        position: relative;

        @media (min-width: 1080px) {
          top: -156px;
        }

        .logo-box {
          width: calc(#{$service-box-width * 2});
          height: calc(#{$service-box-width * 2} * 2 + 70px);

          .logo {
            width: calc(#{$service-box-width * 2} * 2 + 166px);
            height: calc(#{$service-box-width * 2} + 91px);

            @include lingo-logo(#eeeae5);

            transform: rotate(-90deg);
            transform-origin: bottom;
            text-indent: -9999px;
            overflow: hidden;
            top: -90px;
            position: relative;
            z-index: -1;
          }
        }

        .ponto-virgula {
          flex-grow: 1;
          align-items: flex-end;
          justify-content: center;

          &:after {
            content: '';
            display: block;
            width: 59px;
            height: 227px;
            background: url('./img/designs/pontovirgula.svg') no-repeat;
            margin-bottom: -30px;
          }
        }

        .quote {
          width: calc(#{$service-box-width * 2} * 2 + 200px);
          position: absolute;
          margin-left: -100px;
          margin-top: 50px;
          font-weight: bold;
          color: #000;
          font-style: italic;
        }
      }

      .second-boxes-collumn {
        .alfabet-box {
          width: calc(#{$service-box-width * 2} * 2);

          img {
            width: calc(#{$service-box-width * 2} + 15px);
          }
        }

        .box-gradient {
          width: calc(#{$service-box-width * 2.5});
          height: calc(#{$service-box-width * 3.5});
          padding-top: 41px;
          padding-left: 24px;
          margin: 0 auto;

          @media (min-width: 760px) and (max-width: 1079px) {
            width: calc(#{$service-box-width * 5});
            height: calc(#{$service-box-width * 3});
          }

          @media (min-width: 1080px) {
            width: calc(#{$service-box-width * 2} * 2);
            height: calc(#{$service-box-width * 2} * 2);
            padding-top: 45px;
            padding-left: 45px;
            margin: initial;
          }

          background: url('./img/designs/box-gradient.svg');
          background-size: cover;

          color: #fff;

          -webkit-box-shadow: 11px 23px 35px -1px rgba(0, 0, 0, 0.5);
          -moz-box-shadow: 11px 23px 35px -1px rgba(0, 0, 0, 0.5);
          box-shadow: 11px 23px 35px -1px rgba(0, 0, 0, 0.5);

          z-index: 1;

          h1.section-title {
            font-size: 41px;
            line-height: 37px;

            @media (min-width: 760px) {
              font-size: 58px;
              line-height: 53px;
            }
          }

          p.section-description {
            padding-right: 37px;
            font-size: 14pt;

            @media (min-width: 760px) {
              font-size: 16pt;
            }
          }
        }

        .paragrafo-icon {
          width: #{$service-box-width * 2};
          height: #{$service-box-width * 2};

          &::after {
            content: '';
            display: block;
            height: #{$service-box-width * 2};
            background: url('./img/designs/paragrafo.svg') no-repeat;
            background-size: contain;
            position: relative;
            top: 23%;
            left: 70%;
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

        min-width: calc(#{$service-box-width * 1.5} - 1px);
        min-height: calc(#{$service-box-width * 1.5} - 1px);

        @media (min-width: 430px) {
          min-width: calc(#{$service-box-width * 1.8} - 1px);
          min-height: calc(#{$service-box-width * 1.8} - 1px);
        }

        @media (min-width: 779px) {
          min-width: calc(#{$service-box-width * 2} - 1px);
          min-height: calc(#{$service-box-width * 2} - 1px);
        }

        &.big {
          width: #{$service-box-big-width * 2};
          height: #{$service-box-big-width * 2};
        }

        background-size: contain;

        &.revisao {
          background-image: url('./img/box-images/revisao.jpg');
          background-repeat: no-repeat;
        }

        &.media {
          background-image: url('./img/box-images/media.jpg');
          background-repeat: no-repeat;
        }

        &.interpretacao {
          background-image: url('./img/box-images/interpretacao.jpg');
          background-repeat: no-repeat;
        }

        &.traducoes {
          background-image: url('./img/box-images/traducoes.jpg');
          background-repeat: no-repeat;
        }

        &.transcricao {
          background-image: url('./img/box-images/transcricao.jpg');
          background-repeat: no-repeat;
        }

        .service-info {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          justify-content: space-evenly;
          background: rgba($color: #fff, $alpha: 0.8);
          opacity: 0;
          -webkit-transition: opacity 0.5s;
          transition-property: opacity 0.5s;

          .service-icon {
            text-align: center;

            @media (min-width: 1080px) {
              padding: 20px;
            }

            img.icon {
              width: 76px;

              @media (min-width: 430px) {
                width: 101px;
              }

              &.big {
                width: 130px;
              }
            }
          }

          h4.service-title {
            text-align: center;
            color: black;

            font-size: 15px;

            &.en-US {
              font-size: 13px;
            }

            @media (min-width: 430px) {
              font-size: 20px;
              padding: 5px;

              &.en-US {
                font-size: 16px;
              }
            }

            &.big {
              font-size: 40px;

              &.en-US {
                font-size: 36px;
              }
            }
          }
        }

        outline: none;

        &.active {
          .service-info {
            -webkit-transition: opacity 1s;
            transition-property: opacity 1s;
            opacity: 0.9;
          }
        }
      }
    }
  }
}

// Retina 1024px (Ipad Pro)
// @media only screen and (-webkit-min-device-pixel-ratio: 2) and (width: 1024px),
//   only screen and (min--moz-device-pixel-ratio: 2) and (width: 1024px),
//   only screen and (-o-min-device-pixel-ratio: 2/1) and (width: 1024px),
//   only screen and (min-device-pixel-ratio: 2) and (width: 1024px),
//   only screen and (min-resolution: 192dpi) and (width: 1024px),
//   only screen and (min-resolution: 2dppx) and (width: 1024px) {
//   .line {
//     width: calc((#{$service-box-width * 3} * 2.7)) !important;
//   }

//   .all-services-list {
//     .list-wrapper {
//       width: calc(#{$service-box-width * 2.7} * 2) !important;
//     }
//   }

//   .box-gradient {
//     width: calc(#{$service-box-width * 7}) !important;
//     height: calc(#{$service-box-width * 4.3}) !important;
//     padding-left: 44px !important;

//     h1.section-title {
//       font-size: 88px !important;
//       line-height: 83px !important;
//     }

//     p.section-description {
//       font-size: 26px !important;
//     }
//   }

//   .service-box {
//     min-width: calc(#{$service-box-width * 2.7} - 1px) !important;
//     min-height: calc(#{$service-box-width * 2.7} - 1px) !important;

//     .service-icon {
//       img.icon {
//         width: 150px !important;
//       }
//     }

//     h4.service-title {
//       font-size: 27px !important;
//       padding: 5px !important;

//       &.en-US {
//         font-size: 27px !important;
//       }
//     }
//   }
// }
</style>
