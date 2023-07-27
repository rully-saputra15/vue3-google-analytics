import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag from 'vue-gtag'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(
  VueGtag,
  {
    appName: 'Vue 3 Products',
    pageTrackerScreenviewEnabled: true,
    config: { id: import.meta.env.VITE_MEASUREMENT_ID }
  },
  router
)
app.mount('#app')
