import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/ReactPortfolio",
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
