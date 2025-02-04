import useSwitchHeaderLanguage from 'meduza-pet-header/hooks/useSwitchHeaderLanguage'
import i18n, { type TMessages } from './i18n'

const useSwitchLanguageHook:()=>(languageId:TMessages)=>void = () => {
  return (languageId) => (i18n.global.locale = languageId)
}

export default [useSwitchLanguageHook, useSwitchHeaderLanguage]
