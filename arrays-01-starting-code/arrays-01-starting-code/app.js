// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5); //fixed lenght of 5
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers)

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const moreNumbers = Array.from("Hi, guys!");
// console.log(moreNumbers);

// const personalData = [30, "Thomas", { moreDetail: [] }];

// const analyticsData = [[1, 1.6], [-5.4, 2.1], [5]];

// for (const data of analyticsData) {
// 	for (const dataPoint of data) {
// 		console.log(dataPoint);
// 	}
// }

// console.log(personalData[1]); // Thomas

// // const hobbies = ["Cooking", "Sportsball"];
// // hobbies.push("Motorcycles"); // fast operation
// // hobbies.unshift("Coding"); // slow operation
// // hobbies.pop(); // fast operation
// // hobbies.shift(); // slow operation
// // console.log(hobbies);

// // hobbies[1] = "Coding"; // replace index 1 with 'Coding'

// // // index 2, 3, 4 are empty, 5 is reading
// // hobbies[5] = "Reading";
// // console.log(hobbies);

// // // start at index 1, delete nothing, and add 'Good food' to array
// // hobbies.splice(1, 0, "Good food");
// // console.log(hobbies);

// // // remove the last element in an array
// // const removedElements = hobbies.splice(-1, 1);
// // console.log(hobbies);

// // hobbies.splice(0, 2); // start index zero, delete index 0 and 1
// // console.log(hobbies);

// // hobbies.splice(2); // removes everything after first 2 indexes
// // console.log(hobbies);

// // hobbies.splice(0); // removes all items in array
// // console.log(hobbies);

// // const testResults = [1, 5.3, 1.5, 11.21, 1.5, -7, 713];
// // const storedResults = testResults.concat([4, 5, 6]);

// // testResults.push(6.59);

// // console.log(storedResults, testResults);
// // console.log(testResults.indexOf(1.5)); // 2
// // console.log(testResults.lastIndexOf(1.5)); // 4

// // const thomasData = [{ name: "Tommy" }, {name: "Thomas"}];
// // console.log(thomasData.indexOf({ name: "Thomas" })) // -1

// // const thomas = thomasData.find((person, index, persons) => {
// //   return person.name === 'Thomas';
// // });

// // thomas.name = 'Anna';

// // console.log(thomas, thomasData);

// // const tommyIndex = thomasData.findIndex((person, index, persons) => {
// // 	return person.name === "Tommy";
// // });

// // console.log(tommyIndex);

// // const prices = [10.99, 5.99, 3.99, 6.59];
// // const tax = .19;
// // const taxAdjustedPrices = [];

// // // for (const price of prices) {
// // //   taxAdjustedPrices.push(price * (1 + tax));
// // // }

// // prices.forEach((price, index, prices) => {
// //   const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
// //   taxAdjustedPrices.push(priceObj);
// // });

// // console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.07;

// const taxAdjustedPrices = prices.map((price, index, prices) => {
// 	const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
// 	return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
// 	if (a > b) {
// 		return 1;
// 	} else if (a === b) {
// 		return 0;
// 	} else {
// 		return -1;
// 	}
// });
// console.log(sortedPrices);

// const filteredArray = prices.filter((price) => price > 6);

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //   sum += price
// // })

// // console.log(sum);

// // const sum = prices.reduce ((prevValue, curValue) => prevValue + curValue, 0);

// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => {
// 	return prevValue + curValue;
// }, 0);

// console.log(sum);

// // create a string of information
// const data = "new york;10.99;2000";
// // split the string up by semicolon
// const transformedData = data.split(";");
// // take 10.99 from a string to an int with the unary plus operator
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ["Tom", "Tommy", "Thomas"];
// const name = nameFragments.join(" ");
// console.log(name);

// // copy nameFragments array into a different array
// const copiedNameFragments = [...nameFragments];
// // add 'Mr' string to nameFragments but leave copiedNameFragments alone
// nameFragments.push("Mr.");
// console.log(nameFragments, copiedNameFragments);

// // return the minumum number passed to Math.min()
// console.log(Math.min(1, 5, -3));
// // returns an error because prices is an array of numbers and NaN
// console.log(Math.min(prices));
// // returns the lowest number from the prices array with spread operator
// console.log(Math.min(...prices));

// const persons = [
// 	{ name: "Tommy", age: 34 },
// 	{ name: "Thomas", age: 35 },
// ];
// // create an array but not a new object. references persons
// const copiedPersons = [...persons];
// // .map will hold original values as it is a new object
// // ({}) tells JS that I'm creating an object, not writing the function
// // map name to person.name and age to person.age
// const mapPersons = persons.map((person) => ({
// 	name: person.name,
// 	age: person.age,
// }));
// // only updates persons
// persons.push({ name: "Anna", age: 28 });
// // adding new age to index 0 updates age to both references
// persons[0].age = 22;

// console.log(persons, copiedPersons, mapPersons);

const nameData = ["Thomas", "Burke", "Mr.", 30];
// const firstName = nameData[0];
// const lastname = nameData[1];

const [firstName, lastName, ...other] = nameData;
console.log(firstName, lastName, other);
