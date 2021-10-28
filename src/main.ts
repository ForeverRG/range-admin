import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore, store } from './store'
import { registerComponents } from './global/index'

import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
app.use(registerComponents)
app.use(store)
// 每次刷新页面都初始化store中的数据，防止数据丢失，放在注册路由前面，防止路由匹配路径错误
setupStore()
app.use(router)
app.mount('#app')
