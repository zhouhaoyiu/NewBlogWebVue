import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import login from '@/views/login.vue'
import blogContent from '@/views/blog/blogContent.vue'
import blogItem from '@/views/blog/blogItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [{
        path: '/blogContent',
        name: 'blogContent',
        component: blogContent
      },
      {
        path: '/blogItem',
        name: 'blogItem',
        component: blogItem
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
