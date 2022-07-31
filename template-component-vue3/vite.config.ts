import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcssMixins from 'postcss-mixins'
// @ts-ignore ignore
import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
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
    reportCompressedSize: false,
  },
})
