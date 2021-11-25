import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'

import '@/mock/index'

// 注册组件
import { Tab, Tabs, Swipe, SwipeItem } from 'vant'

const app = createApp(App);
app.use(Tab).use(Tabs).use(Swipe).use(SwipeItem)

app.use(router).mount('#app')
