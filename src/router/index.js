import Vue from 'vue'
import Router from 'vue-router'
const blogEdit = () => import('@/views/blog/blogEdit.vue')
const blogAdd = () => import('@/views/blog/blogAdd.vue')
const about = () => import('@/views/about/about.vue')
const main = () => import('@/views/main/main.vue')
const echarts = () => import('@/views/echarts/echarts.vue')
const myMap = () => import('@/views/myMap/myMap.vue')
const blogContent = () => import('@/views/blog/blogContent.vue')
const login = () => import('@/views/login.vue')
const blogItem = () => import('@/views/blog/blogItem.vue')
const index = () => import('@/views/index.vue')

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
      children: [
        // {
        //   path: '/',
        //   redirect: 'blogContent'
        // },
        {
          path: 'blogContent',
          name: 'blogContent',
          component: blogContent
        },
        {
          path: 'blogItem/:id?',
          name: 'blogItem',
          component: blogItem
        },
        {
          path: 'blogEdit',
          name: 'blogEdit',
          component: blogEdit
        },
        {
          path: 'blogAdd',
          name: 'blogAdd',
          component: blogAdd
        }, {
          path: 'about',
          name: 'about',
          component: about
        },
        {
          path: 'main',
          name: 'main',
          component: main
        },
        {
          path: 'echarts',
          name: 'echarts',
          component: echarts
        },
        {
          path: 'myMap',
          name: 'myMap',
          component: myMap
        }
      ]
    },
    {
      path: 'login',
      name: 'login',
      component: login
    },
    {
      path: '#',
      redirect: blogContent
    }
  ]
})
