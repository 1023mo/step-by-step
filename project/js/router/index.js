import Vue from 'vue'
import Router from 'router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'name',
    component: Home
  }]
})