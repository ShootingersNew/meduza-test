import useSwitchHeaderLanguage from 'meduza-pet-header/hooks/useSwitchHeaderLanguage'
import i18n from './i18n'

const useSwitchLanguageHook = () => {
  return (languageId) => (i18n.global.locale = languageId)
}

export default [useSwitchLanguageHook, useSwitchHeaderLanguage]
