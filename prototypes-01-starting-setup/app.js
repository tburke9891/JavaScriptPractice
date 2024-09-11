// class Person {
// 	name = "Thomas";

// 	constructor() {
// 		this.age = 34;
// 	}

// 	greet() {
// 		console.log(
// 			"Hi, I am " + this.name + " and I am " + this.age + " years old."
// 		);
// 	}
// }

// called with capital letter. Behind the scenes, the new keyword used to instantiate this function essentially creates an empty object called Person and then returns the object at the end of the function
function Person() {
	this.age = 34;
	this.name = "Thomas";
	this.greet = function () {
		console.log(
			"Hi, I am " + this.name + " and I am " + this.age + " years old."
		);
	};
}

Person.prototype = {
	printAge() {
		console.log(this.age);
	},
};

console.dir(Person); //console log a list of properties for the specified object

const person = new Person(); // without new here you cannot call the Person function because it returns nothing
person.greet();
person.printAge();
console.log(person.__proto__); // every object has a __proto__ property whereas .prototype sets prototype object for "to be created" objects, NOT for function object
