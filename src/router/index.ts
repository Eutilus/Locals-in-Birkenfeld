import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Übersicht from "../views/Übersicht.vue";
import Kontakt from "../views/Kontakt.vue";
import Datenschutz from "../views/Datenschutz.vue";
import AddCompany from "../views/AddCompany.vue";
import ErrorPage from "../views/ErrorPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/übersicht",
    name: "Uebersicht",
    component: Übersicht
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Kontakt
  },
  {
    path: "/datenschutz",
    name: "Datenschutz",
    component: Datenschutz
  },
  {
    path: "/eintrag-hinzufügen",
    name: "AddCompany",
    component: AddCompany
  },
  {
    path: "/error",
    name: "Error",
    component: ErrorPage
  },
  { path: "/*", redirect: "/error" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
