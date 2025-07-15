const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
	const userId = "123";
	const user = { name: "Thomas", age: 35 };
	document.cookie = `uid=${userId}; max-age=360`; // adds to cookie value, does not overwrite unless same value
	document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener("click", () => {
	console.log("document.cookie" + document.cookie);
	const cookieData = document.cookie.split(";");
	const data = cookieData.map((i) => {
		return i.trim();
	});
	console.log(data[1].split("=")[1]); // user value
});
