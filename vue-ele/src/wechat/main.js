// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from './plugins/request'
import mintUi from 'mint-ui';

import 'mint-ui/lib/style.css';

Vue.config.productionTip = false
Vue.use(request)
Vue.use(mintUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  request,
  template: '<App/>',
  components: { App }
})
