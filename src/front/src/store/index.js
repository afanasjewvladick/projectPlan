/* eslint-disable import/no-cycle */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import project from './project';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    project,
  },
  debug: true,
  state,
  actions,
  mutations,
});
