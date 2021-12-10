"use strict";

// Implement array find method.

function myFind(arr, func) {

	function myfindIndex(arr, func) {

		for (let i = 0; i < arr.length; i++) {

			if (func(arr[i], i, arr)) {
				return i;
			}
		}

		return -1;
	}

	const index = myfindIndex(arr, func);

	if (index === -1) {
		return undefined;
	}

	return arr[index];
}

console.log(myFind([1, 2, 3, 4, 5], item => item === 3)); // 3
console.log(myFind([1, 2, 3, 4, 5], item => item === 9)); // undefined