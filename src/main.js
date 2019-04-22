import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Layer from 'layui-src/src/layui.js'
// import './layui/css/layui.css'

Vue.config.productionTip = false

Vue.use(Element, Layer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Layer,
  render: h => h(App)
})
