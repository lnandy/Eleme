import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart'
import product from './modules/product'
import shop from './modules/shop'
import address from './modules/address'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    shop:shop,
    address:address
  },
})