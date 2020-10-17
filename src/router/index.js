import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const User = () => import("../views/user/User")
const Data = () => import("../views/data/Data")
const Community = () => import("../views/community/Community")
const Find = () => import("../views/find/Find")
const Contest = () => import("../views/contest/Contest")
const Detail = () => import("../components/content/detail/Detail")

const routes = [
  {
    path: '/',
    redirect: '/user',
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/data',
    name: 'Data',
    component: Data
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/contest',
    name: 'Contest',
    component: Contest,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router