
const path = require('path');

console.log("Directory Name:", __dirname)
console.log("File Name:", __filename)


// School Management System

const filepath = path.join("home", "Students", "results.pdf")

console.log(filepath)


const parsedDataPath = path.parse(filepath)
const resolvedPath = path.resolve(filepath)
const extName = path.extname(filepath)
const baseName = path.basename(filepath)
const dirName =path.dirname(filepath)



console.log({
    parsedDataPath,
    resolvedPath,
    extName,
    baseName,
    dirName
})