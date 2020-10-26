'use strict'

module.exports = function Spy(target, method) { 
	let result = {count: 0};

	let saveMethod = target[method]
	
	target[method] = function(){
		result.count++
		return saveMethod.apply(this, arguments)	
	}
	
	return result
}


/*
	var spy = Spy(console, 'error')

    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')

    console.log(spy.count) // 3
*/
