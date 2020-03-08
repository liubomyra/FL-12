const resultRound = document.querySelector('.result-round');
let result;

export default function logRoundResults(
  userChoise,
  computerChoose,
  compare,
  round
) {
  if (compare === -1) {
    result = `It is a tie`;
  }
  if (compare === 1) {
    result = `You’ve WON!`;
  }
  if (compare === 0) {
    result = `You’ve LOST!`;
  }

  resultRound.textContent = `
    Round ${round}: ${userChoise} vs. ${computerChoose}. ${result}
  `;
}
