---
'@nrk/core-icons': minor
---

Fixed SVG generation for monochrome logos.

All logos were exported from Figma with no changes to `fill` colors. Monochrome logos are now
exported with `fill="currentColor"`, so their colors can be controlled by the implementation.

Monochrome logos are identified by their name not containing any of these suffixes:

- `-on-light`
- `-on-dark`
- `-with-bg`
- `-color`
- `-blackwhite`
