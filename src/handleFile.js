const type = require('./tools/type')

class handleFile {
  // 项目路径projectPath；
  projectPath = ''
  // 待删除的文件列表delFileList；
  delFileList = []
  // 过滤不处理的文件ignoreList
  ignoreList = []
  
  /**
   * @param {?String} projectPath 
   * @param {?Array}  delFileList
   * @param {?Array}  ignoreList
   */
  constructor(projectPath, delFileList, ignoreList) {
    this.projectPath = type.isString(projectPath) ? projectPath : ''
    this.deleteFile = delFileList ? delFileList : []
    this.ignoreList = ignoreList ? ignoreList : []
  }

  /**
   * @description 设置项目路径
   * @param {String} path
   */
  setProjectPath(path){
    this.projectPath = path
  }

  /**
   * @description 获取项目路径
   */
  getProjectPath(){
    return this.projectPath
  }

}

module.exports = handleFile