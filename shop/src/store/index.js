import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[]
  },
  mutations: {
    addNewCard(state, card) {
      state.cards.push(card)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:
    [createPersistedState()]
})
