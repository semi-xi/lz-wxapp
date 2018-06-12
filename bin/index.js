#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let file_name = '';

let createFile = () => {
  if(!file_name) return;
  fs.writeFile(`${ file_name }.wxss`, '', (e) => {
    if(e) throw e;
    console.log(`创建文件${ file_name }.wxss成功`)
  })
  fs.writeFile(`${ file_name }.wxml`, '', (e) => {
    if(e) throw e;
    console.log(`创建文件${ file_name }.wxml成功`)
  })
  fs.writeFile(`${ file_name }.json`, '', (e) => {
    if(e) throw e;
    console.log(`创建文件${ file_name }.json`)
  })
  fs.writeFile(`${ file_name }.js`, '', (e) => {
    if(e) throw e;
    console.log(`创建文件${ file_name }.js成功`)
  })
  
}

if(process.argv[2]) {
  file_name = process.argv[2];
} else {
  let now_path = path.resolve(__dirname, '..');
  let fileArr = now_path.split(path.sep);
  file_name = fileArr[fileArr.length - 1];
}
createFile();

