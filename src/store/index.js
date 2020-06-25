import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

import * as tipocambio from "@/store/modules/tipocambio.js";
import ApiService from "@/services/ApiService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      /* ApiService.defaults.headers.common[
         "Authorization"
       ] = `Bearer ${userData.token}`; */
      ApiService.establecerJWTtoken(userData);
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem("user");
      location.reload();
    },
  },
  actions: {
    login({ commit }, credentials) {
      // return axios.post("//localhost:9090/auth/signin", credentials)
      return ApiService.autenticar(credentials).then((response) => {
        console.log(response);
        commit("SET_USER_DATA", response.data);
      });
    },
    logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
  },
  modules: {
    tipocambio,
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
});
