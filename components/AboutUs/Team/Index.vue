<template>
  <div class="lingo-team row mt-3">
    <div class="col member" v-for="(member, index) in sortedList" :key="index">
      <div class="member-photo">
        <img class="photo-border" src="./img/circulo.svg" alt="" />
        <img
          class="photo"
          :src="
            require(`./img/${member.title.rendered
              .toLowerCase()
              .replace(' ', '-')}.jpg`)
          "
        />
      </div>
      <div class="d-flex align-items-center member-header">
        <img
          class="member-flag"
          :src="
            require(`./img/flag-${member.acf.member_data.nacionalidade[0]}.png`)
          "
          alt=""
        />
        <h4 class="member-name black">
          {{ member.title.rendered }}
        </h4>
      </div>
      <p class="member-minibio">
        {{ member.acf.member_data[`descricao_${$store.state.language}`] }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    members: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    sortedList() {
      const list = [...this.members]
      return list.sort(
        (a, b) => a.acf.member_data.ordem - b.acf.member_data.ordem
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.lingo-team {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;

  @media (min-width: 442px) {
    flex-direction: row;
  }

  @media (min-width: 470px) {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 571px) {
    padding-top: 68%;
  }

  @media (min-width: 767px) {
    padding-top: 58%;
  }

  @media (min-width: 992px) {
    padding-top: 40%;
  }

  @media (min-width: 1200px) {
    padding-top: 35%;
    padding-right: 77px;
    padding-left: 77px;
  }

  @media (min-width: 1600px) {
    padding-top: 40%;
  }

  @media (min-width: 1800px) {
    padding-top: 43%;
  }

  @media (min-width: 2500px) {
    padding-top: 72%;
  }

  @media (min-width: 3000px) {
    padding-top: 82%;
  }

  @media (min-width: 3500px) {
    padding-top: 92%;
  }

  .member {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 19px;
    max-width: 255px;

    @media (min-width: 442px) and (max-width: 554px) {
      max-width: 224px;
    }

    @media (min-width: 992px) {
      max-width: 315px;
    }

    .member-photo {
      width: 156px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: 1080px) {
        width: 222px;
      }

      img.photo-border {
        width: 100%;
        height: 100%;
        z-index: 2;
      }

      img.photo {
        width: 146px;
        clip-path: circle(49% at center);
        margin-top: -2px;
        position: absolute;
        z-index: 1;

        @media (min-width: 1080px) {
          width: 212px;
        }
      }
    }

    .member-header {
      .member-flag {
        width: 81px;

        @media (min-width: 571px) and (max-width: 767px) {
          width: 47px;
        }
      }

      .member-name {
        display: flex;
        align-items: center;

        height: 50px;
        max-width: 180px;
        font-size: 23px;
        line-height: 21px;

        @media (min-width: 571px) {
          height: 39px;
          font-size: 18px;
          line-height: 16px;
        }

        @media (min-width: 768px) {
          height: 73px;
          font-size: 26px;
          line-height: 24px;
        }

        @media (min-width: 992px) {
          height: 81px;
          font-size: 36px;
          line-height: 30px;
        }
      }
    }

    .member-minibio {
      font-size: 14pt;

      @media (min-width: 1024px) {
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          font-size: 18pt;
        }
      }
    }
  }
}
</style>
