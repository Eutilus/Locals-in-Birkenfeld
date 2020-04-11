<template>
  <div class="home">
    <div id="image"></div>
    <div class="container-fluid">
      <img class="logo img-fluid" src="../assets/test.png" />
      <!-- <h1 class="col-sm-12">Locals in Birkenfeld</h1>
      <h3 class="col-sm-12">Unterstützen Sie Ihre lokalen Unternehmen</h3>-->
      <b-button variant="danger" class="info-btn" href="#info">Mehr erfahren</b-button>
    </div>
    <Info />
    <Sponsoren />
  </div>
</template>

<script>
import axios from "axios";
import Sponsoren from "@/components/Sponsoren";
import Info from "@/components/Info";
export default {
  name: "Home",
  components: {
    Sponsoren,
    Info
  }
};
</script>

<style lang="scss">
.home {
  font-family: Raleway, sans-serif;

  .container-fluid {
    .logo {
      position: absolute;
      top: 25%;
      left: 25%;
      width: 1000px;
      height: auto;
    }
    @media only screen and (max-width: 1600px) {
      .logo {
        left: 20%;
        margin: 0 auto;
      }
    }
    @media only screen and (max-width: 1200px) {
      .logo {
        left: 10%;
        margin: 0 auto;
      }
    }
    @media only screen and (max-width: 900px) {
      .logo {
        top: 25%;
        left: initial;
        margin: 0 auto;
      }
    }
    h1 {
      top: 16%;
      font-size: 80px !important;
    }

    h3 {
      top: 27%;
      font-size: 36px !important;
    }

    h1,
    h3 {
      font-family: Roboto, Raleway, sans-serif !important;
      position: absolute;
      color: #dc3545;
      font-weight: 400;
    }

    .info-btn {
      font-family: Raleway, sans-serif !important;
      position: absolute !important;
      top: 60% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      -ms-transform: translate(-50%, -100%) !important;
      color: white !important;
      font-size: 30px !important;
      padding: 40px 50px !important;
      border: none !important;
      text-transform: uppercase !important;
      letter-spacing: 2.5px !important;
      font-weight: 500 !important;
      border-radius: 80px !important;
      box-shadow: 5px 8px 15px rgba(0, 0, 0, 0.1) !important;
      transition: all 0.3s ease 0s !important;
      cursor: pointer;
      outline: none !important;
    }

    @media only screen and (max-width: 900px) {
      h3 {
        top: 50%;
      }
      .info-btn {
        position: absolute;
        top: 80% !important;
        font-size: 15px !important;
      }
    }
  }

  #image {
    background-image: url("../assets/birkenfeld.jpg");
    height: 900px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    filter: blur(4px);
    -webkit-filter: blur(4px);
  }
}
</style>
