#!/bin/bash
set -e
npm i
npm i --save-dev
npm run docker:setup
npm run docker:up