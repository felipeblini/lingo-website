<template>
  <div class="lingo-team row mt-3">
    <div class="col offset-lg-1 member">
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
  justify-content: center;

  .member {
    max-width: 220px;
    border: solid;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      margin-right: 10px;
    }

    @media (min-width: 992px) {
      max-width: initial;
    }

    .member-header {
      .member-flag {
        width: 50px;
        margin-right: 5px;

        @media (min-width: 992px) {
          width: 81px;
          margin-right: 10px;
        }
      }

      .member-name {
        display: flex;
        align-items: center;

        height: 50px;
        font-size: 23px;
        line-height: 21px;

        @media (min-width: 992px) {
          height: 81px;
          font-size: 36px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
