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
      name: 'meduza-pet',
      shared: ['vue'],
      remotes: {
        'meduza-pet-header': 'http://localhost:5005/assets/meduzaHeader.js',
      },
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
})
