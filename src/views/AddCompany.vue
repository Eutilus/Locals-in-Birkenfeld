<template>
  <div class="add-company">
    <h1>Eintrag hinzufügen</h1>
    <br />
    <div class="col-sm-0"></div>
    <div class="form col-sm-12">
      <br />
      <b-form>
        <div class="box">
          <font-awesome-icon icon="info-circle" class="icons" />
          <h4>Allgemeine Informationen</h4>
          <hr />
          <b-form-group label="Name Ihres Unternehmens *" class="box-margin">
            <b-form-input required placeholder="Name Ihres Unternehmens" v-model="name"></b-form-input>
          </b-form-group>

          <b-form-group label="Kategorie *">
            <b-form-select :options="options" required v-model="kategorie"></b-form-select>
          </b-form-group>

          <b-form-group label="Beschreibung">
            <b-form-textarea v-model="desc"></b-form-textarea>
          </b-form-group>

          <b-form-group label="Sondermitteilung">
            <b-form-textarea v-model="news"></b-form-textarea>
          </b-form-group>

          <b-form-group label="Ist Ihr Geschäft zur aktuellen Saison geöffnet?">
            <b-form-checkbox-group v-model="status">
              <b-form-checkbox value="geöffnet">Ja</b-form-checkbox>
              <b-form-checkbox value="geschlossen">Nein</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </div>

        <br />
        <br />
        <div class="box">
          <font-awesome-icon icon="info-circle" class="icons" />
          <h4>Informationen</h4>

          <hr />

          <b-form-group label="Email *" class="box-margin">
            <b-form-input type="email" required placeholder="ihre-adresse@email.de" v-model="email"></b-form-input>
          </b-form-group>

          <b-form-group label="Telefonnummer">
            <b-form-input type="number" placeholder="z.B. 0049 0157 3256 3290" v-model="tel"></b-form-input>
          </b-form-group>
        </div>
        <br />
        <br />
        <div class="box">
          <font-awesome-icon icon="map-marker-alt" class="icons" />
          <h4>Adresse</h4>
          <hr />

          <b-form-group label="Straße" class="box-margin">
            <b-form-input type="text" placeholder="z.B Bahnhofstraße" v-model="straße"></b-form-input>
          </b-form-group>

          <b-form-group label="Hausnummer">
            <b-form-input type="number" placeholder="z.B. 10" v-model="hnummer"></b-form-input>
          </b-form-group>

          <b-form-group label="PLZ">
            <b-form-input type="number" placeholder="z.B. 55765" v-model="plz"></b-form-input>
          </b-form-group>

          <b-form-group label="Stadt">
            <b-form-input type="text" placeholder="z.B. Birkenfeld" v-model="stadt"></b-form-input>
          </b-form-group>
        </div>
        <br />
        <br />

        <div class="box times">
          <font-awesome-icon icon="clock" class="icons" />
          <h4>Öffnungszeiten</h4>
          <hr />

          <label class="col-sm-2">Montag</label>
          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="montag_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="montag_bis"></b-form-input>
          </b-form-group>
          <span>/</span>

          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="montagM_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="montagM_bis"></b-form-input>
          </b-form-group>
          <br />

          <label class="col-sm-2">Dienstag</label>
          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="dienstag_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="dienstag_bis"></b-form-input>
          </b-form-group>
          <span>/</span>

          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="dienstagM_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="dienstagM_bis"></b-form-input>
          </b-form-group>
          <br />

          <label class="col-sm-2">Mittwoch</label>
          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="mittwoch_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="mittwoch_bis"></b-form-input>
          </b-form-group>
          <span>/</span>

          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="mittwochM_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="mittwochM_bis"></b-form-input>
          </b-form-group>
          <br />

          <label class="col-sm-2">Donnerstag</label>
          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="donnerstag_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="donnerstag_bis"></b-form-input>
          </b-form-group>
          <span>/</span>

          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="donnerstagM_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="donnerstagM_bis"></b-form-input>
          </b-form-group>
          <br />

          <label class="col-sm-2">Freitag</label>
          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="freitag_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="freitag_bis"></b-form-input>
          </b-form-group>
          <span>/</span>

          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="freitagM_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="freitagM_bis"></b-form-input>
          </b-form-group>
          <br />

          <label class="col-sm-2">Samstag</label>
          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="samstag_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="samstag_bis"></b-form-input>
          </b-form-group>
          <span>/</span>

          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="samstagM_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="samstagM_bis"></b-form-input>
          </b-form-group>
          <br />

          <label class="col-sm-2">Sonntag</label>
          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="sonntag_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="sonntag_bis"></b-form-input>
          </b-form-group>
          <span>/</span>

          <b-form-group label="von">
            <b-form-input type="text" placeholder="z.B. 09:00" v-model="sonntagM_von"></b-form-input>
          </b-form-group>

          <b-form-group label="bis">
            <b-form-input type="text" placeholder="z.B. 12:00" v-model="sonntagM_bis"></b-form-input>
          </b-form-group>
          <br />
        </div>

        <br />
        <b-button
          type="button"
          variant="danger"
          class="submit-form"
          @click="
            addToAPI();
            showAlert();
          "
        >Angaben bestätigen</b-button>
        <br />
        <br />

        <div v-if="!isHidden">
          <b-alert
            :show="dismissCountDown"
            dismissible
            variant="success"
            @dismissed="dismissCountDown = 0"
          >Ihr Unternehmen wird in Kürze zu unserer Liste hinzugefügt!</b-alert>
        </div>
      </b-form>
    </div>
    <div class="col-sm-3"></div>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddCompany",
  data() {
    return {
      name: "",
      email: "",
      tel: "",
      kategorie: "",
      plz: "",
      stadt: "",
      straße: "",
      hnummer: "",
      montag_von: "",
      montag_bis: "",
      montagM_von: "",
      montagM_bis: "",
      dienstag_von: "",
      dienstag_bis: "",
      dienstagM_von: "",
      dienstagM_bis: "",
      mittwoch_von: "",
      mittwoch_bis: "",
      mittwochM_von: "",
      mittwochM_bis: "",
      donnerstag_von: "",
      donnerstag_bis: "",
      donnerstagM_von: "",
      donnerstagM_bis: "",
      freitag_von: "",
      freitag_bis: "",
      freitagM_von: "",
      freitagM_bis: "",
      samstag_von: "",
      samstag_bis: "",
      samstagM_von: "",
      samstagM_bis: "",
      sonntag_von: "",
      sonntag_bis: "",
      sonntagM_von: "",
      sonntagM_bis: "",
      desc: "",
      news: "",
      status: "",
      isHidden: false,
      dismissSecs: 15,
      dismissCountDown: 0,
      options: [
        { value: null, text: "Kategorie" },
        {
          label: "Auto",
          options: [
            { value: "Autohaus", text: "Autohaus" },
            { value: "Autovermietung", text: "Autovermietung" },
            { value: "KFZ-Werkstatt", text: "KFZ-Werkstatt" }
          ]
        },
        {
          label: "Bildung",
          options: [
            { value: "Schulung", text: "Schulung" },
            { value: "Training", text: "Training" },
            { value: "Nachhilfe", text: "Nachhilfe" },
            { value: "Musikschule", text: "Musikschule" }
          ]
        },
        {
          label: "Lebensmittel",
          options: [
            { value: "Lebensmittel", text: "Lebensmittel" },
            { value: "Ernährung", text: "Ernährung" },
            { value: "Agrar", text: "Agrar" }
          ]
        },
        {
          label: "Gastronomie",
          options: [{ value: "Restaurant", text: "Restaurant" }]
        },
        {
          label: "Hygiene und Drogerie",
          options: [
            { value: "Drogerie", text: "Drogerie" },
            { value: "Kosmetik", text: "Kosmetik" }
          ]
        },
        {
          label: "Schreibwaren",
          options: [{ value: "Buch und Papier", text: "Buch und Papier" }]
        },
        {
          label: "Sonstiges",
          options: [{ value: "Sonstiges", text: "Sonstiges" }]
        }
      ]
    };
  },
  methods: {
    addToAPI() {
      let newCompany = {
        text: this.name,
        email: this.email,
        tel: this.tel,
        kategorie: this.kategorie,
        plz: this.plz,
        stadt: this.stadt,
        straße: this.straße,
        hnummer: this.hnummer,
        montag_von: this.montag_von,
        montag_bis: this.montag_bis,
        montagM_von: this.montagM_von,
        montagM_bis: this.montagM_bis,
        dienstag_von: this.dienstag_von,
        dienstag_bis: this.dienstag_bis,
        dienstagM_von: this.dienstagM_von,
        dienstagM_bis: this.dienstagM_bis,
        mittwoch_von: this.mittwoch_von,
        mittwoch_bis: this.mittwoch_bis,
        mittwochM_von: this.mittwochM_von,
        mittwochM_bis: this.mittwochM_bis,
        donnerstag_von: this.donnerstag_von,
        donnerstag_bis: this.donnerstag_bis,
        donnerstagM_von: this.donnerstagM_von,
        donnerstagM_bis: this.donnerstagM_bis,
        freitag_von: this.freitag_von,
        freitag_bis: this.freitag_bis,
        freitagM_von: this.freitagM_von,
        freitagM_bis: this.freitagM_bis,
        samstag_von: this.samstag_von,
        samstag_bis: this.samstag_bis,
        samstagM_von: this.samstagM_von,
        samstagM_bis: this.samstagM_bis,
        sonntag_von: this.sonntag_von,
        sonntag_bis: this.sonntag_bis,
        sonntagM_von: this.sonntagM_von,
        sonntagM_bis: this.sonntagM_bis,
        desc: this.desc,
        news: this.news,
        status: this.status
      };
      axios
        .post("http://localhost:5000/companies", newCompany)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.warn("ERROR");
        });
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>

<style lang="scss">
.add-company {
  padding-top: 5%;
  font-family: Raleway, sans-serif;
}

@media only screen and (max-width: 1200px) {
  .add-company {
    padding-top: 5%;
  }
}

@media only screen and (max-width: 900px) {
  .add-company {
    padding-top: 15%;
    .form-control {
      padding-left: 10px !important;
    }
  }
}

.form {
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-align: left;

  label,
  button {
    text-align: left;
  }
  input,
  select {
    background: #fbfbfb;
  }
  .box {
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.493);
    padding: 20px;
    background-color: #204c78 !important;
  }
  .box-margin {
    margin-top: 20px;
  }
  h4 {
    display: inline-block;
    color: #fff;
  }
  .icons {
    margin-right: 10px;
    color: #fff;
  }
  .times fieldset {
    display: inline-block;
    margin-right: 50px;
  }

  span {
    margin: 0 40px 0 -10px;
    font-size: 40px;
  }
  .submit-form {
    margin-left: 15%;
  }
}
</style>
