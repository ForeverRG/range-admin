import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore, store } from './store'
import { registerComponents } from './global/index'

import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

// 每次刷新页面都初始化store中的数据，防止数据丢失
setupStore()

app.use(store).use(router).use(registerComponents).mount('#app')
