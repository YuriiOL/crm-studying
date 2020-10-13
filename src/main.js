import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

Vue.use(Vuelidate)
Vue.use(messagePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
