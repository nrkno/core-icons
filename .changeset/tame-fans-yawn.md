---
"@nrk/core-icons": patch
---

core-icons-codemod now rewrites `.astro` files

Astro component frontmatter is plain ESM, so the existing regex-based transform already handles it —
the files were just excluded by the extension filter in the directory walk. Icon usages in the
template body are renamed by the same body-rename pass that covers `.vue` and `.svelte` files.
