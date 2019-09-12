// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './framework/rem'
import FastClick from 'fastclick'
import store from './store/index'
import Mint from 'mint-ui'

// 开发环境mock数据
if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.headTitle) {
    document.title = to.meta.headTitle
  }
  next()
})

// Vue.component(Toast.name, Toast)
// Vue.component(Button.name, Button)

Vue.use(Mint)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
