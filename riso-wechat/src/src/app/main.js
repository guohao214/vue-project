// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from './plugins/request'

import 'mint-ui/lib/style.css';
import './assets/hotcss/hotcss.js'

for(var i in window.CTJSBridge)
{
  console.log(i, window.CTJSBridge[i])
}

Vue.config.productionTip = false
Vue.use(request)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  request,
  template: '<App/>',
  components: {App}
})
