import { defineConfig } from 'vite'
import pkg from '../package.json' with { type: 'json' }

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? `/core-icons/${pkg.version}/` : '/',
    build: {
      outDir: '../static',
    },
  }
})
