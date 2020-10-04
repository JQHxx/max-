import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const User = () => import("../views/user/User")
const Data = () => import("../views/data/Data")
const Community = () => import("../views/community/Community")
const Find = () => import("../views/find/Find")
const Contest = () => import("../views/contest/Contest")

const routes = [
  {
    path: '/',
    redirect: '/user',
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
  },
  {
    path: '/contest',
    name: 'Contest',
    component: Contest
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router