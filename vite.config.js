import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/myportfolio/',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env.VITE_APP_TITLE': JSON.stringify('Srishant Kumar'),
  },
})
