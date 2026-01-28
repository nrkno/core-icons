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

See the [installation guide](https://static.nrk.no/core-icons/latest/index.html#using-android) and [usage guide](https://static.nrk.no/core-icons/latest/index.html#android).

### Local development

- `node .github\scripts\generate-android-vectors.js` runs the script that converts SVGs to Android XML drawables
- `gradlew publishToMavenLocal` builds and publishes a new version locally on your machine that can be used in other projects

### Icons with rendering artifacts

If an icon has artifacts or other rendering bugs in a different project you should:
- Ask a designer for an updated icon (see for instance [this PR](https://github.com/nrkno/core-icons/pull/394) which fixed two logos with rendering artifacts)
- Add the icon the relevant folder locally
- Run through the steps above to build a new version of the library locally and use this in your project. Do not test the new icon by manually importing it into your project which uses Android Studios SVG -> XML conversion. The issue might be partly with the way the library converts the SVG, the icon might look normal when manually importing it
- If the new icon looks good open a PR with only the updated SVGs. Stash the XML drawable changes and let the Github action publish a new version of the library
