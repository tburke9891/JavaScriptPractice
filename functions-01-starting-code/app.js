const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}`, '').toUpperCase();
  if (selection !== ROCK && 
      selection !== PAPER && 
      selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you! :p`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < .34) {
    return ROCK;
  } else if (randomValue < .67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const add = (a, b) => a + b;

// set the default player choice to the global variable if the player has a bad input
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
	cChoice === pChoice 
	? RESULT_DRAW 
	: cChoice === ROCK && pChoice === PAPER ||
  cChoice === PAPER && pChoice === SCISSORS ||
  cChoice === SCISSORS && pChoice === ROCK 
  ? RESULT_PLAYER_WINS 
  : RESULT_COMPUTER_WINS;

// const getWinner = function(cChoice, pChoice) => {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     cChoice === ROCK && pChoice === PAPER || 
//     cChoice === PAPER && pChoice === SCISSORS ||
//     cChoice === SCISSORS && pChoice === ROCK
//     ) {
//       return RESULT_PLAYER_WINS;
//     } else {
//       RESULT_COMPUTER_WINS;
//     }
// } 

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  // return player choice if value is truthy, otherwise return the default choice
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, the computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + `had a draw.`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + `won.`;
  } else {
    message = message + `lost.`;
  }
  alert(message);
  gameIsRunning = false;
});


// not related to the game

// const subtractUp = function (...numbers) {
//   let sum = 0;
// 	for (const num of numbers) {
// 		sum -= num;
// 	}
// 	return sum;
// }

// const subtractUp2 = function (resultHandler, ...numbers) {
// 	let sum = 0;
// 	for (const num of numbers) {
// 		sum -= num;
// 	}
// 	resultHandler(sum, 'The result after subtracting all numbers is');
// };

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  // showResult.bind(this) is preceding the sum here.
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(`${messageText} ${result}`);
};

combine(showResult.bind(this, 'The result after adding all numbers is: '), "ADD", 1, 5, 'wow', -3, 6, 10);
combine(showResult.bind(this, 'The result after adding all numbers is: '), "ADD", 1, 2, 3, 4, 5, 6, 87, 8, -50);
combine(showResult.bind(this, 'The result after subtracting all numbers is: '), "SUBTRACT", 1, 3, 5, 7, 9, -30);
