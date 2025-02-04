import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';

const messages = {
  en,
  ru,
};

const i18n = createI18n({
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages,
});
export type TMessages = keyof typeof messages;
export default i18n;
