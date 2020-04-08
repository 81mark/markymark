// Game Values
let min = 1,
	max = 10,
	winningNum = randomNumber(min, max),
	guessesLeft = 3,
	cheater = false,
	valid = true;

// UI Elements
const game = document.querySelector('#game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessBtn = document.querySelector('#guess-btn'),
	guessInput = document.querySelector('#guess-input'),
	message = document.querySelector('.message'),
	cheat = document.querySelector('#cheat'),
	cheatMessage = document.querySelector('.cheat-message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listener
game.addEventListener('mousedown', function(e) {
	if (e.target.className === 'button-primary play-again') {
		window.location.reload();
		guessInput.value = '';
		cheatMessage.textContent = '';
	}
});

// Cheat event listener
cheat.addEventListener('click', function() {
	cheatMessage.innerHTML = `CHEATER! The number is <strong>${winningNum}</strong>. <em>Click to close.</em> `;
	cheater = true;
});

cheatMessage.addEventListener('click', function() {
	cheatMessage.textContent = '';
});

// Add Enter key to trigger click as well
guessInput.addEventListener('keyup', function(e){
  if (e.key === 'Enter' || e.key === 'NumpadEnter' || e.which === 13) {
      guessBtn.click()
  }
});

// Listen for guess
guessBtn.addEventListener('click', function() {

	// Cheated on ParseInt by using + to make it number
	let guess = +guessInput.value;
	// Validate
	if (isNaN(guess) || guess < min || guess > max) {
		valid = false;
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}

	// Check if won
	if (!cheater && guess === winningNum) {
		// Game Over - Won
		gameOver(true, `${winningNum} is correct, YOU WIN!`);
	} else if (cheater && guess === winningNum) {
		gameOver(false, `${winningNum} is correct, YOU CHEATED & YOU LOSE!`);
	} else {
		// Wrong number
		if (valid) {
			guessesLeft -= 1;
		} else {
			guessesLeft = guessesLeft;
			setMessage(`Please enter a number between ${min} and ${max}`, 'red');
		}

		// WRONG but continue
		if (valid) {
		    guessInput.value = '',
			setMessage(
				`${guess} is not correct, ${guessesLeft} tries left`,
				'orange'
			);
		}
		// Set Valid back to true
		valid = true;
	}
	if (valid && guessesLeft === 0) {
		// Game Over - Lost
		gameOver(false, `GAME OVER, You Lost, Winning number was ${winningNum}`);
	}
});

// GAME OVER
function gameOver(won, msg) {
	let color;
	won === true ? (color = 'green') : (color = 'red');

	// Disable input
	guessInput.disabled = true;
	// Change Border Color
	guessInput.style.borderColor = color;
	// Set Text Color
	message.style.color = color;
	// Set Message
	setMessage(msg);

	// Play Again?
	guessBtn.value = 'Play Again';
	guessBtn.className += ' play-again';
}

// Generate random winning number
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
	message.style.color = color;
	message.textContent = msg;
}
