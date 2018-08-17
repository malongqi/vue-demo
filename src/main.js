import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Demo from './demo/index.vue'
import store from './store/index'
Vue.use(VueRouter)

const routes = [
  { path: '/demo', component: Demo },
  { path: '/bar', component: Demo }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
