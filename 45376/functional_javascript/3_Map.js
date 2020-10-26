'use strict'

module.exports = function doubleAll(numbers) {
    let result = numbers.map(x => x * 2)
    return result
}

/* module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2                                   SOLUTION
      })
   }
*/


/*
function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)                     ARRAY FORM
      }
      return result
    }
*/
