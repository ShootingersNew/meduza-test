import i18n from './i18n'

class I18nService {
  private i18nInstance: typeof i18n;

  constructor() {
    this.i18nInstance = i18n;
    window.i18n = this.i18nInstance;
  }

  get i18n() {
    return window.i18n ?? this.i18nInstance
  }

  changeLocale(locale: string) {
    if (this.i18nInstance) {
      this.i18nInstance.global.locale.value = locale;
      console.log(this.i18nInstance.global.locale.value);
    } else {
      this.i18nInstance = i18n;
    }
  }
  addLocale(locale: string, messages: Record<string, object>) {
    if (this.i18nInstance) {
      this.i18nInstance.global.setLocaleMessage(locale, messages);
      return;
    }
    console.warn('I18n instance is not available, cannot add locale');
  }

  hasI18n() {
    return !!this.i18nInstance;
  }
}

export default new I18nService();
