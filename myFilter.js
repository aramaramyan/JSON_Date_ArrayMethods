"use strict";

// Implement array Filter method.

function myFilter(arr, func) {
	if (arguments.length !== 2 || !Array.isArray(arr)) {
		return "The first argument of function mut be an arry and the second - call back function!";
	}

	const newArr = [];

	for (let i = 0; i < arr.length; i++) {
		const result = func(arr[i], i, arr);
		if (result) {
			newArr.push(arr[i])
		};
	}
	return newArr;
}

console.log(myFilter([1, 2, 3, 4], item => item % 2 === 0)); // [2, 4]