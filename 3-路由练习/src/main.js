import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import AppLayout from './components/AppLayout.vue'
import router from './router'


new Vue({
  el: '#app',
  render: h => h(AppLayout),
  // 将路由器提供给应用
  router,
})
