#!/bin/bash

if [ -d "./dist" ]; then
rm -rf ./dist
fi

if [ -d "./.rts2_cache_cjs" ]; then
rm -rf ./.rts2_cache_cjs
fi

if [ -d "./.rts2_cache_esm" ]; then
rm -rf ./.rts2_cache_esm
fi
printf "%-10s %-8s %-4s\n" 打包结束
