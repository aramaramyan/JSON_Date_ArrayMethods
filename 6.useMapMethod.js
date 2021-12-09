"use strict";

// Your functions must use map method.

{
	// 1. Write a function which returns array of usernames.

	const users = [
		{
			username: "Yuri Gagarin",
			lang: "ru",
		},
		{
			username: "Nil Armstrong",
			lang: "ENG",
		},
	];

	function getUserNames(obj) {
		if (typeof (obj) !== "object" || obj === null || !Array.isArray(obj)) {
			return "The argument of function mut be an object!";
		}

		const result = obj.map(person => {
			if (typeof (person.username) === "string") {
				return person.username;
			} else {
				return null;
			}
		});

		if (result.includes(undefined)) {
			return `User at index:${result.indexOf(null)} has no username!`;
		} else if (result.includes(null)) {
			return `Username type on index: ${result.indexOf(null)} is not a string!`;
		} else {
			return result;
		}
	}

	console.log("Task 1: ", getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
}


{
	// 2. Write a function which returns array of lengths of user names.

	const users = [
		{
			username: "Yuri Gagarin",
			lang: "ru",
		},
		{
			username: "Nil Armstrong",
			lang: "ENG",
		},
	];

	function getUsernameLengths(obj) {
		if (typeof (obj) !== "object" || obj === null || !Array.isArray(obj)) {
			return "The argument of function mut be an object!";
		}

		const result = obj.map(person => {
			if (typeof (person.username) === "string") {
				return person.username.length;
			} else {
				return null;
			}
		});

		if (result.includes(undefined)) {
			return `User at index:${result.indexOf(null)} has no username!`;
		} else if (result.includes(null)) {
			return `Username type on index: ${result.indexOf(null)} is not a string!`;
		} else {
			return result;
		}
	}

	console.log("Task 2: ", getUsernameLengths(users)); // [12, 13]
}

// 3. Write a function which parses string integers. If it's not possible to parse, then add null.

function parseInteger(arr) {
	if (!Array.isArray(arr)) {
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