#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let file_name = '';
let suffix = '';
let cmd2 = process.argv[2];
let cmd3 = process.argv[3];
let createFile = (fileName, suffix) => {
  if(!fileName) return;
  fs.writeFile(`${ fileName }.${ suffix || 'wxss' }`, '', (e) => {
    if(e) throw e;
    console.log(`创建文件${ fileName }.${ suffix || 'wxss' }成功`)
  })
  fs.writeFile(`${ fileName }.wxml`, '', (e) => {
    if(e) throw e;
    console.log(`创建文件${ fileName }.wxml成功`)
  })
  fs.writeFile(`${ fileName }.json`, '{}', (e) => {
    if(e) throw e;
    console.log(`创建文件${ fileName }.json`)
  })
  fs.writeFile(`${ fileName }.js`, '', (e) => {
    if(e) throw e;
    console.log(`创建文件${ fileName }.js成功`)
  })
  
}
if(cmd2 && cmd2.toLocaleLowerCase() != '-s') {
  file_name = process.argv[2];
  if(cmd3 && cmd3.toLocaleLowerCase() == '-s') {
    suffix = `scss`
  }
} else {
  let now_path = process.cwd();
  let fileArr = now_path.split(path.sep);
  file_name = fileArr[fileArr.length - 1];
  if(cmd2 && cmd2.toLocaleLowerCase() == '-s') {
    suffix ='scss';
  }
}
createFile(file_name, suffix);

