"use strict";

// Implement array Reduce method.

function myReduce(arr, func, val) {

	if (!Array.isArray(arr)) {
		return "The first argument of function mut be an arry and the second - call back function!";
	}

	let aggr = val;
	let index = 0;

	if (val === undefined) {
		aggr = arr[0];
		index = 1;
	}

	for (let i = index; i < arr.length; i++) {
		aggr = func(aggr, arr[i], i, arr);
	}

	return aggr;
}

console.log(myReduce([1, 2, 3], (aggr, val) => aggr + val, 0)); // 6