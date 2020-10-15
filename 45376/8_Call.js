'use strict'

//V1
module.exports = function duckCount() { 
	return Array.prototype.filter.call(arguments, (function(object){   //arguments = this
		return Object.prototype.hasOwnProperty.call(object, 'quack')
	})).length
}


//V2
module.exports = function duckCount() { 
	arguments.filter = Array.prototype.filter
	return arguments.filter(function(object){   
		return Object.prototype.hasOwnProperty.call(object, 'quack')
	}).length
}
