import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'
import removeConsole from 'vite-plugin-remove-console'

export default defineConfig({
  base: './',
  build: {
    outDir: './docs',
  },
  plugins: [
    vue(),
    vueJsx(),
    eslintPlugin(),
    removeConsole(),
    stylelintPlugin({ fix: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variable.scss" as *;
        `,
      },
    },
  },
})
