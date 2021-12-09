"use strict";

// Your functions must use filter method.

// 1. Given an array, return a new array that only includes the numbers.

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN];

function getOnlyNums(arr) {
	if (!Array.isArray(arr)) {
		return "The argument of function must be an array!"
	}

	return arr.filter(item => typeof (item) === "number" && !isNaN(item))
}

console.log("Task 1: ", getOnlyNums(arr)); // [1, 2, 55, 166]

// 2. Write a function which remove users with language equals to 'ru'.

const users1 = [
	{
		username: "Yuri Gagarin",
		lang: "RU"
	},
	{
		username: "Nil Armstrong",
		lang: "ENG",
	},
];

function filterUsers(obj) {
	if (typeof (obj) !== "object" || obj === null || !Array.isArray(obj)) {
		return "The argument of function mut be an array with objects in it!";
	}

	return obj.filter(person => typeof (person.lang) === "string" && person.lang.toLowerCase() !== "ru");
}

console.log("Task 2: ", filterUsers(users1)); // [{ username: "Nil Armstrong, lang: "ENG" }]

// 3. Write a function which filters object by field.

const users2 = [
	{
		username: "Yuri Gagarin",
		lang: "RU",
		isAstronaut: true,
	},
	{
		username: "Nil Armstrong",
		lang: "ENG",
		isAstronaut: true,
	},
	{
		username: "Elon Musk",
		lang: "ENG",
		isAstronaut: false,
	},
];

function filterByField(arr, field) {
	if (arguments.length !== 2
		|| !Array.isArray(arr)
		|| typeof (field) !== "string") {
		return "The first argument of function mut be an arry with objects in it and the second - string!";
	}

	for (let i = 0; i < arr.length; i++) {
		if (typeof (arr[i]) !== "object" || arr[i] === null || Array.isArray(arr[i])) {
			return `Array item on index: ${i} is not an object!`
		}
	}

	return arr.filter(person => person[field]);
}

console.log("Task 3: ", filterByField(users2, "isAstronaut"));