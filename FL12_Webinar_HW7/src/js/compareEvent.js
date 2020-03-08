const compareEvent = (playerChoose, computerChoose) => {
  if (playerChoose === computerChoose) {
    return -1;
  }
  if (playerChoose === 'Rock') {
    if (computerChoose === 'Scissors') {
      return 1;
    }
    return 0;
  }
  if (playerChoose === 'Paper') {
    if (computerChoose === 'Scissors') {
      return 0;
    }
    return 1;
  }
  if (playerChoose === 'Scissors') {
    if (computerChoose === 'Rock') {
      return 0;
    }
    return 1;
  }

  return -1;
};

export default compareEvent;
