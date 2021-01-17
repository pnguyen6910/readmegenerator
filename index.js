const inquier = require('inquirer')
const ds = require('fs')
const until = require('util')

const writeFileAsync = until.promisify(fs.writeFile)