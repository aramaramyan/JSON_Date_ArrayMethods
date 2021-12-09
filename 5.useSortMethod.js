"use strict";

/* Create a function that takes an array of numbers arr, a string str
and return an array of numbers as per the following rules:

- "Asc" returns a sorted array in ascending order.
- "Desc" returns a sorted array in descending order. */

function sortBy(arr, str) {
	if (!Array.isArray(arr) && (typeof (str) !== "string")) {
		return "The firts argument of function must be an array and second - string!"
	}

	if (str === "Asc") {
		return arr.sort((a, b) => a - b);
	} else if (str === "Desc") {
		return arr.sort((a, b) => b - a);
	} else {
		return arr;
	}
}

console.log(sortBy([4, 3, 2, 1], "Asc"));   // [1, 2, 3, 4]
console.log(sortBy([7, 8, 11, 66]));        // [7, 8, 11, 66]
console.log(sortBy([7, 8, 11, 66], "Desc")) // [66, 11, 8, 7]