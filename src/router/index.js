import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
import Activity from '../views/Activity.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Activity',
    component: Activity,
    meta: {
      title: '活动页',
      index: 1
    }
  },
  {
    path: '/myPrize',
    name: 'myPrize',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Myprize.vue'),
    meta: {
      title: '奖品',
      index: 2
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
