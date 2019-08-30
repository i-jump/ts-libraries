#!/usr/bin/env bash

# 删除编译后代码
rm -rf ./lib ./dist
# 编译代码
npm run build
# 设置源地址
npm config set registry=

echo '\033[0;32m > 设置源成功 \033[1;32m'

echo '\033[0;36m > 开始发布：\033[0;36m'

# 执行登陆流程
npm login

# 执行发布流程
npm publish

