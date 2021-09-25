import { createRouter, createWebHistory } from "vue-router";
import City from "../views/City.vue";
import Town from "../views/Town.vue";
const routes = [
  {
    path: "/jobs",
    name: "City",
    component: City,
  },
  {
    path: "/:prefCode",
    name: "Town",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Town,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
