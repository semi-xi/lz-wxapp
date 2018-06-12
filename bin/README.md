# 懒人创建微信小程序文件
因为连自动创建那4个文件都懒了，所以就干脆写了个创建4个文件的cli  ORZ

# 用法

* 安装node环境

* 在本目录执行`npm link` 创建到全局的环境变量

* 执行`wxapp [fileName]`



不带第2个参数的话就按照当前目录作为文件名，例如：
`a/b/c` 在`c`目录下执行`wxapp` 那么就会创建`c.wxml` `c.wxss` `c.json` `c.js`;

如果带第2个参数的话就用第2个参数作为文件名，例如
`a/b/c` 在`c`目录下执行`wxapp d` 那么就会创建`d.wxml` `d.wxss` `d.json` `d.js`;