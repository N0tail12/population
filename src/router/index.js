import { createRouter, createWebHistory } from "vue-router";
import City from "../views/City.vue";
import Town from "../views/Town.vue";
import LandingPage from "../views/LandingPage.vue";
import FirstFunc from "../views/FirstFunc.vue";
const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/1",
    name: "FirstFunc",
    component: FirstFunc,
  },
  {
    path: "/2",
    name: "City",
    component: City,
  },
  {
    path: "/2/:prefCode",
    name: "Town",
    component: Town,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
