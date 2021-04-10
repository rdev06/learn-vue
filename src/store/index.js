import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0,
    color: '#42b983'
  },
  getters: {
    square(state) {
      return state.counter * state.counter;
    }
  },
  mutations: {
    inc(state) {
      state.counter++;
    },
    dec(state) {
      state.counter--;
    },
    randomNumber(state, value) {
      state.counter = value;
    },
    setColor(state, value) {
      state.color = value;
    }
  },
  actions: {
    async assignValue({ commit }, arg) {
      //console.log(arg); // roshan
      commit('randomNumber', Math.ceil(Math.random() * 10));
    }
  },
  modules: {}
});
