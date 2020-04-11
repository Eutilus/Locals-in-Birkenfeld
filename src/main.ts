import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBag,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faInfo,
  faInfoCircle,
  faArrowUp,
  faClock,
  faCheckCircle,
  faTimesCircle,
  faUnlock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faShoppingBag,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faInfo,
  faInfoCircle,
  faArrowUp,
  faClock,
  faCheckCircle,
  faTimesCircle,
  faUnlock
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

// Vue.filter("to-uppercase", function(value) {
//   return value.toUpperCase();
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
