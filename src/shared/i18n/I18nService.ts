import i18n from './i18n'

class I18nService {
  private i18nInstance: typeof i18n;

  constructor() {
    this.i18nInstance = i18n;
    if (!window.i18n) {
      window.i18n = this.i18nInstance;
    }
  }

  get i18n() {
    return window.i18n ?? this.i18nInstance;
  }

  changeLocale(locale: string) {
    if (this.i18n) {
      this.i18n.global.locale.value = locale;
    } else {
      this.i18nInstance = i18n;
    }
  }

  addLocale(locale: string, messages: Record<string, object>) {
    if (this.i18n) {
      this.i18n.global.setLocaleMessage(locale, messages);
      return;
    }
    console.warn('I18n instance is not available, cannot add locale');
  }
  addLocales(locales: Record<string, Record<string, object>>) {
  for (const [locale, messages] of Object.entries(locales)) {
    this.addLocale(locale, messages);
  }
}

  hasI18n() {
    return !!this.i18n;
  }
}

export default new I18nService();
