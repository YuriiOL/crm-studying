import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import Loader from './components/app/Loader.vue'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.component('Loader', Loader)

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyCROj5dXsupPPaP5brEE4p1SiO2rNjYoG4",
    authDomain: "vue-crm-studying.firebaseapp.com",
    databaseURL: "https://vue-crm-studying.firebaseio.com",
    projectId: "vue-crm-studying",
    storageBucket: "vue-crm-studying.appspot.com",
    messagingSenderId: "996734751852",
    appId: "1:996734751852:web:b3f59b4042dc54f615b449",
    measurementId: "G-GSPFPFGQQY"
})

let app
firebase.auth().onAuthStateChanged(() => { 
  if (!app) {
  app = new Vue({
  router,
  store,
  render: h => h(App)
  }).$mount('#app')
 }
  
})


