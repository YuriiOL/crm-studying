import firebase from 'firebase/app'


export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(dispatch, commit)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async logout() {
      await firebase.auth().signOut()
    },
    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getId')
        await firebase.database().ref(`/users/${uid}/info`).set({bill: 10000, name})
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    getId() {
      const userInfo = firebase.auth().currentUser
      return userInfo ? userInfo.uid : null
    }
  }
}