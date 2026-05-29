import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const DOMAIN = 'https://www.saltexporter.com'

const routes = [
  '/',
  '/about',
  '/contact',
  '/products/edible-salt',
  '/products/industrial-salt',
  '/products/specialty-industrial-salt',
  '/products/salt-tablet',
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: DOMAIN,
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: 0.8,
      readable: true,
      // Override priority for high-value pages
      outDir: 'dist',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // Split large vendor libs into separate cacheable chunks
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-gsap': ['gsap'],
          'vendor-helmet': ['react-helmet-async'],
        },
      },
    },
    // Warn if a chunk exceeds 500 kB
    chunkSizeWarningLimit: 500,
  },
})
