/// <reference types="vite/client" />

declare module '#lib/manifest.json' {
  const manifest: import('#src/manifest.ts').Manifest
  export default manifest
}

declare module 'libnpmversion' {
  export default function npmVersion(
    version: string,
    options?: Record<string, unknown>,
  ): Promise<string>
}
