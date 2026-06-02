#!/bin/bash
hugo mod tidy
hugo mod npm pack
npm install
hugo --minify