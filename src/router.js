import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GoodsStandard from './views/GoodsStandard.vue'
import GoodsCenter from './views/GoodsCenter.vue'
import Order from './views/Order.vue'
import User from './views/User.vue'
import BlackList from './views/BlackList.vue'
import Community from './views/Community.vue'
import Center from './views/Center.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goodsStandard',
      name: 'goodsStandard',
      component: GoodsStandard
    },
    {
      path: '/goodsCenter',
      name: 'goodsCenter',
      component: GoodsCenter
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/blackList',
      name: 'blackList',
      component: BlackList
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    }
  ]
})