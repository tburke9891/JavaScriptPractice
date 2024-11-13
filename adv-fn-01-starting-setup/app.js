// pure function
// nothing changes outside the function
// always produces the same result for the same inputs
function add(num1, num2) {
	return num1 + num2;
}

console.log(add(1, 5)); // 6
console.log(add(13, 14)); // 27

// impure functions because results are always different
function addRandom(num1) {
	return num1 + Math.random();
}

console.log(addRandom(4));

let previousResult = 0;

// impure function because it changes something outside of the function
function addMoreNumbers(num1, num2) {
	const sum = num1 + num2;
	previousResult = sum;
	return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ["sports", "cooking"];

// impure function because it updates the array outside of the function
function printHobbies(h) {
	h.push("racing");
	console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
	function calculateTax(amount) {
		console.log(multiplier); // 1.2, not 1.1
		return amount * tax * multiplier;
	}
	return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// update multiplier after setting tax in the outer function but before calling the inner function
multiplier = 1.2;

console.log(calculateVatAmount(100)); // 19
console.log(calculateVatAmount(200)); // 38

let userName = "Thomas";

function greetUser() {
	let name = "Anna"; //beats outer lexical environment
	console.log("Hi, " + name + ".");
}

let name = "Tom";

greetUser(); //Hi, Thomas.

userName = "Tommy";

greetUser(); // Hi, Tommy.

// function powerOf(x, n) { // iteration 1
// 	let result = 1;
// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 	}
// 	return result;
// }

function powerOf(x, n) {
	// if (n === 1) { // iteration 2
	// 	return x;
	// }
	// return x * powerOf(x, n - 1);

	return n === 1 ? x : x * powerOf(x, n - 1); // iteration 3
}

console.log(powerOf(2, 3)); // 2*2*2

const myself = {
	name: "Thomas",
	friends: [
		{
			name: "Chris", // my friend
			friends: [
				{
					name: "Julia", // Chris' friend
				},
				{
					name: "Amy", // Chris' friend
				},
				{
					name: "Ben", // Chris' friend
				},
			],
		},
		{
			name: "Moses", // my friend
		},
	],
};

// function getFriendNames(person) {
// 	const collectedNames = [];

// 	for (const friend of person.friends) {
// 		collectedNames.push(friend.name);
// 	}
// 	return collectedNames;
// }

// console.log(getFriendNames(myself)); //Chris and Moses

function getFriendNames(person) {
	const collectedNames = [];

	if (!person.friends) {
		return [];
	}

	for (const friend of person.friends) {
		collectedNames.push(friend.name);
		collectedNames.push(...getFriendNames(friend)); //spread operator to avoid nested arrays
	}
	return collectedNames;
}

console.log(getFriendNames(myself)); //Chris and Moses
