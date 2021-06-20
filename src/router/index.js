import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import login from '@/views/login.vue'
import blogContent from '@/views/blog/blogContent.vue'
import blogItem from '@/views/blog/blogItem.vue'
import blogEdit from '@/views/blog/blogEdit.vue'
import blogAdd from '@/views/blog/blogAdd.vue'
import about from '@/views/about/about.vue'
import main from '@/views/main/main.vue'
import echarts from '@/views/echarts/echarts.vue'
import myMap from '@/views/myMap/myMap.vue'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: 'blogContent',
      children: [{
        path: '/blogContent',
        name: 'blogContent',
        component: blogContent
      },
      {
        path: '/blogItem/:id?',
        name: 'blogItem',
        component: blogItem
      },
      {
        path: '/blogEdit',
        name: 'blogEdit',
        component: blogEdit
      },
      {
        path: '/blogAdd',
        name: 'blogAdd',
        component: blogAdd
      }, {
        path: '/about',
        name: 'about',
        component: about
      },
      {
        path: '/main',
        name: 'main',
        component: main
      },
      {
        path: '/echarts',
        name: 'echarts',
        component: echarts
      },
      {
        path: '/myMap',
        name: 'myMap',
        component: myMap
      }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '#',
      redirect: blogContent
    }
  ]
})
