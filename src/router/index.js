import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/view/Main'
import SearchAddress from '@/view/SearchAddress'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'Main',
      component: Main,
      meta:{
        title:'首页',
        index:1,
        keepAlive: true
      }
   },
   {
      path: '/SearchAddress',
      name: 'SearchAddress',
      component: SearchAddress,
      meta:{
        title:'地址搜索',
        index:2,
        keepAlive: false
      }
   },
  ]
})
