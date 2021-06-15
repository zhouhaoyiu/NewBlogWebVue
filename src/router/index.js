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

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
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
        path: '/blogItem',
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
