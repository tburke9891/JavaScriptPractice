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

button.addEventListener("click", (event) => {
	event.stopPropagation(); //stops CLICKED DIV from loading into the console
	//	event.stopImmediatePropagation(); // stops other event listeners on the same button
	console.log("CLICKED BUTTON");
	console.log(event);
});
