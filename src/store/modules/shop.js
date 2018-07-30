import shop from '../api/shop'

// initial state
const state = {
  list: []
}

// getters
const getters = {
  getShopList (state, getters, rootState) {
    return !!state.list.items ? state.list.items.map(i=>{
      let tempDistance = i.restaurant.distance.toString();
      if(tempDistance.length > 3){
        tempDistance = tempDistance.slice(0,tempDistance.length-3) + '.' + tempDistance.slice(-3);
        tempDistance = parseFloat(tempDistance).toFixed(2) + 'km';
      }else{
        tempDistance = tempDistance + 'm'
      }
      i.restaurant.distance = tempDistance;
      return i.restaurant;
    }) : []
  }
}

// actions
const actions = {
  requestShopList ({ commit }) {
    shop.getShopList(products => {
      commit('setShop', products)
    })
  },
}

// mutations
const mutations = {
  setShop (state, products) {
    state.list = products
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
