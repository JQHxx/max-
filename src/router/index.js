import Vue from 'vue'
import VueRouter from 'vue-router'

import Community from "../views/Community/Community"
import Data from "../views/Data/Data"
import User from "../views/User/User"
import Find from "../views/Find/Find"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'User',
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/data',
    name: 'Data',
    component: Data
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/find',
    name: 'Find',
    component: Find
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router