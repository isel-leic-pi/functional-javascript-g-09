'use strict'

var slice = Array.prototype.slice
module.exports = function curryN(fn, n) {
	if(typeof n !== 'number') n = fn.length
		
	return function(args) {
		if(n > 1){
			return curryN(fn.bind(this, args), n - 1)
		}
		return fn(args)
	}
	
}

