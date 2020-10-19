'use strict'  
  
var slice = Array.prototype.slice

module.exports = function logger(namespace) {
    return function() {
		console.log.apply(null /* console */, [namespace].concat(slice.call(arguments)))
    }
}

/*
var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
*/