<template>
  <div class="übersicht">
    <h1>Übersicht</h1>
    <br />
    <div class="box">
      <h4>Unternehmen suchen</h4>
      <br />
      <b-form inline>
        <i class="fas fa-street-view filter-icons"></i>
        <b-form-input
          id="input-with-list"
          class="col-sm-4"
          placeholder="Suche deinen Einzelhändler"
          v-model="search"
          list="input-list"
        ></b-form-input>

        <i class="fas fa-layer-group filter-icons"></i>
        <b-form-select class="col-sm-4" :options="options" v-model="selected"></b-form-select>

        <b-button class="col-sm-2 btn-search">Suchen</b-button>
      </b-form>

      <br />
    </div>
    <br />
    <br />

    <div class="container-fluid">
      <div class="overview-box" v-for="(company, indx) in filteredCompanies" :key="indx">
        <h4>{{ company.name }}</h4>
        <h6>{{ company.kategorie }}</h6>
        <table class="table">
          <tr>
            <td>
              <font-awesome-icon icon="envelope" />
            </td>
            <td>{{ company.email }}</td>
          </tr>
          <tr>
            <td>
              <font-awesome-icon icon="phone" />
            </td>
            <td>{{ company.tel }}</td>
          </tr>
          <tr>
            <td>
              <font-awesome-icon icon="map-marker-alt" />
            </td>
            <td>
              {{ company.straße }} {{ company.hnummer }}, {{ company.plz }}
              {{ company.stadt }}
            </td>
            <td></td>
          </tr>
        </table>

        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-2 variant="info">Mehr erfahren</b-button>
            </b-card-header>

            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <div class="header-öffnungszeiten">
                    <font-awesome-icon class="overview-icons" icon="clock" />
                    <span>Öffnungszeiten</span>
                  </div>
                  <div class="row">
                    <div class="col-sm-5">Montag</div>
                    <div
                      class="col-sm-7"
                    >{{ company.montag_von }} - {{ company.montag_bis }} / {{ company.montagM_von }} - {{ company.montagM_bis }}</div>
                  </div>
                  <div class="row">
                    <div class="col-sm-5">Dienstag</div>

                    <div
                      class="col-sm-7"
                    >{{ company.dienstag_von }} - {{ company.dienstag_bis }} / {{ company.dienstagM_von }} - {{ company.dienstagM_bis }}</div>
                  </div>
                  <div class="row">
                    <div class="col-sm-5">Mittwoch</div>

                    <div
                      class="col-sm-7"
                    >{{ company.mittwoch_von }} - {{ company.mittwoch_bis }} / {{ company.mittwochM_von }} - {{ company.mittwochM_bis }}</div>
                  </div>
                  <div class="row">
                    <div class="col-sm-5">Donnerstag</div>

                    <div
                      class="col-sm-7"
                    >{{ company.donnerstag_von }} - {{ company.donnerstag_bis }} / {{ company.donnerstagM_von }} - {{ company.donnerstagM_bis }}</div>
                  </div>
                  <div class="row">
                    <div class="col-sm-5">Freitag</div>

                    <div
                      class="col-sm-7"
                    >{{ company.freitag_von }} - {{ company.freitag_bis }} / {{ company.freitagM_von }} - {{ company.freitagM_bis }}</div>
                  </div>
                  <div class="row">
                    <div class="col-sm-5">Samstag</div>

                    <div
                      class="col-sm-7"
                    >{{ company.samstag_von }} - {{ company.samstag_bis }} / {{ company.samstagM_von }} - {{ company.samstagM_bis }}</div>
                  </div>

                  <div class="row">
                    <div class="col-sm-5">Sonntag</div>

                    <div
                      class="col-sm-7"
                    >{{ company.sonntag_von }} - {{ company.sonntag_bis }} / {{ company.sonntagM_von }} - {{ company.sonntagM_bis }}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-5">
                      <font-awesome-icon class="overview-icons" icon="info-circle" />
                      <span>Beschreibung</span>
                    </div>
                    <div class="col-sm-7">{{company.desc}}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-5">
                      <font-awesome-icon class="overview-icons" icon="info" />
                      <span>Sondermitteilung</span>
                    </div>
                    <div class="col-sm-7">{{company.news}}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-5" v-if="company.status == 'geöffnet'">
                      <font-awesome-icon class="overview-icons icon-check" icon="check-circle" />
                      <span>Status</span>
                    </div>
                    <div class="col-sm-5" v-if="company.status == 'geschlossen'">
                      <font-awesome-icon class="overview-icons icon-closed" icon="times-circle" />

                      <span>Status</span>
                    </div>
                    <div class="col-sm-7" v-if="company.status == 'geöffnet'">
                      <span>In aktueller Saison geöffnet</span>
                    </div>
                    <div class="col-sm-7" v-if="company.status == 'geschlossen'">
                      <span>In aktueller Saison geschlosssen</span>
                    </div>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: "Uebersicht",
  data() {
    return {
      search: "",
      companies: [],
      selected: "",
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
  methods: {},
  mounted() {
    axios
      .get("http://localhost:5000/companies")
      .then(response => {
        this.companies = response.data;
      })
      .catch(error => {
        console.warn("ERROR");
      });
  },
  computed: {
    filteredCompanies: function() {
      return this.companies.filter(company => {
        return (
          company.name.match(this.search) &&
          company.kategorie.match(this.selected)
        );
      });
    }
  }
};
</script>

<style lang="scss">
.übersicht {
  padding-top: 5%;
  font-family: Raleway, sans-serif;
}
@media only screen and (max-width: 1200px) {
  .übersicht {
    padding-top: 5%;
  }
}

@media only screen and (max-width: 900px) {
  .übersicht {
    padding-top: 15%;
  }
}

@media only screen and (max-width: 600px) {
  .filter-icons {
    display: none;
  }
  input,
  select {
    margin-bottom: 10px !important;
  }
  button {
    width: 100px !important;
  }
}

.container-fluid {
  display: flex;
  flex-wrap: wrap;
}

.overview-box {
  flex: 1 0 21%;
  margin: 30px 50px;
  border: 1px solid #204c78;
  border-radius: 5px;
  background-color: #204c78;
  color: white;
  padding: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.493);
}

.table td {
  color: white !important;
  text-align: left;
}

.box {
  border-radius: 5px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.493);
  padding: 20px;
  margin: 0 15%;
  background: #dc3545 !important;
  color: white;
}
input,
select {
  margin-right: 20px !important;
}
.form-inline {
  justify-content: center;
}

.btn-search {
  background-color: #204c78 !important;
  border-color: #204c78 !important;
}
.company-name {
  cursor: pointer;
}

.card {
  border: none !important;
  background-color: #204c78 !important;
}
.btn-info {
  background-color: #dc3545 !important;
}
.card-text {
  text-align: left;
}

.uhrzeit {
  text-align: right !important;
}
hr {
  background: white;
}

.overview-icons {
  margin-right: 10px;
}
.icon-check {
  color: #28a745;
}
.icon-closed {
  color: #dc3545;
}
.header-öffnungszeiten,
.clock {
  font-size: 1.25rem;
  margin-bottom: 1%;
}
.filter-icons {
  margin-right: 10px;
  font-size: 30px !important;
}
</style>
