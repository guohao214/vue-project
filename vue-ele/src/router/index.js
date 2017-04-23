import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import goods from '@/components/goods'
import ratings from '@/components/ratings'
import sellers from '@/components/sellers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/goods',
          component: goods
        },
        {
          path: '/ratings',
          component: ratings
        },
        {
          path: '/sellers',
          component: sellers
        }
      ]
    }

  ],
  linkActiveClass: 'active'
})
