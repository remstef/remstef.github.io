#!/bin/env bash

curl -sS -D - -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "remstef.github.io",
    "key": "338eab8da9234817918d9a14e7fb06b2",
    "keyLocation": "https://remstef.github.io/338eab8da9234817918d9a14e7fb06b2.txt",
    "urlList": [
      "https://remstef.github.io/",
      "https://remstef.github.io/about",
      "https://remstef.github.io/cv",
      "https://remstef.github.io/publications"
    ]
  }'


# https://www.bing.com/indexnow
# https://api.indexnow.org/indexnow
# Yandex
# Naver


# Seznam.cz
# Yep