import * as path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueJsx(),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'package': path.resolve(__dirname, '../src'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
    strictPort: true,
    https: false,
    open: true,
  },
  build: {
    target: 'es2022',
    outDir: '../dist-demo',
    assetsDir: 'assets',
    assetsInlineLimit: 20 * 1024,
    sourcemap: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 4 * 1024,
  },
})
