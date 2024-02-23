// version 1: arrow function
const sayHello = (name) => {
	console.log("Hi " + name);
};

sayHello("Thomas");



// version 2: 2 arguments incl. replacing "hi"
const sayHello2 = (name, greeting = 'Bye') => {
	console.log(greeting + ' ' + name);
};

sayHello2("Thomas");



// version 3: no arguments, hardcoded values in body
const sayHello3 = () => {
	console.log("Hi Thomas hardcoded");
};

sayHello3();



// version 4: 1 returned value
const sayHello4 = (name) => {
	const hello = "Hi " + name;
	return hello;
};

sayHello4("Thomas");



// version 5: checkInput callback function
function checkInput(callingback, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    callingback();
  }
}

checkInput(
  () => {
    console.log("No empty strings");
  },
  "oh",
  "my",
  "right"
);

// instructor lab example
const sayHelloI = name => console.log('Hi' + name);
const sayHelloI2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHelloI3 = () => console.log("Hi Hard-coded");
const sayHelloI4 = name => "Hi " + name;

sayHelloI('Thomas');
sayHelloI2("Thomas", "Hi");
sayHelloI3();
console.log(sayHelloI4("Thomas"));

const sayHelloI5 = (name, phrase = 'Hello') => console.log(phrase + " " + name);

sayHelloI5("Thomas");
sayHelloI5("Thomas", "Top of the morning to ya,")

function checkInputI(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInputI(
  () => {
  console.log("All not empty");
  },
  "hello",
  "12",
  "help",
  "oops"
);