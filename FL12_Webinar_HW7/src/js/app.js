import generateComputerChoose from './generateComputerChoose';
import compareEvent from './compareEvent';
import logRoundResults from './logRoundResults';
import '../sass/styles.scss';
import Paper from '../img/paper.png';
import Rock from '../img/rock.png';
import Scissors from '../img/scissors.png';

let round = 0;
let userWins = 0;
let compWins = 0;
let endGame = false;
const MAX_ROUNDS = 3;

const pressButtons = document.querySelectorAll('.options button');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const resultRound = document.querySelector('.result-round');
const resultGame = document.querySelector('.result-game');
const resetButton = document.querySelector('.reset');
playerHand.src = Rock;
computerHand.src = Rock;

function newRound(userChoise) {
  round += 1;
  const computerChoose = generateComputerChoose();
  const compare = compareEvent(userChoise, computerChoose);

  compareEvent(userChoise, computerChoose);
  const imageMap = {
    Rock,
    Paper,
    Scissors
  };
  playerHand.src = imageMap[userChoise];
  computerHand.src = imageMap[computerChoose];

  if (compare === 1) {
    userWins += 1;
  } else if (compare === 0) {
    compWins += 1;
  }

  logRoundResults(userChoise, computerChoose, compare, round);

  if (round >= MAX_ROUNDS || userWins >= 2 || compWins >= 2) {
    endGame = true;
    if (userWins > compWins) {
      resultGame.textContent = `You are winner!`;
    } else if (compWins > userWins) {
      resultGame.textContent = `Computer is winner!`;
    } else {
      resultGame.textContent = `No one is winner!`;
    }
  }
}

pressButtons.forEach(option => {
  option.addEventListener('click', function clickHandler(event) {
    if (!endGame) {
      newRound(event.target.textContent);
    }
  });
});

resetButton.addEventListener('click', function clickHandler() {
  round = 0;
  userWins = 0;
  compWins = 0;
  endGame = false;
  playerHand.src = Rock;
  computerHand.src = Rock;
  resultRound.textContent = ``;
  resultGame.textContent = ``;
});
