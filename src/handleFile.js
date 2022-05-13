const type = require('./tools/type')
const { err, info, warn } = require('./tools/log')

class handleFile {
  // 项目路径projectPath；
  projectPath = ''
  // 待删除的文件列表delFileList；
  delFileList = []
  // 过滤不处理的文件夹ignoreList
  ignoreList = []
  // 读取的项目中的文件列表
  fileList = []
  
  /**
   * @param {?String} projectPath 
   * @param {?Array}  delFileList
   * @param {?Array}  ignoreList
   */
  constructor(projectPath, delFileList, ignoreList) {
    this.projectPath = projectPath ? projectPath : ''
    this.delFileList = delFileList ? delFileList : []
    this.ignoreList = ignoreList ? ignoreList : []
  }

  /**
   * @description 设置项目路径
   * @param {String} path
   */
  setProjectPath(path){
    if(type.isNull(path)){
      err('缺少参数')
      return
    }
    this.projectPath = path
  }

  /**
   * @description 获取项目路径
   */
  getProjectPath(){
    if(this.projectPath){
      return this.projectPath
    }else{
      warn('暂未设置项目路径')
    }
  }

  /**
   * @description 设置要删除的文件
   * @param {Array} fileList 
   */
  setDelFileList(fileList) {
    if (type.isArray(fileList)){
      this.delFileList = fileList
    } else {
      err('参数类型错误，Must be array')
    }
  }

  /**
   * @description 获取要删除的文件列表
   */
  getDelFileList () {
    if(this.fileList.length==0){
      warn('暂未设置需删除的文件')
    }else{
      return this.delFileList
    }
  }

  /**
   * @description 设置需过滤的文件列表
   * @param {Array} list 
   */
  setIgnoreList(list){
    if(type.isArray(list)){
      this.ignoreList = list
    }else{
      err('参数类型错误，Must be array')
    }
  }

  /**
   * @description 获取需过滤的文件列表
   */
  getIgnoreList(){
    if(this.ignoreList.length==0){
      warn('暂未设置需过滤的文件列表')
    }else{
      return this.ignoreList
    }
  }

  /**
   * @description 读取项目文件
   */
  readAllFile(){
    if(this.projectPath==''){
      warn('暂未设置项目路径')
      return
    }
  }

}

module.exports = handleFile