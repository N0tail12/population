import { createRouter, createWebHistory } from "vue-router";
import City from "../views/City.vue";
import Town from "../views/Town.vue";
const routes = [
  {
    path: "/",
    name: "City",
    component: City,
  },
  {
    path: "/:prefCode",
    name: "Town",
    component: Town,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
