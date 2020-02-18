import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [],
    items: [],
    closeModal: false,
    editing: false
  },
  mutations: {
    closeModal(state) {
      state.closeModal = !state.closeModal;
    },
    refreshData(state) {
      state.lists = JSON.parse(localStorage.getItem("lists"));
      state.closeModal = !state.closeModal;
    },
    excludeCard(state, payload) {
      let lists = JSON.parse(localStorage.getItem("lists")).filter(
        task => task.id !== payload
      );
      localStorage.setItem("lists", JSON.stringify(lists));
      state.lists = JSON.parse(localStorage.getItem("lists"));
    },
    excludeTask(state, payload) {
      let tasks = payload.tasks;
      let id = payload.id;
      state.items = tasks.filter(task => task.id !== id);
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
      commit("excludeTask", payload);
    }
  },
  getters: {
    getTasks: state => {
      return state.lists;
    },
    getItems: state => {
      return state.items;
    }
  },
  modules: {}
});
