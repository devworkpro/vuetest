import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import orders from '@/components/orders'

import axios from 'axios';
Vue.use(Router)
Vue.use(axios)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: orders
    },
    {
      path: '/recent/order',
      name: 'orders',
      component: orders
    }
  ]
})
