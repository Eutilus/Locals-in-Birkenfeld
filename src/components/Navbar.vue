<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-brand href="/">
      <img class="logo" src="../assets/bir-logo.png" />
      <span class="nav-header">Locals in Birkenfeld</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Startseite</b-nav-item>
        <b-nav-item href="/übersicht">Übersicht</b-nav-item>
        <b-nav-item href="/kontakt">Kontakt</b-nav-item>
        <b-button variant="danger" class="add" href="/eintrag-hinzufügen">Eintrag hinzufügen</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
.navbar {
  position: fixed !important;
  width: 100%;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.493);
  justify-content: center !important;
}

nav.navbar.navbar-dark.bg-secondary.navbar-expand-lg {
  background-color: #204c78 !important;
}

nav a {
  color: #fff !important;
}

.navbar-toggler {
  margin-left: auto;
  order: 2;
}

.logo {
  width: auto;
  height: 45px;
  color: #fff;
}

.add {
  margin-left: 10px;
}

.nav-header {
  font-family: Raleway, sans-serif;
  margin-left: 10px;
}
</style>
