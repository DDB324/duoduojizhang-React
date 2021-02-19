#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd build

git init
git add -A
git commit -m 'website'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>

# 推送到github
 git push -f git@github.com:DDB324/duoduojizhang-react-website.git master:main

# 推送到gitee
 git push -f git@gitee.com:ddb324/duoduojizhang-react-website.git master:main

cd -