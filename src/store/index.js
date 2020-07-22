import Vue from "vue";
import Vuex from "vuex";
import postsList from "./moduls/postsList";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    postsList,
  },
});
