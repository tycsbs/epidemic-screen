import { createApp } from 'vue'
import { createPinia } from 'pinia'
import dataV from '@kjgl77/datav-vue3'

import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'

const app = createApp(App)

app.use(createPinia())
app.use(dataV)
app.use(router)

app.mount('#app')
