const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 12;
const TYPE_ATTACK = "ATTACK";
const TYPE_STRONG_ATTACK = "STRONG_ATTACK";

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

const enteredValue = prompt("Choose a max life for the game:", "100");

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife < 1) {
	chosenMaxLife = 100;
	alert(
		"You have not entered a number. The default value of 100 will be used."
	);
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
	let logEntry = {
		event: ev,
		value: val,
		finalMonsterHealth: monsterHealth,
		finalPlayerHealth: playerHealth,
	};
	switch(ev) {
		case LOG_EVENT_PLAYER_ATTACK:
			logEntry.target = 'MONSTER';
			break;
		case LOG_EVENT_PLAYER_STRONG_ATTACK:
			logEntry.target = 'MONSTER';
			break;
		case LOG_EVENT_MONSTER_ATTACK:
			logEntry.target = 'PLAYER';
			break;
		case LOG_EVENT_PLAYER_HEAL:
			logEntry.target = 'PLAYER';
			break;
		case LOG_EVENT_GAME_OVER:
			logEntry.target = 'GAME_OVER';
		default:
			logEntry = {};
	}
	// if (ev === LOG_EVENT_PLAYER_ATTACK) {
	// 	logEntry.target = 'MONSTER';
	// } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
	// 	logEntry.target = 'MONSTER';
	// } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
	// 	logEntry.target = 'PLAYER';
	// } else if (ev === LOG_EVENT_PLAYER_HEAL) {
	// 	logEntry.target = 'PLAYER';
	// } else if (ev === LOG_EVENT_GAME_OVER) {
	// }
	battleLog.push(logEntry);
}

function reset() {
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

function endRound() {
	const initialPlayerHealth = currentPlayerHealth;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);
	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerHealth;
		setPlayerHealth(initialPlayerHealth);
		alert("You lost a life!");
	}

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert("You defeated the monster!");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'Player Won!',
            currentMonsterHealth,
            currentPlayerHealth
        )
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert("You lost!");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'Monster Won!',
            currentMonsterHealth,
            currentPlayerHealth
        )
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		alert("You have a draw!");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'Draw!',
            currentMonsterHealth,
            currentPlayerHealth
        )
	}

	if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
		reset();
	}
}

function attackMonster(attackType) {
    const maxDamage = 
        attackType === TYPE_ATTACK 
          ? ATTACK_VALUE 
          : STRONG_ATTACK_VALUE;
    let logEvent = 
        attackType === TYPE_ATTACK 
          ? LOG_EVENT_PLAYER_ATTACK 
          : LOG_EVENT_PLAYER_STRONG_ATTACK;
	// let maxDamage;
    // let logEvent;
	// if (attackType === TYPE_ATTACK) {
	// 	maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
	// } else if (attackType === TYPE_STRONG_ATTACK) {
	// 	maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
	// }
	const monsterDamage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= monsterDamage;
    writeToLog(
        logEvent,
        monsterDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );
	endRound();
}

function attackHandler() {
	attackMonster(TYPE_ATTACK);
}

function strongAttackHandler() {
	attackMonster(TYPE_STRONG_ATTACK);
}

function healPlayerHandler() {
	let healValue;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		alert("You can't heal to more than " + chosenMaxLife + " health!");
		healValue = chosenMaxLife - currentPlayerHealth;
	} else {
		healValue = HEAL_VALUE;
	}
	increasePlayerHealth(healValue);
	currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
        );
	endRound();
}

function printLogHandler() {
	for(let i = 0; i < 3; i++) {
		console.log('----------------');
	}
	let j = 0;
	while (j < 3) {
		console.log(j);
		j++;
	}
	// for (let i = 10; i > 0;) {
	// 	i--;
	// 	console.log(i);
	// }
	// for( let i = 0; i < battleLog.length; i++) {
	// 	console.log(battleLog[i]);
	// }
	let i = 0;
	for(const element of battleLog) {
		console.log(`#${i}`);
		for (const key in element) {
			console.log(`${key} => ${element[key]}`);
		}
		i++;
	}
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);