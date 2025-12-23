import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  // SSG options for static site generation
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      preload: 'swap',
      inlineFonts: true
    }
  },

  // Build optimizations
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },

    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          'animation': ['motion', 'lenis']
        }
      }
    },

    // Asset optimization
    assetsInlineLimit: 4096,

    // CSS code splitting
    cssCodeSplit: true,

    // Source maps for production (disable for smaller builds)
    sourcemap: false,

    // Target modern browsers for smaller bundles
    target: 'es2020'
  },

  // CSS optimization
  css: {
    devSourcemap: true
  },

  // Optimize deps
  optimizeDeps: {
    include: ['vue', 'vue-router', 'motion']
  }
})
