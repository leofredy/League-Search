import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    champions: false,
  },
  mutations: {
    SET_CHAMPIONS (state, payload) {
      state.champions = payload;
    },
  },
  actions: {
    fetchChampions(context) {
      if (localStorage.getItem("champion")) {
        context.commit("SET_CHAMPIONS", JSON.parse(localStorage.getItem("champions")));
      } else {
        fetch("http://ddragon.leagueoflegends.com/cdn/11.5.1/data/pt_BR/champion.json")
          .then(response => response.json())
          .then(data => {
            localStorage.setItem("champions", JSON.stringify(data.data));
            context.commit("SET_CHAMPIONS", Object.values(data.data));
          });
      }
    },
  }
});

export default store;