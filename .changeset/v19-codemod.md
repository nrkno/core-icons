---
"@nrk/core-icons": minor
---

**Minor changes**

- Added `core-icons-codemod`, a zero-dependency codemod that migrates consuming projects to the v19 naming scheme: `npx --package=@nrk/core-icons core-icons-codemod src/`
- Fixed the "New `camelCase` export" column for `@nrk/core-icons/logo` in `docs/new-naming-scheme.md` and `docs/public/new-naming-scheme.csv` — it showed an `Icon` suffix, but logo exports end in `Logo` (e.g. `nrkLogoNrk3` → `nrk3Logo`, not `nrk3Icon`)
