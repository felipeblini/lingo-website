<template>
  <b-navbar toggleable="custom" type="light" variant="">
    <div class="container">
      <b-navbar-brand href="#top">
        <span class="d-block" style="margin-top: -20px;">LINGO</span>
        <!-- <img src="https://placekitten.com/g/30/30" alt="Kitten"> -->
      </b-navbar-brand>

      <div class="only-mobile switch-lang-mobile">
        Idioma
      </div>

      <b-navbar-toggle target="nav-collapse">
        <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Empresa</b-nav-item>
          <b-nav-item href="#">Quem somos</b-nav-item>
          <b-nav-item href="#">Serviços</b-nav-item>
          <b-nav-item href="#">Depoimentos</b-nav-item>
          <b-nav-item href="#">Parceiros</b-nav-item>
          <b-nav-item href="#">Contato</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="mr-3 only-desktop">Idioma</div>
          <div class="whatsapp-component">
            <div class="circle">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </div>
            <div class="rectangle"></div>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<style lang="scss" scoped>
.navbar {
  z-index: 2;

  .container {
    padding-top: 34px;

    @media (min-width: 1200px) {
      align-items: flex-end;
      flex-wrap: nowrap;
    }

    .navbar-brand {
      margin-right: 79px;
      width: 146px;
      height: 51px;
      font-size: 47px;
      border: solid;
    }

    .switch-lang-mobile {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
    }

    // .whatsapp-component {
    //   display: flex;
    //   .circle {
    //     width: 54px;
    //     height: 54px;
    //     background: #3da773;
    //     border-radius: 50%;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     color: #fff;
    //     font-size: 30px;
    //     -webkit-box-shadow: -9px 11px 28px -12px rgba(0, 0, 0, 0.65);
    //     -moz-box-shadow: -9px 11px 28px -12px rgba(0, 0, 0, 0.65);
    //     box-shadow: -9px 11px 28px -12px rgba(0, 0, 0, 0.65);

    //     svg {
    //       margin-right: -3px;
    //     }
    //   }

    //   .rectangle {
    //     width: 54px;
    //     height: 54px;
    //     background: #3da773;
    //     border-radius: 50%;
    //   }
    // }

    .navbar-toggler {
      border: none;
      outline: none;
    }

    .navbar-collapse {
      @media (max-width: 1200px) {
        position: absolute;
        top: 100px;
        width: 300px;
        border: solid;
        background: #fff;
        right: 72px;
      }
    }

    .navbar-nav {
      align-items: flex-end;

      @media (min-width: 1200px) {
        align-items: center;
      }
    }
  }

  @media (min-width: 1200px) {
    &.navbar-expand-custom {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    &.navbar-expand-custom .navbar-nav {
      flex-direction: row;
    }
    &.navbar-expand-custom .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    &.navbar-expand-custom .navbar-collapse {
      display: flex !important;
    }
    &.navbar-expand-custom .navbar-toggler {
      display: none;
    }
  }
}
</style>
