import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${normalizePath('./src/variable.scss')}";`
      }
    },
    postcss: {
      plugins: [
         autoprefixer({
          overrideBrowserslist: [
            "defaults",
            "not ie < 11",
            "last 2 versions",
            "> 1%",
            "iOS 7",
            "last 3 iOS versions"
          ]}
        )
      ]
    }
  },
  plugins: [react()]
})
