const type = require('./tools/type')
const { err, info, warn } = require('./tools/log')
const { getFileList } = require('./projectFileList')
const fs = require('fs')

class handleFile {
  projectPath = null   // 项目路径projectPath
  output = './useless-files-list.json' // 输出路径output
  ignoreList = []   // 过滤不处理的文件夹ignoreList，相对路径
  delete = false    // 是否获取结果后删除
  fileSuffix = []   // 主要针对的文件的后缀，默认全部文件

  /**
   * @param {Object} options
   */
  constructor(options) {
    this.projectPath = options.projectPath ? options.projectPath : null
    this.output = options.output ? options.output : this.output
    this.ignoreList = options.ignoreList ? options.ignoreList : []
    this.delete = options.delete ? options.delete : false
    this.fileSuffix = options.fileSuffix ? options.fileSuffix : []
    if(!this.projectPath) throw new Error('未配置项目路径 projectPath is need')
  }

  /**
   * @description 设置项目路径
   * @param {String} path
   */
  setProjectPath(path){
    if(type.isNull(path)){
      err('缺少项目路径参数')
      return
    }
    return new Promise((resolve, reject)=>{
      fs.access(path, fs.constants.F_OK, (error) => {
        if (error) {
          err('项目文件不存在: ' + error)
          reject(error)
        } else {
          resolve(true)
          this.projectPath = path
        }
      })
    })
    
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
    }else{
      return new Promise(async(resolve, reject)=>{
        try {
          const f = await getFileList(this.projectPath, true)
          resolve(f)
        } catch (error) {
          reject(error)
        }
      })
    }
    
  }

}

module.exports = handleFile