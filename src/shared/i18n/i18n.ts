import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {},
  legacy: false,
  globalInjection: true
})

export default i18n
