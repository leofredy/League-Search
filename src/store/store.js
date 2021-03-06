import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    champions: false,
    champion: false,
    skinBackgroundActive: false,
  },
  mutations: {
    SET_CHAMPIONS(state, payload) {
      state.champions = payload;
    },
    SET_CHAMPION(state, payload) {
      state.champion = payload;
    },
    SET_SKIN_BACKGROUND_ACTIVE(state, payload) {
      state.skinBackgroundActive = payload;
    }
  },
  actions: {
    fetchChampions(context) {
      fetch("https://ddragon.leagueoflegends.com/cdn/11.5.1/data/pt_BR/champion.json")
        .then(response => response.json())
        .then(data => {
          context.commit("SET_CHAMPIONS", Object.values(data.data));
        });
    },
    fetchChampion(context, payload) {
      context.commit("SET_CHAMPION", false);
      context.commit("SET_SKIN_BACKGROUND_ACTIVE", false);

      fetch(`https://ddragon.leagueoflegends.com/cdn/11.6.1/data/pt_BR/champion/${payload}.json`)
        .then(response => response.json())
        .then(data => {
          context.commit("SET_CHAMPION", Object.values(data.data));
        });
      
    }
  }
});

export default store;