"use strict";

// Implement array findIndex method.

function myfindIndex(arr, func) {

	for (let i = 0; i < arr.length; i++) {

		if (func(arr[i], i, arr)) {
			return i;
		}
	}

	return -1;
}

console.log(myfindIndex([1, 2, 3, 4, 5], item => item === 3)); // 2
console.log(myfindIndex([1, 2, 3, 4, 5], item => item === 7)); // -1