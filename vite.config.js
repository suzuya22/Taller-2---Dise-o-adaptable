import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Taller-2---Dise-o-adaptable/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})