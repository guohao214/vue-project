import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import goods from '@/components/goods'
import ratings from '@/components/ratings'
import sellers from '@/components/sellers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/goods',
          component: resolve => require(['../components/goods.vue'], resolve)
        },
        {
          path: '/ratings',
          component: resolve => require(['../components/ratings.vue'], resolve)
        },
        {
          path: '/sellers',
          component: resolve => require(['../components/sellers.vue'], resolve)
        }
      ]
    }

  ],
  linkActiveClass: 'active'
})
