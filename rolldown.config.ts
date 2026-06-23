import { defineConfig, InputOption } from 'rolldown'
import { dts } from 'rolldown-plugin-dts'
import { version } from './package.json' with { type: 'json' }

const banner = `/*! @nrk/core-icons v${version} */`
const input: InputOption = [
  'lib/effective.ts',
  'lib/expressive.ts',
  'lib/logo.ts',
  'lib/compat/compat-logo-large.ts',
  'lib/compat/compat-jsx-effective.tsx',
  'lib/compat/compat-jsx-expressive.tsx',
  'lib/compat/compat-jsx-logo.tsx',
  'lib/compat/compat-jsx-logo-large.tsx',
]

export default defineConfig([
  {
    plugins: [dts()],
    input,
    external: ['react'],
    output: [{ banner, dir: 'dist', format: 'es' }],
  },
  // commonjs compat
  {
    input,
    external: ['react'],
    output: [{ banner, dir: 'dist', format: 'cjs', entryFileNames: '[name].cjs' }],
  },
  // iife compat
  {
    input: 'lib/compat/compat-iife.js',
    output: [
      {
        banner,
        dir: 'static',
        format: 'iife',
        codeSplitting: false,
        exports: 'none',
        entryFileNames: 'core-icons-iife.js',
      },
      {
        banner,
        dir: 'static',
        format: 'iife',
        codeSplitting: false,
        exports: 'none',
        minify: true,
        entryFileNames: 'core-icons.min.js',
      },
    ],
  },
  {
    input: 'lib/compat/compat-iife-logo.js',
    output: [
      {
        banner,
        dir: 'static',
        format: 'iife',
        codeSplitting: false,
        exports: 'none',
        entryFileNames: 'core-icons-iife-logo.js',
      },
    ],
  },
])
