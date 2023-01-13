import Vue from 'vue'
import App from './App'
import router from './router'
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8443/api'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
