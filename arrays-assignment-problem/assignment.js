/////////// ********** 1.1 ********** \\\\\\\\\\\
// create an array of numbers
// filter array for numbers gt 5
const numbers = [14, 81, 20, 1, 81];
const greaterThanFive = numbers.filter((number) => number > 5);

console.log(greaterThanFive);

/////////// ********** 1.2 ********** \\\\\\\\\\\
// Take an array of numbers, and map every number to an object that holds
// the number on a property "num"
const mappedNumbers = numbers.map(number => ({ num: number }));

console.log(mappedNumbers);
 // written longer
// function arrayToObject(numberArray) {
// 	return numberArray.map((number) => {
// 		return { num: number };
// 	});
// }

// console.log(arrayToObject(numbers));

/////////// ********** 1.3 ********** \\\\\\\\\\\
// Reduce the array to a single number (multiply all numbers)
const sums = numbers.reduce((prevValue, curValue) => prevValue * curValue, 1);

console.log(sums);

/////////// ********** 2 ********** \\\\\\\\\\
// write a function, findMax, that finds the largest number in an array
function findMax(...array) {
	return Math.max(...array);
}

console.log(findMax(...numbers));

/////////// ********** 3 ********** \\\\\\\\\\
// modify findMax() to find min and max and return them as an array
// then destructure the results to store the two results in separate constants.
const minMaxArray = [];

function findMinMax(array) {
	minMaxArray.push(Math.max(...array));
	minMaxArray.push(Math.min(...array));
	return minMaxArray;
}

console.log(findMinMax(numbers)); // 81, 1

const [maxNum, minNum] = findMinMax(numbers);

console.log(maxNum);
console.log(minNum);
/////////// ********** 4 ********** \\\\\\\\\\
// Create a list to ensure no duplicate values can be added

function noDupes(array) {
	return [...new Set(array)];
}

console.log(noDupes(numbers));
