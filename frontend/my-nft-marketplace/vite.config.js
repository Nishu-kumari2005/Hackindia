import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    watch: {
      usePolling: true,
    },
    hmr: true, // Enable hot module replacement

    proxy: {
      '/api': {
        target: 'https://aistudio.google.com', // The API server you're accessing
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Rewrite URL to match API path
      },
    },
  }
})
