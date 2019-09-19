import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.less'
// 按需引入 Vant 组件
import {
  Button, // 按钮
  NavBar, // 导航
  Field, // 输入框
  Icon, // 图标
  Toast, // 失败信息提示
  Loading // 加载
} from 'vant'

Vue.use(NavBar).use(Button).use(Field).use(Icon).use(Toast).use(Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
