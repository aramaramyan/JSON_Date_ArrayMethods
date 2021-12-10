"use strict";

// Implement array slice method.

function mySlice(arr, start = 0, end = arr.length) {

	if (!Array.isArray(arr)) {
		return `The first argument of function mut be an arry;
		Second argument must be the start extraction;
		Third argumnet must be the end extraction.`;
	}

	const result = [];

	for (let i = start; i < end; i++) {

		if (i < arr.length) {
			result.push(arr[i])
		}
	}

	return result;
}

console.log(mySlice([1, 2, 3, 4, 5], 2, 4)); // [3, 4]
console.log(mySlice([1, 2, 3, 4, 5], 2));    // [3, 4, 5]
