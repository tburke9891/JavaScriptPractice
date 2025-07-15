const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");
const userId = "u123";
const user = {
	name: "Thomas",
	age: 35,
	hobbies: ["Riding motorcycles", "Learning guitar", "Long range shooting"],
};

storeBtn.addEventListener("click", () => {
	sessionStorage.setItem("uid", userId);
	localStorage.setItem("user", JSON.stringify(user));
});

retrBtn.addEventListener("click", () => {
	const extractedId = sessionStorage.getItem("uid");
	const extractedUser = JSON.parse(localStorage.getItem("user"));
	console.log(extractedUser);
	if (extractedId) {
		console.log("Got the id - " + extractedId);
	} else {
		console.log("Could not find the Id.");
	}
});
