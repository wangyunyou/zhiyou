import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GoodsCenter from './views/GoodsCenter.vue'
import Order from './views/Order.vue'
import User from './views/User.vue'
import Community from './views/Community.vue'
import Equipment from './views/Equipment.vue'
import Center from './views/Center.vue'
import GoodsSpecifications from './views/GoodsSpecifications.vue'
import GoodsStyle from './views/GoodsStyle.vue'

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
      path: '/goodsCenter',
      name: 'goodsCenter',
      component: GoodsCenter
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: Equipment
    },
    {
      path: '/goodsSpecifications',
      name: 'goodsSpecifications',
      component: GoodsSpecifications
    },
    {
      path: '/goodsStyle',
      name: 'goodsStyle',
      component: GoodsStyle
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