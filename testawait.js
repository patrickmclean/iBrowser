const fs = require('fs');
const path = require('path');
const util = require('util');
const asyncLimit = require('./asynclimit');
const s3 = require('./awss3');

const readDir = asyncLimit(util.promisify(fs.readdir),3);
const readFile = asyncLimit(util.promisify(fs.readFile),3);
const stat = asyncLimit(util.promisify(fs.stat),2);

const dir = '/Users/patrickmclean/Pictures/Test/1997/9706sf';

/*
const readAllFiles = async (paths) => {
  console.log('readfiles'+paths);
  return await Promise.all(paths.map(p => {
    console.log(p);
    let file = path.resolve(dir, p);
    readFile(file, 'utf8')
      .then(result => console.log('file read '+path.basename(file)))
      .catch(err => console.log(err));
  }))
}

s3.uploadThumbnail(23,'abcd');


/*
console.log('start');
readDir(dir)
.then (files => readAllFiles(files))
.catch (err => console.log(err))


let timer = function() {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){resolve('Success')},1000);
  })
}
const limitedTimer = asyncLimit(timer,3);
*/

let timer = async function() {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){resolve('Success')},1000);
  })
}

console.log('starting');
await timer();
console.log('here ');


