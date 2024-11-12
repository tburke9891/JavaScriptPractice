const button = document.querySelector("button");

// button.onclick = function () {
// };

const buttonClickHandler = (event) => {
	// event.target.disabled = true;
	console.log(event);
};

const anotherButtonClickHandler = () => {
	console.log("this is your console log");
};

// button.onclick = buttonClickHandler; //can only add 1 handler to this event per element
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
// 	button.removeEventListener("click", buttonClickHandler);
// }, 2000);
// button.addEventListener('dblclick');
// button.addEventListener('contextmenu');
// button.removeEventListener();

// buttons.forEach((btn) => {
// 	btn.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", (event) => {
// 	console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", () => {
	event.preventDefault();
	console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
	console.log("CLICKED DIV");
	console.log(event);
});

button.addEventListener("click", function (event) {
	event.stopPropagation(); //stops CLICKED DIV from loading into the console
	//	event.stopImmediatePropagation(); // stops other event listeners on the same button
	console.log("CLICKED BUTTON");
	console.log(event);
	console.log(this); //ignored when called form an arrow function or the button when used with a named function
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((listItem) => {
// 	listItem.addEventListener("click", (event) => {
// 		event.target.classList.toggle("highlight");
// 	});
// });

list.addEventListener("click", function (event) {
	// console.log(event.currentTarget); // specific DOM element where the listener is registered <ul>
	// event.target.classList.toggle("highlight"); // actual DOM element
	event.target.closest("li").classList.toggle("highlight"); // traverses up in the ancestor tree or the item itself
	// form.submit(); //bypasses custom behavior when called like this, best would be to call the button.click on the form itself
	button.click();
	console.log(this); //looks at <ul>
});
