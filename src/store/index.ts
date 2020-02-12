import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    refreshData: false
  },
  mutations: {
    refreshData(state) {
      state.refreshData = !state.refreshData;
    },
    excludeCard(state, payload) {
      let lists = JSON.parse(localStorage.getItem("lists")).filter(
        task => task.id !== payload
      );
      localStorage.setItem("lists", JSON.stringify(lists));
    },
    excludeTask(state, { item, callback }) {
      let tasks = item.tasks;
      let id = item.id;
      callback(tasks.filter(task => task.id !== id));
    }
  },
  actions: {
    refreshData({ commit }) {
      commit("refreshData");
    },
    excludeCard({ commit }, payload) {
      commit("excludeCard", payload);
    },
    excludeTask({ commit }, payload) {
      return new Promise(resolve => {
        commit("excludeTask", { item: payload, callback: resolve });
      });
    }
  },
  modules: {}
});
