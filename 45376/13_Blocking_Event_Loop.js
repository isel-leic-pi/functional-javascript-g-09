'use strict'

module.exports = function repeat(operation, num) { 
	if(num <= 0) return
	operation()
	setImmediate(function () {                      // evento vai ser colocado na lista
		repeat(operation, num - 1)                  // para ser executado imediatamente 
	})                                              // após os existentes na mesma
} 



//SOLUTION
/*module.exports = function repeat(operation, num) {
    if (num <= 0) return

    operation()

    // release control every 10 or so
    // iterations.
    // 10 is arbitrary.
    if (num % 10 === 0) {
	setTimeout(function() {
		repeat(operation, --num)
    })
    } else {
		repeat(operation, --num)
    }
}
*/

