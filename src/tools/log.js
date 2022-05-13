/**
 * 控制台输出
 */
const chalk = require('chalk')

/**
 * @description 错误输出
 * @param {*} i 
 */
const err = (i) => {
  console.log(chalk.red('错误: '+i))
}

/**
 * @description 输出提示
 * @param {*} i
 */
const warn = (i) => {
  console.log(chalk.yellow('警告: '+i))
}

/**
 * @description 成功提示
 * @param {*} i 
 */
const info = (i) => {
  console.log(chalk.green(i))
}

module.exports = {
  err, warn, info
}