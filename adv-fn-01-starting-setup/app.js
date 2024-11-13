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


