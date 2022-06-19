#!/usr/bin/env bash
set -e

BUILD_ID=$(date "+%Y%m%d_%H%M%S")

IMAGE_NAME=${IMAGE_NAME:-$(cat package.json | jq -r '.name')}
IMAGE_TAG=${IMAGE_TAG:-$(cat package.json | jq -r '.version')}

FULL_IMAGE_NAME="$IMAGE_NAME:$IMAGE_TAG"

docker build . -t $FULL_IMAGE_NAME \
  --build-arg IMAGE_NAME=$IMAGE_NAME \
  --build-arg IMAGE_TAG=$IMAGE_TAG \
  --build-arg BUILD_ID=$BUILD_ID

docker image rm $FULL_IMAGE_NAME --force
docker image prune --filter="label=build_id=$BUILD_ID" --force
