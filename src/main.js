import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueApexCharts from "vue3-apexcharts";
import dotenv from "dotenv";
dotenv.config();
library.add(fas);
createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(router)
  .use(VueApexCharts)
  .mount("#app");
