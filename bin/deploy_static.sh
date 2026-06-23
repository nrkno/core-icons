#!/usr/bin/env bash

set -e 

npm run build
npx static-publish \
  --package=@nrk/static-publish-cli \
  --directory=static \
  --account=nrk-core \
  --latest \
  --major
