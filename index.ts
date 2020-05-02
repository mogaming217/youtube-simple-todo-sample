import * as fs from 'fs'

const data = fs.readFileSync('./.gitignore').toString()
console.log(data)
