class AgedPerson {
	printAge() {
		console.log(this.age);
	}
}

class Person {
	name = "Thomas";

	constructor() {
		// super();
		this.age = 34;
	}

	//could be easier for pointing to an event.listener than using the greet() method using bind
	greet = () => {
		console.log(
			"Hi, I am " + this.name + " and I am " + this.age + " years old."
		);
	};

	// greet() {
	// 	console.log(
	// 		"Hi, I am " + this.name + " and I am " + this.age + " years old."
	// 	);
	// }
}

// // called with capital letter. Behind the scenes, the new keyword used to instantiate this function essentially creates an empty object called Person and then returns the object at the end of the function
// function Person() {
// 	this.age = 34;
// 	this.name = "Thomas";
// }

// Person.prototype.greet = function () {
// 	console.log(
// 		"Hi, I am " + this.name + " and I am " + this.age + " years old."
// 	);
// };

// Person.describe = function () {
// 	console.log("Creating persons...");
// };

// // overwrites the default prototype //
// // Person.prototype = {
// // 	printAge() {
// // 		console.log(this.age);
// // 	},
// // };

// // appends to the existing prototype method //
// Person.prototype.printAge = function () {
// 	console.log(this.age);
// };

// console.dir(Person); //console log a list of properties for the specified object

// const person = new Person(); // without new here you cannot call the Person function because it returns nothing
// person.greet();
// person.printAge();

// console.log(person); // every object has a __proto__ property whereas .prototype sets prototype object for "to be created" objects, NOT for function object

// console.log(person.toString()); // still works because the fallback object of our object has it's own prototype that has this function.

// const person2 = new person.__proto__.constructor();
// console.log(Object);
// console.dir(Object.prototype);

// const p = new Person();
// console.log(p);

// const button = document.getElementById("btn");
// // button.addEventListener("click", p.greet);
// button.addEventListener("click", p.greet.bind(p));

const course = {
	// coudl be: new Object()
	title: "JavaScript - the Complete Guide",
	rating: 5,
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
	// ...Object.getPrototypeOf(course),
	printRating: function () {
		console.log(`${this.rating}/5`);
	},
});

course.printRating();
