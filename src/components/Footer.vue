<template>
  <div>
    <div class="footer row">
      <div class="info-footer">
        <h4>Information</h4>
        <div>
          Da wir zur Zeit alle aufgrund der COVID-19-Krise in unserem Alltag eingeschränkt sind, wurde ein Konzept von Studenten des Umwelt-Campus in Birkenfeld erstellt,
          um gelernte Inhalte im Rahmen einer COVID-19-Lösung sinnvoll anzuwenden. Das Projekt "Locals in Birkenfeld" unterstützt die lokalen Einzelhändler bzw. Freiberufler, indem
          Ihnen eine Plattform zur Repräsentation geboten wird. Sie können Ihre Informationen selbst über ein Formular auf unserer Website eintragen, wodurch Ihr Unternehmen in
          unsere Liste aufgenommen wird. Dadurch wird zudem gegen Falschinformationen von Google gearbeitet, da Sie selbst jederzeit die Kontrolle über korrekte Daten besitzen.
          Falls Sie Interesse an unserer kostenlosen Plattform haben, bitten Wir Sie, sich
          <a
            href="/eintrag-hinzufügen"
            class="link"
          >hier</a> einzutragen.
        </div>
      </div>
      <div class="contact-footer">
        <h4>Kontakt</h4>
        <span>
          <b-icon icon="envelope-fill"></b-icon>
        </span>
        <span>s17ce7@umwelt-campus.de</span>
        <br />
        <br />

        <div class="logo-footer">
          <img class="logo" src="../assets/bir-logo.png" />
          <span>Locals in Birkenfeld</span>
        </div>
      </div>
    </div>
    <div class="datenschutz">
      <div>
        <router-link to="/datenschutz">Datenschutz</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
.footer {
  background-color: #242f3e;
  color: #ccc;
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: "Muli", Helvetica, Arial, sans-serif;
  h4 {
    font-weight: bold;
  }
  p {
    font-weight: 100;
  }
  .minus-margin {
    margin-top: -15px;
  }
  .info-footer {
    text-align: left;
    margin-left: 15%;
    width: 30%;
  }
  .contact-footer {
    text-align: left;
    margin-left: 15%;
    width: 30%;
  }
  .b-icon {
    margin-right: 5px;
  }
}
.datenschutz {
  padding: 10px 0;
  background-color: #1d2632;
  a {
    color: #ccc;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }
}
.link {
  color: #dc3545 !important;
}
.logo-footer span {
  margin-left: 10px;
  font-size: 1.25rem;
}
</style>
