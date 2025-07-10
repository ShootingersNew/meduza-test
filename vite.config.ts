import { fileURLToPath, URL } from 'node:url'

import federation from "@originjs/vite-plugin-federation"
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    federation({
      name: 'host',
      filename: "host.js",
      shared: ['vue', 'vue-i18n','pinia'],
      remotes: {
        'meduza-pet-header': 'http://localhost:5005/assets/meduzaHeader.js',
        'meduza-pet-footer': 'http://localhost:5006/assets/meduzaFooter.js',
      },
      exposes: {
        './NavigationService': './src/shared/navigation/NavigationService.ts',
        './I18nService': './src/shared/i18n/I18nService.ts',
        './useCustomRoute': './src/shared/navigation/useCustomRoute.ts',
      }
    }),
  ],
  build:{
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  preview:{
    port: 5000,
  },
  server: {
    cors: true,
    port: 5000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
