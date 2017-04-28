import Vue from 'vue'
import Router from 'vue-router'
import My from '@/components/my'

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
      path: '/my/',
      component: My,
      children: [
        {
          path: 'coupon',
          component: resolve => require(['../components/my/coupon/index.vue'], resolve)
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    //   children: [
    //     {
    //       path: '/',
    //       component: resolve => require(['../components/goods.vue'], resolve)
    //     },
    //     {
    //       path: '/ratings',
    //       component: resolve => require(['../components/ratings.vue'], resolve)
    //     },
    //     {
    //       path: '/sellers',
    //       component: resolve => require(['../components/sellers.vue'], resolve)
    //     }
    //   ]
    // }

  ],
  linkActiveClass: 'active'
})
