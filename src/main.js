import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/reset.less'
import './views/canvas-nest.min.js'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
