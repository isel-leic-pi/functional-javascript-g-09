'use strict'

module.exports = function arrayMap(arr, fn) { 
	let arrMap = []
	arr.reduce(function(prev, curr, idx, arr) {
		arrMap.push(fn(curr))
    }, null)
	return arrMap
}

