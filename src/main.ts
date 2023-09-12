import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import piniaPersiststate from 'pinia-plugin-persistedstate'
import '@/assets/styles/reset.css'
import '@/helpers/fetch';

const pinia = createPinia()
pinia.use(piniaPersiststate)

createApp(App).use(pinia).use(router).mount('#app')
