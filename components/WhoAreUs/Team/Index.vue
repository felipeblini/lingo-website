<template>
  <div class="lingo-team row mt-3">
    <div class="col member">
      <div class="d-flex align-items-center member-header">
        <img class="member-flag" src="./img/flag-eng.png" alt="" />
        <h4 class="member-name black">Jan Onoszco</h4>
      </div>
      <p class="member-minibio">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit labore expedita
        ea ullam saepe
      </p>
    </div>
    <div class="col member">
      <div class="d-flex align-items-center member-header">
        <img class="member-flag" src="./img/flag-br.png" alt="" />
        <h4 class="member-name black">Marcos Godoy</h4>
      </div>
      <p class="member-minibio">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit labore expedita
        ea ullam saepe
      </p>
    </div>
    <div class="col member">
      <div class="d-flex align-items-center member-header">
        <img class="member-flag" src="./img/flag-br.png" alt="" />
        <h4 class="member-name black">Fernanda Garcia</h4>
      </div>
      <p class="member-minibio">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit labore expedita
        ea ullam saepe
      </p>
    </div>
  </div>
</template>

<script>
export default {}
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

  @media (min-width: 576px) {
    padding-top: 38%;
  }

  @media (min-width: 1200px) {
    padding-top: 49%;
    padding-right: 77px;
    padding-left: 77px;
  }

  @media (min-width: 1500px) {
    padding-top: 54%;
  }

  .member {
    margin-bottom: 19px;
    max-width: 255px;

    @media (min-width: 442px) and (max-width: 554px) {
      max-width: 224px;
    }

    @media (min-width: 992px) {
      max-width: 315px;
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
      font-size: 14px;
    }
  }
}
</style>
