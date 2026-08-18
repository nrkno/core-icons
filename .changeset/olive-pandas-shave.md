---
"@nrk/core-icons": patch
---

Fix Android vectors rendering incorrectly in Jetpack Compose

Sub-paths were displaced when an icon's path data contained a relative moveto directly after a
closepath (`...z m-6.557 1.244`). Per the SVG spec the current point after `z` is the start of the
sub-path that was just closed, but Compose's `PathParser` applies the moveto relative to the last
*drawn* point instead, so every sub-path after the first was offset and the error accumulated.

The icons were correct in SVG and when rendered through an Android `ImageView` — the breakage only
appeared in Compose, which is how these drawables are actually consumed.

The Android vector generator now emits such movetos as equivalent absolute movetos, which both
parsers agree on. Only the affected command is rewritten, so the rest of each path is unchanged.

Note that this only changes the generator. The drawables under `android/icons/.../res/drawable` are
committed artifacts, and `generateAndroid` runs only as part of `cli sync`, so a Figma sync is
needed to regenerate them and actually ship the fix. Because the icons themselves are unchanged,
`sync` will report "Icons are up to date" and exit — it has to be run with `--force`. Doing so
rewrites a moveto in 576 of the generated drawables.
