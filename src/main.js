// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import AMap from 'vue-amap'
import router from './router'
import less from 'less'
import '../src/assets/css/reset.less'
import store from './vuex/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(AMap)
Vue.use(mavonEditor)
Vue.use(less)
Vue.use(ElementUI)

AMap.initAMapApiLoader({
  // 高德key
  key: '55826f24b7d0a027c13abd71fe37798c',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
})
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
