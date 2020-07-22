import Vue from "vue";
import Paginate from "vuejs-paginate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.component("Paginate", Paginate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
