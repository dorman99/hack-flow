// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import store from './store.js'
import axios from 'axios'
import swal from 'sweetalert'

Vue.prototype.$http = axios.create({
  baseURL: 'http://35.197.129.37:3050'
})
Vue.prototype.$swal = swal
Vue.use(Buefy)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
