import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-default/index.css';    // 默认主题
require('element-ui/lib/theme-default/index.css');
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import request from './plugins/request'
import store from './store'
Vue.use(ElementUI);
Vue.use(request)

new Vue({
    router,
    store,
    request,
    beforeUpdate: function () {
       // alert(2)
    },
    render: h => h(App)
}).$mount('#app');
