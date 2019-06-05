import Vue from 'vue'
import Router from 'router'
import Router from 'router'
import GetInfo from '../../pages/GetInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/getInfo',
    name: 'getInfo',
    component: GetInfo
  }, {
    path: '/function',
    name: 'function',
    component: 'Function'
  }]
})