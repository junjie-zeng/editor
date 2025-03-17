import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8087,
    host:'0.0.0.0'
  },
  resolve: {
    alias: {
      // 'ui': path.resolve(__dirname, '../ui/src'),
      // vue$: path.resolve(__dirname, './node_modules/vue'),
    },
  },
})
