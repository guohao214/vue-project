// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from './plugins/request'
import store from './store'

import 'mint-ui/lib/style.css';
import './assets/hotcss/hotcss.js'

Vue.config.productionTip = false
Vue.use(request)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  request,
  template: '<App/>',
  components: {App}
})
