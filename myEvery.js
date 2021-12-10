"use strict";

// Implement array every method.

function myEvery(arr, func) {

	if (arguments.length !== 2 || !Array.isArray(arr)) {
		return "The first argument of function mut be an arry and the second - call back function!";
	}

	for (let i = 0; i < arr.length; i++) {

		if (!func(arr[i], i, arr)) {
			return false;
		}
	}

	return true;
}

console.log(myEvery([1, 2, 3, 4, 5], item => item === 1)); // false
console.log(myEvery([5, 5, 5, 5, 5], item => item === 5)); //true