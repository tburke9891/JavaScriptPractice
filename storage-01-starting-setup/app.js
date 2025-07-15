const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

let db;

const dbRequest = indexedDB.open("SampleStorage", 1); //window.indexedDB

dbRequest.onsuccess = function (event) {
	db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
	db = event.target.result;
	const objStore = db.createObjectStore("products", { keyPath: "id" });

	objStore.transaction.oncomplete = function (event) {
		const productStore = db
			.transaction("products", "readwrite")
			.objectStore("products");
		productStore.add({
			id: "p0001",
			title: "Product1",
			price: 12.99,
			tags: ["Expensive", "Luxury"],
		});
	};
};

dbRequest.onerror = function (event) {
	console.log("Failed to connect to database");
};

storeBtn.addEventListener("click", () => {
	if (!db) {
		return;
	}
	const productsStore = db
		.transaction("products", "readwrite")
		.objectStore("products");
	productsStore.add({
		id: "p2",
		title: "A Second Product",
		price: 122.99,
		tags: ["Expensive", "Luxury"],
	});
});

retrBtn.addEventListener("click", () => {
	const productsStore = db
		.transaction("products", "readwrite")
		.objectStore("products");
	const request = productsStore.get("p2");

	request.onsuccess = function () {
		console.log(request.result);
	};
});
