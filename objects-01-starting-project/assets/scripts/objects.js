const userChosenKeyName = "level";

let person = {
	"first name": "Tommy",
	age: 34,
  hobbies: ["Sports", "Cooking"],
  [userChosenKeyName]: '...',
	greet: function () {
		alert("Hi there!");
	},
	1.5: "hello",
};

// add a property to the object
person.isAdmin = true;
// delete a property from the person object
delete person.age;

const keyName = "first name";

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);
console.log(person['level'])