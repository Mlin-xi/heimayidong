import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'

Vue.use(VueRouter)

// const router = new VueRouter({
//   routes: []
// })
// export default router

export default new VueRouter({
  // 配置路由表
  routes: [{
    path: '/',
    redirect: '/login'
    // component: Login
  },
  {
    name: 'login', // 路由的名字
    path: '/login',
    component: Login
  }
  ]
})
