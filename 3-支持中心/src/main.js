import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import './global-components'
import state from './state'
import VueState from './plugins/state'


Vue.use(VueState, state)


new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router,
  date: state,
})
