import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const DOMAIN = 'https://www.saltexporter.com'

const routes = [
  '/',
  '/about',
  '/management',
  '/contact',
  '/products/edible-salt',
  '/products/industrial-salt',
  '/products/specialty-industrial-salt',
  '/products/salt-tablet',
  '/blog',
  '/blog/how-to-make-salt-in-india',
  '/blog/is-there-tax-on-salt-in-india',
  '/blog/where-is-salt-found-in-india',
  '/blog/does-india-have-salt-mines',
  '/blog/salt-export-from-india-to-which-country',
]

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [
    react(),
    // Only generate sitemap during client build, not SSR build
    ...(mode !== 'ssr' ? [
      sitemap({
        hostname: DOMAIN,
        dynamicRoutes: routes,
        changefreq: 'weekly',
        priority: 0.8,
        readable: true,
        outDir: 'dist',
      }),
    ] : []),
  ],
  build: {
    rollupOptions: {
      output: mode !== 'ssr' ? {
        // Split large vendor libs into separate cacheable chunks during client build only
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-gsap': ['gsap'],
          'vendor-helmet': ['react-helmet-async'],
        },
      } : undefined,
    },
    // Warn if a chunk exceeds 500 kB
    chunkSizeWarningLimit: 500,
  },
}))
