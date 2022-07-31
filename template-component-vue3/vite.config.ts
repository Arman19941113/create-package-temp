import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  build: {
    target: 'es2022',
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: format => format === 'es' ? 'index.esm.js' : 'index.cjs.js',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'es',
      },
    },
  },
})
