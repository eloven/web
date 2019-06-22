#!/usr/bin/env bash

node -v
npm -v

cd $(dirname $0)
cd ../

npm run package
