import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/silkie-site/',
  server: {
    host: '0.0.0.0', // Allow external access
    port: 5173
  }
})
