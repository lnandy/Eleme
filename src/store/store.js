import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart'
import product from './modules/product'
import shop from './modules/shop'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    shop
  },
})