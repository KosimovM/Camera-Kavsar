import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://37.27.249.153:5990',
        changeOrigin: true,
      },
      '/images': {
        target: 'http://37.27.249.153:5990',
        changeOrigin: true,
      }
    }
  }
})
