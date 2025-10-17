import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteCompression from 'vite-plugin-compression'
import { VitePWA } from 'vite-plugin-pwa'
import replace from '@rollup/plugin-replace'
import { visualizer } from 'rollup-plugin-visualizer'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-direct-import', { modules: ['lucide-react'] }]
        ]
      }
    }),

    viteCompression({
      algorithm: 'brotli',
      threshold: 512,
    }),

    viteCompression({
      algorithm: 'gzip',
      threshold: 512,
    }),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'HSC Builders',
        short_name: 'HSC Builders',
        description: 'HSC Builders landing page',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),

    visualizer({
      filename: 'stats.html',
      open: false
    }),

    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    terser(),
  ],

  // ✅ CRUCIAL FIX FOR NETLIFY DEPLOYMENTS
  base: "./",

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  },

  server: {
    port: 5173,
    open: true,
  },
})
