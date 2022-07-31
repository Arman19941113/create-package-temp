import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin({ jsx: true }),
  ],
  build: {
    target: 'es2022',
    outDir: 'dist',
    lib: {
      entry: 'src/index.js',
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
