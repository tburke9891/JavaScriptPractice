class Course {
	constructor(title, length, price) {
		this.title = title;
		this.length = length;
		this.price = price;
	}

	valuedTime() {
		const value = this.length / this.price;
		console.log(`The value of ${this.title} is ${value.toFixed(3)}.`);
	}

	summary() {
		console.log(
			`Course summary: title: ${this.title}, length: ${this.length}, price: ${this.price}.`
		);
	}
}

const courseEasy = new Course("Easy Math", 30, 1300);
const courseHard = new Course("Hard Math", 30, 2000);
console.log(courseEasy);
console.log(courseHard);

courseEasy.valuedTime();
courseHard.valuedTime();
courseEasy.summary();
courseHard.summary();
