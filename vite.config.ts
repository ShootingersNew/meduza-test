import { fileURLToPath, URL } from 'node:url'

import federation from '@originjs/vite-plugin-federation'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, loadEnv } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      federation({
        name: 'host',
        filename: 'host.js',
        shared: ['vue', 'vue-i18n', 'pinia'],
        remotes: {
          'meduza-pet-header': `${env.VITE_HEADER_REMOTE}/header-assets/meduzaHeader.js`,
          'meduza-pet-footer': `${env.VITE_FOOTER_REMOTE}/footer-assets/meduzaFooter.js`,
        },
        exposes: {
          './NavigationService': './src/shared/navigation/NavigationService.ts',
          './I18nService': './src/shared/i18n/I18nService.ts',
          './useCustomRoute': './src/shared/navigation/useCustomRoute.ts',
        },
      }),
    ],
    build: {
      target: 'esnext',
      assetsDir: 'host-assets',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    preview: {
      port: 5000,
    },
    server: {
      cors: true,
      port: 5000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  }
})
