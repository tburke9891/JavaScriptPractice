const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get input from input field
function getUserInput() {
	return parseInt(userInput.value);
}

// Generates and writes calculation output
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operationId, prevResult, operationNumber, newResult) {
	const logEntry = {
		operation: operationId,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntry.operation);
}

function calculateResult(calculationType) {
	const enteredNumber = getUserInput();
    if (
		calculationType !== "ADD" &&
		calculationType !== "SUBTRACT" &&
		calculationType !== "MULTIPLY" &&
		calculationType !== "DIVIDE" ||
        !enteredNumber //
	) {
		return;
	}
	
	const initialResult = currentResult;
	let mathOperator;
	if (calculationType === "ADD") {
		currentResult += enteredNumber;
		mathOperator = "+";
	} else if (calculationType === "SUBTRACT") {
		currentResult -= enteredNumber;
		mathOperator = "-";
	} else if (calculationType === "MULTIPLY") {
		currentResult *= enteredNumber;
		mathOperator = "*";
	} else if (calculationType === "DIVIDE") {
		currentResult /= enteredNumber;
		mathOperator = "/";
	}

	createAndWriteOutput(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
	calculateResult("ADD");
}

function subtract() {
	calculateResult("SUBTRACT");
}

function multiply() {
	calculateResult("MULTIPLY");
}

function divide() {
	calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
