#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let file_name = '';
let file_path = '';
let suffix = '';
let cmd2 = process.argv[2];
let cmd3 = process.argv[3];
let cmd4 = process.argv[4];
let pageFile = path.join(__dirname, '../src/page.js');
let componentFile = path.join(__dirname, '../src/component.js');
let rs = '';

let createFile = (fileName, suffix, path) => {
  if(!fileName) return;
  fs.writeFileSync(`${ path + fileName }.${ suffix || 'wxss' }`, '',)
  fs.writeFileSync(`${ path + fileName }.wxml`, '', )
  fs.writeFileSync(`${ path +fileName }.json`, '{}', )
  
  
  // fs.readFile(pageFile, 'utf8', (error, data) => {
  //   if(error) throw err;
  //   fs.writeFileSync(`${ path + fileName }.js`, 'Page({\nonLoad(){\n\n}\n})', )
  // })
  if(cmd3 == '-c' || cmd4 == '-c') {
    rs = fs.createReadStream(componentFile)
  } else {
    rs = fs.createReadStream(pageFile);
  }
  let ws = fs.createWriteStream(`${ path + fileName }.js`);
  rs.pipe(ws, { end: false });

  console.log(`${ fileName }文件创建成功`)
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
