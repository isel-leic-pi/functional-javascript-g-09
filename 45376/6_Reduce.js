'use strict'

module.exports = function countWords(inputWords) {
    return inputWords.reduce(function(accumulator, currentValue){
		if(accumulator[currentValue] == null){
			accumulator[currentValue] = 1
		} else {
			accumulator[currentValue] = accumulator[currentValue] + 1
		}
		return accumulator
	}, {})
}