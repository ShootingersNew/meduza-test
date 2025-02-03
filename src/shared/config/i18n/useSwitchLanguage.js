import allHooks from './hooks'

const useSwitchLanguage = () => {
  const switchAllLanguages = (languageCode) => {
    allHooks.forEach((hook) => {
      if (!hook) return
      hook()(languageCode)
    })
  }

  return { switchAllLanguages }
}

export default useSwitchLanguage
