let randomNumber = parseInt((Math.random() * 100) + 1);
console.log(randomNumber);

const submit = document.querySelector('#btn');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validationGuess(guess)
    });
}

function validationGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
        userInput.value ='';
    }
    else if (guess < 1) {
        alert("Please enter a valid number greater than 1");
    }
    else if (guess > 100) {
        alert("Please enter a valid number less than 100");
    }
    else {
        prevGuess.push(guess);
        console.log(prevGuess);

        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over : Ramdom number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {

    if(guess === randomNumber){
        displayMessage('You gessed it right And you win the game.');
    }
    else if(guess < randomNumber){
        displayMessage('Number is Too low ');
    }
    else if(guess > randomNumber){
        displayMessage('Number is Too high ');
    }
}


function displayGuess(guess) {
    console.log(guess);
userInput.value = '';
guessSlot.innerHTML += `${guess} ,`;
numGuess++;
remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
lowOrHi.innerHTML =`<h2>${message}</h1>`;
}

function endGame() {
userInput.value = '';
userInput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML = `<button id ="newGame"> Start new Game </button>`;
startOver.appendChild(p);
playGame = false;
newGame();
}

function newGame() {
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', function(e){
randomNumber = parseInt(Math.random() *100 +1);
prevGuess = [];
numGuess = 1;
guessSlot.innerHTML ='';
remaining.innerHTML =`${11 - numGuess}`;
userInput.removeAttribute('disabled');
startOver.removeChild(p);
playGame = true;
});
}





