// const ids = new Set(['Hello', 'from', 'set.']);
// ids.add(2);
// if (ids.has('Hello')) {
//   ids.delete('Hello');
// }

// console.log(ids);

// for (const entry of ids.entries()) {
// 	console.log(entry[0]);
// }

// const person1 = { name: "Thomas" };
// const person2 = { name: "Samuel" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
// 	console.log(key, value);
// }

// for (const key of personData.keys()) {
// 	console.log(key);
// }

// for (const value of personData.values()) {
// 	console.log(value);
// }

let person = { name: 'Tom' };
const persons = new WeakSet();
persons.add(person);

// ... some operations

// person = null;
// will allow garbage collection to remove stored object from WeakSet
// if not currently being used by code. Does not work on a Set.
console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Other Information');

person = null;

console.log(personData);
