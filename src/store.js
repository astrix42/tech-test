import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    options:[],
    zarValue: 0,

  },
  mutations: {
    getOptions(state) {
      //eslint-disable-next-line
      Vue.http.get('https://api.exchangeratesapi.io/latest?base=ZAR').then(function (data) {
        const ret = {};
        //eslint-disable-next-line
        for (const key in data.data.rates) {
          ret[data.data.rates[key]]= key;
        }
        console.log(ret);
        state.options = ret;
      });
    },
    Calc(state, payload) {
      state.zarValue = payload.foreignValue / payload.selected;
    },
  },
  actions: {

  },
});
