"use strict";

// Implement array Map method.

function myForEach(arr, func) {
	if (arguments.length !== 2 || !Array.isArray(arr)) {
		return "The first argument of function mut be an arry and the second - call back function!";
	}

	const newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr[i] = func(arr[i]);
	}

	return newArr;
}

console.log(myForEach([1, 2, 3], item => item += 5)); // [6, 7, 8]