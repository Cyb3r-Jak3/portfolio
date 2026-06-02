#!/bin/bash
set -ex
hugo mod tidy
hugo mod npm pack
npm install
hugo --minify "$@"