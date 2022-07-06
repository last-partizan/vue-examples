import vue from '@vitejs/plugin-vue2'
import {defineConfig} from 'vite'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: resolve(__dirname, 'src') + '/$1'
      }
    ]
  }
})
