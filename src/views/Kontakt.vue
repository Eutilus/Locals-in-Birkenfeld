<template>
  <div class="contact">
    <h1>Kontakt</h1>
    <br />

    <div class="row wow fadeInUp">
      <div class="col-sm-1"></div>
      <b-form class="col-sm-4">
        <h2>Schreiben Sie uns Ihr Feedback!</h2>
        <br />
        <br />
        <label>Kritik, Wünsche und Sonstiges</label>
        <b-textarea v-model="text" rows="5" placeholder="Nachricht"></b-textarea>
        <br />
        <b-button class="col-sm-12" variant="danger" @click="addToAPI">Nachricht absenden</b-button>
      </b-form>
      <div class="col-sm-6 contact-methods">
        <div class="contact-method">
          <i class="fas fa-envelope"></i>
          <span>s17ce7@umwelt-campus.de</span>
        </div>
        <br />
        <br />
        <div class="contact-method">
          <i class="fas fa-phone"></i>
          <span>+49 15736983691</span>
        </div>
      </div>
      <div class="form-group col-sm-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Kontakt",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    addToAPI() {
      let newFeedback = {
        text: this.text
      };
      axios
        .post("http://localhost:5000/feedback", newFeedback)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.warn("ERROR");
        });
    }
  }
};
</script>

<style lang="scss">
.contact {
  padding-top: 5%;
  h1 {
    font-family: Raleway, sans-serif;
  }
}

@media only screen and (max-width: 1200px) {
  .contact {
    padding-top: 5%;
  }
}

@media only screen and (max-width: 900px) {
  .contact {
    padding-top: 15%;
  }
}

.contact-method {
  width: 220px;
  height: 140px;
  display: inline-block;
  background: #1a3d60;
  margin: 10px;
  color: #fff;
  position: relative;
  cursor: pointer;
}

.contact-method i {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 30px;
  line-height: 140px;
  background: #204c78;
  z-index: 1;
  transition: transform 0.6s;
}

.contact-method span {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 10px 0;
}

.contact-method:hover i {
  transform: translateY(-40px);
}

.fadeInUp {
  padding: 5% 0;
}

.contact form {
  padding: 50px;
  background: #fbfbfb;
  h2,
  label {
    float: left;
  }
}
.contact-methods {
  padding: 50px;
  background: #fbfbfb;
}
</style>
