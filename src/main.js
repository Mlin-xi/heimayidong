import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.less'
// 引入表单校验组件
import {
  ValidationProvider, // 只能验证一个字段
  ValidationObserver, // 能验证多个字段
  extend
} from 'vee-validate' // 没有携带内置的验证规则
// import {
//   ValidationProvider,
//   // ValidationObserver,
//   extend
// } from 'vee-validate/dist/vee-validate.full' // 携带内置的验证规则
// 加载验证插件的语言包
import zhCN from 'vee-validate/dist/locale/zh_CN' // 中文
import * as rules from 'vee-validate/dist/rules' // 所有的验证规则

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
// 配置表单验证插件
for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: zhCN.messages[rule] // add its message
  })
}

// 配置自定义手机号验证
extend('phone', {
  // value会收到文本框的改变的数据
  // validate: value => /^1\d{10}$/.test(value),
  validate (value) {
    return /^1\d{10}$/.test(value)
  },
  message: '必须是手机号'
})
// 自定义验证规则
// extend('secret', {
//   // value会收到文本框的改变的数据
//   validate: value => value === 'example',
//   message: 'This is not the magic word'
// });
// 注册为全局组件
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
