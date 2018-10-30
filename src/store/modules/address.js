const state = {
	address: '正在定位中',
	needRequest: true
}
const getters = {
	getAddress (state, getters, rootState) {
		return state.address
	},
	getStatus (state, getters, rootState) {
		return state.needRequest
	}
}
const actions = {
	setAddress({commit},address) {
		commit('updateAddress',address)
	},
	setStatus({commit},status) {
		commit('updateStatus',status)
	}
}



const mutations = {
	updateAddress (state,address) {
		state.address = address
	},
	updateStatus (state,status) {
		state.needRequest = status
	}
}
export default{
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}