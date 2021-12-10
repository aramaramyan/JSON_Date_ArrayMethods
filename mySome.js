"use strict";

// Implement array some method.

function mySome(arr, func) {
	
	if (arguments.length !== 2 || !Array.isArray(arr)) {
		return "The first argument of function mut be an arry and the second - call back function!";
	}

	for (let i = 0; i < arr.length; i++) {

		if (func(arr[i], i, arr)) {
			return true;
		}
	}

	return false;
}

console.log(mySome([1, 2, 3, 4, 5], item => item === 4)); // true
console.log(mySome([1, 2, 3, 4, 5], item => item === 7)); // flase