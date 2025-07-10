import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import I18nService from '../I18nService'

describe('I18nService', () => {
  let originalI18n: any
  let mockI18n: any

  beforeEach(() => {
    originalI18n = window.i18n
    mockI18n = {
      global: {
        locale: { value: 'en' },
        setLocaleMessage: vi.fn()
      }
    }
    window.i18n = mockI18n
  })

  afterEach(() => {
    window.i18n = originalI18n
  })

  it('should get i18n instance from window', () => {
    expect(I18nService.i18n).toBe(mockI18n)
  })

  it('should change locale', () => {
    I18nService.changeLocale('ru')
    expect(mockI18n.global.locale.value).toBe('ru')
  })

  it('should add locale messages', () => {
    const messages = { hello: 'cringe' }
    const localeMessages = {cringe: messages}
    I18nService.addLocale('ru',localeMessages)
    expect(mockI18n.global.setLocaleMessage).toHaveBeenCalledWith('ru', localeMessages)
  })

  it('should report i18n availability', () => {
    expect(I18nService.hasI18n()).toBe(true)
  })
})
