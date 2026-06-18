const diceElement = document.getElementsByClassName('dice')[0];
const scorePlayerOne = document.getElementById('score--0');
const scorePlayerTwo = document.getElementById('score--1');
const currentScoredPlayerOne = document.getElementById('current--0');
const currentScoredPlayerTwo = document.getElementById('current--1');


let currentScore = 0;

let activePlayer = 0;

let isPlaying = true;


document.getElementsByClassName('btn btn--roll')[0].addEventListener('click', () => {
    if (isPlaying) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceElement.classList.remove('hidden');
        diceElement.src = `images/Dices/dice-${dice}.png`;







        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            playerSwitch()
        }

    }
});

const playerSwitch = () => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementsByClassName('player player--0')[0].classList.toggle('player--active');
    document.getElementsByClassName('player player--1')[0].classList.toggle('player--active');
}

let scores = [0, 0]

document.getElementsByClassName('btn btn--hold')[0].addEventListener('click', () => {
    if (isPlaying) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).innerHTML = scores[activePlayer];
        if (scores[activePlayer] > 50) {
            document.getElementsByClassName(`player--${activePlayer}`)[0].classList.add('player--winner');
            diceElement.classList.add('hidden');
            isPlaying = false;
        }
        playerSwitch();
    }
})

document.getElementsByClassName('btn btn--new')[0].addEventListener('click', () => {
    scores = [0, 0];
    scorePlayerOne.innerHTML = 0;
    scorePlayerTwo.innerHTML = 0;
    currentScoredPlayerOne.innerHTML = 0;
    currentScoredPlayerTwo.innerHTML = 0;
    document.getElementsByClassName('player player--0')[0].classList.remove('player--winner');
    document.getElementsByClassName('player player--0')[0].classList.add('palyer--active');
    document.getElementsByClassName('player player--1')[0].classList.remove('player--winner');
    document.getElementsByClassName('player player--1')[0].classList.remove('player--active');
    activePlayer = 0;
    isPlaying = true;
})

