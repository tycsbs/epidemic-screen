import { createApp } from 'vue'
import { createPinia } from 'pinia'
import dataV from '@kjgl77/datav-vue3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import BaseCharts from '@/components/core/echart.vue'

import App from './App.vue'
import router from './router'
// import '@/assets/css/reset.css'
import '@/assets/css/base.css'

const app = createApp(App)
app.component('bs-chart', BaseCharts)

app.use(createPinia())
app.use(dataV)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
