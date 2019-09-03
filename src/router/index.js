import Vue from 'vue'
import Router from 'vue-router'
import add from '@/view/add'
import AppMain from '@/view/AppMain'
import login from '@/view/login'

import Lianxiren from '@/view/sys/Lianxiren'
import Account from '@/view/sys/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/AppMain',
      name: 'AppMain',
      component: AppMain,
      children:[{
        path: '/sys/Lianxiren',
        name: 'Lianxiren',
        component: Lianxiren
      },{
        path: '/sys/Account',
        name: 'Account',
        component: Account
      }]
    }]
})
