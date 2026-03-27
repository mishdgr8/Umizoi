import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animation': ['framer-motion', 'gsap', 'lenis'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    minify: 'esbuild', // Default, faster minification without external dependency
  },
})
