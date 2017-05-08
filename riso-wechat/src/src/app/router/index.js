import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/pages/goods/index'

Vue.use(Router)

let $router = new Router({
  routes: [
    {
      path: '/goods/',
      component: goods,
      children: [
        {
          path: 'list',
          component: resolve => require(['../pages/goods/list.vue'], resolve)
        },
        {
          path: 'detail/:id',
          component: resolve => require(['../pages/goods/detail.vue'], resolve)
        }
      ]
    },

  ],
})


$router.beforeEach((to, from, next) => {
  next();
})


$router.afterEach(route => {
})

export default $router;
