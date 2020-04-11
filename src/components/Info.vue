<template>
  <div class="info" id="info">
    <h2 id="hidden">Hidden</h2>
    <h2>Information</h2>

    <div class="row">
      <div class="col-sm-2"></div>
      <div class="info-text col-sm-8">
        Da wir zur Zeit alle aufgrund der COVID-19-Krise in unserem Alltag eingeschränkt sind, wurde ein Konzept von Studenten des Umwelt-Campus in Birkenfeld erstellt,
        um gelernte Inhalte im Rahmen einer COVID-19-Lösung sinnvoll anzuwenden. Das Projekt "Locals in Birkenfeld" unterstützt die lokalen Einzelhändler bzw. Freiberufler, indem
        Ihnen eine Plattform zur Repräsentation geboten wird. Sie können Ihre Informationen selbst über ein Formular auf unserer Website eintragen, wodurch Ihr Unternehmen in
        unsere Liste aufgenommen wird. Dadurch wird zudem gegen Falschinformationen von Google gearbeitet, da Sie selbst jederzeit die Kontrolle über korrekte Daten besitzen.
        Falls Sie Interesse an unserer kostenlosen Plattform haben, bitten Wir Sie, sich
        <a
          href="/eintrag-hinzufügen"
        >hier</a> einzutragen.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.info {
  background-color: #f7f7f7;
  padding-top: 40px;
  padding-bottom: 40px;
  filter: blur(0px);
  -webkit-filter: blur(0px);
}
.info-text {
  text-align: left;
}
#hidden {
  visibility: hidden;
}
.info-text a {
  color: #dc3545 !important;
}
@media only screen and (max-width: 900px) {
  .info-text {
    margin: 0 10%;
  }
}
</style>
