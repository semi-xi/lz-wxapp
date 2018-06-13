#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let file_name = '';
let file_path = '';
let suffix = '';
let cmd2 = process.argv[2];
let cmd3 = process.argv[3];
let createFile = (fileName, suffix, path) => {
  if(!fileName) return;
  fs.writeFileSync(`${ path + fileName }.${ suffix || 'wxss' }`, '',)
  fs.writeFileSync(`${ path + fileName }.wxml`, '', )
  fs.writeFileSync(`${ path +fileName }.json`, '{}', )
  fs.writeFileSync(`${ path + fileName }.js`, '', )
}

let syncCreateFile = (dirname) => {
  if(fs.existsSync(dirname)) {
    return true;
  } else {
    if(syncCreateFile(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}
if(cmd2 && cmd2.toLocaleLowerCase() != '-s') {
  if(cmd2.split('/').length > 1) {
    let file_list = cmd2.split('/');
    file_name = file_list[file_list.length - 1];
    file_path = cmd2 + '/';
    if(file_path[0] === '/') {
      file_path = file_path.substr(1);
    }
    syncCreateFile(file_path);
  } else {
    file_name = cmd2;
  }
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

createFile(file_name, suffix, file_path)
