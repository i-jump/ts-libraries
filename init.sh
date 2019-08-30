#!/bin/bash
printf "%-10s %-8s %-4s\n" 打包前初始化...
if [ -d "./dist" ]; then
rm -rf ./dist
fi

if [ -d "./lib" ]; then
rm -rf ./lib
fi

if [ -d "./.rts2_cache_cjs" ]; then
rm -rf ./.rts2_cache_cjs
fi

if [ -d "./.rts2_cache_esm" ]; then
rm -rf ./.rts2_cache_esm
fi
