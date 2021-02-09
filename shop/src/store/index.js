import Vue from 'vue'
import Vuex from 'vuex'

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
  }
})
