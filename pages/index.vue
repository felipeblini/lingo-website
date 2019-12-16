<template>
  <div>
    <div class="about-group-wrapper">
      <LingoHero @onHeightCalculated="onHeroHeightCalculated" />
      <LingoMiniBio :hero-height="heroHeight" />
      <LingoAbout :hero-height="heroHeight" />
    </div>

    <LingoServices />
    <LingoTestemonials />

    <div class="container partners-container">
      <div class="row border">
        <div class="col-12 col-lg-8 offset-lg-2 border">
          <div class="partners-wrapper">
            <div class="brackets">{</div>
            <div class="content">
              <h1 class="yellow">Parceiros</h1>
              <div class="partners-slider-wrapper">
                <button class="partners-navigator pn-left">left</button>
                <ul class="partners-list">
                  <div class="items-wrapper">
                    <li
                      class="partner-item"
                      v-for="(partner, index) in list"
                      :key="index"
                      :id="`p-${index}`"
                    >
                      {{ partner.logo }}
                    </li>
                  </div>
                </ul>
                <button class="partners-navigator pn-right">right</button>
              </div>
            </div>
            <div class="brackets">}</div>
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
import LingoServices from '~/components/OurServices'
import LingoTestemonials from '~/components/Testemonials'

export default {
  components: {
    LingoHero,
    LingoMiniBio,
    LingoAbout,
    LingoServices,
    LingoTestemonials
  },
  data() {
    return {
      heroHeight: 0,
      list: [
        { link: '', logo: '1' },
        { link: '', logo: '2' },
        { link: '', logo: '3' },
        { link: '', logo: '4' }
      ]
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
.partners-container {
  padding-top: 73px;

  @media (min-width: 768px) {
    padding-top: 100px;
  }

  .partners-wrapper {
    border: solid 3px red;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > div {
      &.brackets {
        width: 50px;
        height: 138px;

        @media (min-width: 768px) {
          width: 62px;
          height: 171px;
        }

        background-image: url('../assets/partners/img/brackets.svg');
        background-repeat: no-repeat;
        background-size: contain;
        text-indent: -9999px;
        overflow: hidden;

        &:nth-last-child(1) {
          -moz-transform: scaleX(-1);
          -o-transform: scaleX(-1);
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
          filter: FlipH;
          -ms-filter: 'FlipH';
        }
      }

      &.content {
        height: 168px;
        border-radius: 44px;

        @media (min-width: 768px) {
          height: 217px;
          border-radius: 60px;
        }

        @media (min-width: 992px) and (max-width: 1200px) {
          height: 190px;
        }

        margin: 0 20px;

        border: solid 1px #fafafa;

        -webkit-box-shadow: 2px 18px 56px -1px rgba(0, 0, 0, 0.37);
        -moz-box-shadow: 2px 18px 56px -1px rgba(0, 0, 0, 0.37);
        box-shadow: 2px 18px 56px -1px rgba(0, 0, 0, 0.37);

        flex-grow: 1;
        padding: 10px;
        text-align: center;

        .partners-slider-wrapper {
          border: solid;
          display: flex;
          align-items: center;

          ul.partners-list {
            flex-grow: 1;
            margin: 0;
            padding: 0;
            list-style-type: none;
            border: solid 2px green;

            .items-wrapper {
              width: 100%;
              display: flex;
              justify-content: space-around;
            }

            li.partner-item {
              width: 100px;
              height: 119px;
              border: solid;
            }
          }

          button.partners-navigator {
            background-color: transparent;
            background-repeat: no-repeat;
            background-size: cover;
            width: 30px;
            height: 30px;
            outline: none;
            text-indent: -999px;
            overflow: hidden;
            border: none;

            &.pn-left {
              background-image: url('../assets/partners/img/left-arrow.svg');
            }

            &.pn-right {
              background-image: url('../assets/partners/img/right-arrow.svg');
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
