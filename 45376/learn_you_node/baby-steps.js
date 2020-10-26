'use strict'

const args_length = process.argv.length
let sum = 0;

for(let i = 2; i < args_length; i++){
	sum += Number(process.argv[i])
}

console.log(sum)