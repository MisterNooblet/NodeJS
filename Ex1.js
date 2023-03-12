const fs = require('fs')

fs.writeFileSync('newFile.txt', 'This is a new file!')
fs.copyFileSync('newFile.txt', 'newFileCopy.txt')
fs.renameSync('newFileCopy.txt', 'newFileCopyRenamed.txt')
console.log(fs.readdirSync('./'));
console.log(fs.statSync('newFileCopyRenamed.txt'));