'use strict'

function repeat(operation, num) {                      //     
    if (num <= 0) return null                          //     Se   em   vez   de  repeat
    operation() 									   //     executar       diretamente
    return function () {                               //     as  restantes   operações,  
		return repeat(operation, --num)                //     este   vai   retornar  uma
	}                                                  //     função que ao ser invocada
}                                                      //     vai realizar  os seguintes 
                                                       //     passos,  mantendo  o stack
function trampoline(fn) {                              //     sempre  ao   mesmo  nível.
	while(fn) {                                        //     Deste modo, a função passa
		fn = fn()                                      //     de  recursiva  a  ter  uma
	}                                                  //     implementação    iterativa
}                                                      //

module.exports = function(operation, num) {
    return trampoline (function() {
		repeat(operation, num)
	})
}


//SOLUTION
/*
function repeat(operation, num) {
    return function() {
		if (num <= 0) return
		operation()
		return repeat(operation, --num)
	}
}

function trampoline(fn) {
	while(fn && typeof fn === 'function') {
		fn = fn()
	}
}

module.exports = function(operation, num) {
	trampoline(function() {
		return repeat(operation, num)
	})
}
*/
