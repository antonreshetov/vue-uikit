const fs = require('fs')
const path = require('path')
const config = require('../config/config')

let file = fs
  .readFileSync(path.join(__dirname, '../dist/index.html'))
  .toString()
  .split('\n')

file.splice(7, 0, config.yaVerify)
file.splice(file.length - 3, 0, config.yaScript)
let text = file.join('\n')

fs.writeFile(path.join(__dirname, '../dist/index.html'), text, err => {
  if (err) return console.log(err)
})
