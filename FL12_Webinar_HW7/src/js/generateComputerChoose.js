const choose = ['Rock', 'Paper', 'Scissors'];

const generateComputerChoose = () => {
  const computerRandomNumber = Math.floor(Math.random() * 3);
  return choose[computerRandomNumber];
};

export default generateComputerChoose;
