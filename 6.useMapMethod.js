"use strict";

// Your functions must use map method.

// 1. Write a function which returns array of usernames.

const users1 = [
	{
		username: "Yuri Gagarin",
		lang: "ru",
	},
	{
		username: "Nil Armstrong",
		lang: "ENG",
	},
];

function getUserNames(arr) {
	if (arguments.length !== 1 || !Array.isArray(arr)) {
		return "The argument of function mut be an arry with objects in it!";
	}

	for (let i = 0; i < arr.length; i++) {
		if (typeof (arr[i]) !== "object" || arr[i] === null || Array.isArray(arr[i])) {
			return `Array item on index: ${i} is not an object!`
		}
	}

	const result = arr.map(person => {
		if (person.username) {
			return (typeof (person.username) !== "string") ? null : person.username;
		} else {
			return undefined;
		}
	});


	if (result.includes(undefined)) {
		return `User at index:${result.indexOf(undefined)} has no username!`;
	} else if (result.includes(null)) {
		return `Username type on index: ${result.indexOf(null)} is not a string!`;
	} else {
		return result;
	}
}

console.log("Task 1: ", getUserNames(users1)); // ['Yuri Gagarin', 'Nil Armstrong']

// 2. Write a function which returns array of lengths of user names.

const users2 = [
	{
		username: "Yuri Gagarin",
		lang: "ru",
	},
	{
		username: "Nil Armstrong",
		lang: "ENG",
	},
];

function getUsernameLengths(arr) {
	if (arguments.length !== 1 || !Array.isArray(arr)) {
		return "The argument of function mut be an arry with objects in it!";
	}

	for (let i = 0; i < arr.length; i++) {
		if (typeof (arr[i]) !== "object" || arr[i] === null || Array.isArray(arr[i])) {
			return `Array item on index: ${i} is not an object!`
		}
	}

	const result = arr.map(person => {
		if (person.username) {
			return (typeof (person.username) !== "string") ? null : person.username.length;
		} else {
			return undefined;
		}
	});

	if (result.includes(undefined)) {
		return `User at index:${result.indexOf(undefined)} has no username!`;
	} else if (result.includes(null)) {
		return `Username type on index: ${result.indexOf(null)} is not a string!`;
	} else {
		return result;
	}
}

console.log("Task 2: ", getUsernameLengths(users2)); // [12, 13]

// 3. Write a function which parses string integers. If it's not possible to parse, then add null.

function parseInteger(arr) {
	if (arguments.length !== 1 || !Array.isArray(arr)) {
		return "The argumnet of function mut be an array!"
	}

	const result = arr.map(item => {
		if (typeof (item) !== "string") {
			return "a";
		} else if (parseInt(item) || parseInt(item) === 0) {
			return parseInt(item);
		} else {
			return null;
		}
	});

	if (result.includes("a")) {
		return `Type of item on index: ${result.indexOf("a")} is not a string!`;
	}

	return result;
}

console.log("Task 3: ", parseInteger(["1", "px", "2323"])); // [1, null, 2323];