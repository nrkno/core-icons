# @nrk/core-icons &middot; [![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/@nrk/core-icons.svg?style=flat-square
[npm]: https://www.npmjs.org/package/@nrk/core-icons

> Icon and logo kit providing a consistent and predictable user experience across platforms and NRK services

## Documentation

https://static.nrk.no/core-icons/latest/

## Local development

First clone `@nrk/core-icons` and install its dependencies:

```bash
git clone git@github.com:nrkno/core-icons.git
cd core-icons
# Install dependencies according to package-lock-file
npm ci
npm start # Your browser will open documentation with hot reloading
```

## Building and committing

After having applied changes, remember to build before commiting and pushing your changes upstream.

See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

```bash
git checkout -b feature/my-changes
# Update the source code
npm run build
# Test to ensure integrity
npm run test
git commit -am "<type>[optional scope]: <desciption>"
git push --set-upstream origin feature/my-changes
# Make a PR to the master branch,
# Assign a developer to review your code
```

## Testing

We use [Testpack-cli](https://github.com/qwertie/testpack) to ensure published exports work as intended. In short it does the following:

- Runs `npm pack` and moves the generated archive to a sibling test folder `nrk-core-icons-testpack` (which is created if not present) to core-icons
- npm-installs React in the testpack-folder
- Copies the `test`-folder to the testpack-folder
- Runs the `testpack-script` in the testpack-folder
- Cleans up

We use [arethetypeswring/cli](https://github.com/arethetypeswrong/arethetypeswrong.github.io/tree/main/packages/cli) to verify that our type declarations are available for consumers.

- We purposefully ignore the [false-cjs](https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md)-rule as our types are generated from [@nrk/svg-to-js](https://github.com/nrkno/svg-to-js) which only gives us cjs types. We chose not to duplicate the `d.ts`-file to a `d.mts` to solve this error as it could lead to unexpected behavior for consumers.

## nvm

Uses [Node Version Manager](https://github.com/nvm-sh/nvm/blob/master/README.md#intro) (nvm) to organize node version

nvm config is saved in `.nvmrc`, set appropriate node version using:

```shell
nvm use
```

## Android

An Android package is generated that includes all icons through the `NrkIcons` object, including expressive variants

The latest version is found under the [Publish Android job](https://github.com/nrkno/core-icons/actions/workflows/publish-android.yml) under the `Publish Android` part (look for `Maven published version: <version>`). Add the library as a depdenceny with `implementation "no.nrk.core:icons:<version>"` (or if more convenient in a core module with `api("no.nrk.core:icons:<version>")`)

To find the package add a maven block to your `build.gradle` file:

```
repositories {
    maven {
        url = uri("https://maven.pkg.github.com/nrkno/*")
    }
}
```

### Usage

This library makes it easy to use NRK icons, as well as providing utility to switch between expressive and regular icon variants. See also the [demo app](/android/app/src/main/kotlin/no/nrk/core/icons/MainActivity.kt).

For Compose provide `LocalUseExpressiveIcons` at a convenient place, such as in a base theme, and use the icons as shown and it will automatically change between normal and expressive variants:

```kotlin
// Provide a value based on some sort of condition
CompositionLocalProvider(LocalUseExpressiveIcons provides true) {
    Icon(
        painter = NrkIcons.NrkMediaPlay.asPainter(),
        contentDescription = ""
    )
}
```

For Views you must add some sort of extension method to retrieve the icon as a drawable:
```kotlin
fun NrkIcon.asDrawable(context: Context): Drawable? {
    val useExpressiveIcon = true // Some condition

    return ContextCompat.getDrawable(
        context,
        if (useExpressiveIcon) {
            expressive ?: normal
        } else {
            normal
        }
    )
}
```

### Local development

To test the script that generates the drawables and Kotlin code locally run `node .github\scripts\generate-android-vectors.js`

Use `gradlew publishToMavenLocal` to publish a version locally on your machine to test in other projects
