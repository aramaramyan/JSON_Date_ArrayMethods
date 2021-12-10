"use strict";

// Implement array forEach method.

function myForEach(arr, func) {
	if (arguments.length !== 2 || !Array.isArray(arr)) {
		return "The first argument of function mut be an arry and the second - call back function!";
	}

	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

myForEach([1, 2, 3], item => console.log(item += 5)); // 6 7 8