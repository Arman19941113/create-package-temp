import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import postcssMixins from 'postcss-mixins'
import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin({ jsx: true })],
  css: {
    postcss: {
      plugins: [
        postcssMixins,
        postcssNested,
        postcssPresetEnv({
          stage: 0,
        }),
      ],
    },
  },
  build: {
    target: 'es2020',
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
    reportCompressedSize: false,
  },
})
