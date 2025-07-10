import eventBus from 'meduza-bus'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/shared/i18n/i18n'
import '@/shared/i18n/I18nService'
import router from '../router'

window.eventBus = eventBus
window.router = router

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)

window.pinia = pinia

app.mount('#app')
