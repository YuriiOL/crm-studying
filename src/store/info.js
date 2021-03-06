import firebase from 'firebase/app'
export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) { 
      state.info = info
    },
    clearInfo(state) { state.info = {}} 
  },
  actions: {
    
    async fetchInfo({ dispatch, commit }) {
    try {
      const userId = await dispatch('getUid')
      const info = (await firebase.database().ref(`/users/${userId}/info`).once('value')).val()
      commit('setInfo', info)
    } catch (e) {
      console.log(e)
    }
      
    }
  },
  getters: {
    info: state => state.info
  }
}