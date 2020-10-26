'use strict'

module.exports = function(namespace) { 
	return console.log.bind(null /* console */, namespace)
}

/*
var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
*/