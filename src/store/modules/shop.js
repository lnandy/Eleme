import shop from '../api/shop'

// initial state
const state = {
  list: []
}

// getters
const getters = {
  getShopList (state, getters, rootState) {
    return !!state.list.items ? state.list.items.map(i=>{
      let tempPath = i.restaurant.image_path;
      let tempDistance = i.restaurant.distance.toString();
      i.restaurant.image_path = "http://fuss10.elemecdn.com/" + tempPath.slice(0,1) + '/' + tempPath.slice(1,3) 
                              + '/' + tempPath.slice(3,tempPath.length)
                              + (tempPath.includes('png') ? '.png' : '.jpeg') + '?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
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
