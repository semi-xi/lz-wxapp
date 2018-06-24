# lz-wxapp
主要是懒得每次新建一个pages的时候都要自己去创建4个文件，或者是在pages里面做一个组件开发的时候要自己创建目录

# 用法

* 安装node环境
* clone 本目录之后在根目录执行`npm link`安装到全局
* 执行`wxapp [,filename] [-s]|[-c]`

## 创建文件
如果第2个参数没有的话，默认使用目录名作为文件名新增4个文件，例如：
`a/b/c`在`c`目录下执行`wxapp`，那么就会创建`c.wxml` `c.json` `c.wxss` `c.json`

如果第2个参数有的话，使用参数作为文件名新增4个文件，例如：
`a/b/c`在`c`目录下执行`wxapp d`，那么就会创建`d.wxml` `d.json` `d.wxss` `d.json`

## 创建目录并创建同名文件

`wxapp /[filename]`例如：
`wxapp /c -s` 则会在当前目录下面创建c文件目录以及c文件
`wxapp /c/d/e -s` 则会在`/c/d/e`下面创建对应的文件

## 创建scss文件

`wxapp -s` OR `wxapp [,fileName] -s`


## 创建Component文件

`wxapp -c` 创建Component，文件内容为`src/component.js`