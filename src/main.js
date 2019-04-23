import Vue from "vue";
import "./plugins/vuetify";
import router from "./router";
import App from "./App.vue";
import "@/firebase";
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";

import store from "./store/store";

library.add(faStar);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");