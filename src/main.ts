import eventBus from 'meduza-bus'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './shared/config/i18n/i18n'

window.eventBus = eventBus
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
