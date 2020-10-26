'use strict'

const fs = require('fs')
const buffer = fs.readFileSync(process.argv[2]) //buffer = array of data
const str = buffer.toString().split('\n')

let count = 0
str.forEach(s => count++)

if(count != 0) count--

console.log(count)

/*
'use strict'
    const fs = require('fs')

    const contents = fs.readFileSync(process.argv[2])
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
*/