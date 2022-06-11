import axios from 'axios';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  performance: [],
};

const getters = {
  allPerformance: () => {
    return state.performance;
  },
};

const actions = {
  getPerformance({ commit }) {
    axios.get('https://fe-task.getsandbox.com/performance')
      .then(response => {
        commit('SET_PERFORMANCE', response.data);
      });
  },
};

const mutations = {
  SET_PERFORMANCE(state, performance) {
    state.performance = performance;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
