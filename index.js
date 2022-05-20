/**
 * @author hwg
 * @version 1.0
 */
const handleFile = require('./src/handleFile')

async function demo() {
  const app = new handleFile()
  await app.setProjectPath('C:/Users/Administrator/Desktop/common-miniprogram.zhihuipk.com')
  const fileList = await app.readAllFile()
  console.log(fileList)
}

demo()