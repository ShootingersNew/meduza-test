# Localization

### How to add a new language

1. Add a new JSON file to the `locales` folder and then import your file to `i18n.ts`:

   ```javascript
   import yourLanguage from './locales/fr.json'

   const messages = {
     ...otherLocales,
     yourLanguage,
   }
   ```

### New micro frontends

If you want to add a new micro frontend to this host, follow these steps:

1. Initialize i18n:

   ```javascript
   import { createI18n } from 'vue-i18n'

   const messages = {
     en,
     ru,
   }

   const i18n = createI18n({
     // ...your code
   })

   export default i18n
   ```

2. Add a hook for your instance of i18n:

   ```javascript
   import appBInstance from './i18n'

   const useSwitchLanguage = () => {
     return (languageId) => (appBInstance.global.locale = languageId)
   }

   export default useSwitchLanguage
   ```

3. Expose this hook:

   ```javascript
   federation({
     exposes: {
       './anyMicroFrontend': './src/App.vue',
       './hooks/useSwitchAnyNameOfMicroFrontendLanguage': './path/useSwitchLanguage',
     },
   })
   ```

4. Find `config/i18n/hooks.js` in this folder and import your hook:

   ```javascript
   import yourHook from 'yourApp/hooks/useSwitchAnyNameOfMicroFrontendLanguage'
   ```

   Then just add this import to export:

   ```javascript
   export default [...hooks, yourHook]
   ```
