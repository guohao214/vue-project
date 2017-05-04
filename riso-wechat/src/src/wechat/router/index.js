import Vue from 'vue'
import Router from 'vue-router'
import { Indicator } from 'mint-ui';
import MyLayout from '@/components/my'
import AccountLayout from '@/pages/account/layout'

Vue.use(Router)

let $router = new Router({
  routes: [
    {
      path: '/my/',
      component: MyLayout,
      children: [
        {
          path: 'coupon/list',
          component: resolve => require(['../components/my/coupon/index.vue'], resolve)
        },
        {
          path: 'coupon/qrCode',
          component: resolve => require(['../components/my/coupon/qrCode.vue'], resolve)
        }
      ]
    },
    {
      path: '/account/',
      component: AccountLayout,
      children: [
        {
          path: 'register',
          component: resolve => require(['../pages/account/register.vue'], resolve)
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
  //linkActiveClass: 'active'
})


$router.beforeEach((to, from, next) => {
  next();
})


$router.afterEach(route => {
})

export default $router;
