"use strict";

// Your function must use reduce.

// 1. Given an array, return the sum of numbers that are 18 or over.

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

function getSum(arr) {
	if (!Array.isArray(arr)) {
		return "The argument of function must be an array!";
	}

	for (let i = 0; i < arr.length; i++) {
		if (typeof (arr[i]) !== "number" || isNaN(arr[i])) {
			return `Array item on index: ${i} is not a number!`;
		}
	}

	return arr.filter(item => item >= 18).reduce((aggr, val) => aggr + val);
}

console.log("Task 1:", getSum(arr)); // 1347

// 2. Write a function which calculates average age of users.

const users = [
	{
		username: "Yuri Gagarin",
		lang: "ru",
		age: 56,
	},
	{
		username: "Nil Armstrong",
		lang: "ENG",
		age: 54,
	},
];

function getAverageAge(arr) {
	if (arguments.length !== 1 || !Array.isArray(arr)) {
		return "The argument of function mut be an arry with objects in it!";
	}

	for (let i = 0; i < arr.length; i++) {
		if (typeof (arr[i]) !== "object" || arr[i] === null || Array.isArray(arr[i])) {
			return `Array item on index: ${i} is not an object!`
		}
	}

	const result = arr.map(person => {
		if (person.age > 0) {
			return person.age
		} else {
			return undefined;
		}
	});

	if (result.includes(undefined)) {
		return `User at index:${result.indexOf(undefined)} has no age!`;
	} else {
		return parseInt(result.reduce((aggr, val) => aggr + val) / result.length);
	}
}



console.log("Task 2:", getAverageAge(users)); // 55