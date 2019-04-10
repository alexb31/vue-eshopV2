import Vue from "vue";
import "./plugins/vuetify";
import router from "./router";
import App from "./App.vue";

import { store } from "./store/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
