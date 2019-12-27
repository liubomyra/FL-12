const winPrizesInitial = [100, 50, 25];
const numberRangeInitial = 9;
const biggerAtNumberRange = 4;
const biggerMaximumPrize = 2;
let userPrize = 0;
let userDidWin = false;
let userChoosedNextRound = true;
let roundRandomNumber;

const wantToPlay = confirm('Do you want to play a game?');
let numberRange = numberRangeInitial;
let winPrizes = winPrizesInitial.slice();

if (wantToPlay) {
  while (userChoosedNextRound) {
    userChoosedNextRound = false;

    roundRandomNumber = Math.floor(Math.random() * numberRange);

    for (let i = 0; i < winPrizes.length; i++) {
      let userNumber = prompt(
        'Choose a roulette number from 0 to ' +
          (numberRange - 1) +
          '\n' +
          'Attempts left: ' +
          (winPrizes.length - i) +
          '\n' +
          'Total prize: ' +
          userPrize +
          '$' +
          '\n' +
          'Possible prize on current attempt: ' +
          winPrizes[i] +
          '$'
      );

      if (
        // ignore steps with invalid input
        userNumber !== '' ||
        userNumber !== false ||
        userNumber !== true ||
        !isNaN(userNumber)
      ) {
        let roundUserNumber = parseInt(userNumber);
        if (roundUserNumber === roundRandomNumber) {
          userPrize = userPrize + winPrizes[i];
          userDidWin = true;
          break;
        }
      }
    }

    if (userDidWin) {
      //userDidWin = true;
      alert('Congratulation, you won! Your prize is: ' + userPrize + '$');
      //  debugger;
      let wantToContinue = confirm('Do you want to continue?');
      if (wantToContinue) {
        userChoosedNextRound = true;
        // update values for the next round
        numberRange = numberRange + biggerAtNumberRange;
        for (let j = 0; j < winPrizes.length; j++) {
          winPrizes[j] = winPrizes[j] * biggerMaximumPrize;
        }
      } else {
        // don't want To Continue
        alert(
          'Thank you for your participation. Your prize is: ' + userPrize + '$'
        );

        let playAgain = confirm('Do you want to play again?');
        if (playAgain) {
          userDidWin = false;
          // reset values for the new game
          userPrize = 0;
          numberRange = numberRangeInitial;
          winPrizes = winPrizesInitial.slice();
          userChoosedNextRound = true;
        } else {
          alert('Thank you for your participation.');
        }
      }
    } else {
      //userDidWin = false;
      alert(
        'Thank you for your participation. Your prize is: ' + userPrize + '$'
      );

      let playAgain = confirm('Do you want to play again?');
      if (playAgain) {
        userChoosedNextRound = true;
      } else {
        alert(
          'Thank you for your participation. Your prize is: ' + userPrize + '$'
        );
      }
    }
  }
} else {
  //user clicks the 'Cancel' button first
  alert('You did not become a billionaire, but can.');
}
