const fs = require('fs');
const path = require('path');
const { err, info, warn } = require('./tools/log')
let fileList = []
/**
 * @param {String} path
 */
function getFileList(projectPath, flag) {
  if(flag){
    fileList = []
  }
  return new Promise((resolve, reject)=>{
    fs.readdir(projectPath, (err, file)=>{
      
    })
  })
}

module.exports = {
  getFileList
}