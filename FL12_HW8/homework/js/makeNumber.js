function makeNumber(stringWithSymbols) {
  let i;
  let stringOfNumbers = [];
  let arrSymbols = stringWithSymbols.split('');
  for (i = 0; i < arrSymbols.length; i++) {
    if (!isNaN(arrSymbols[i])) {
      stringOfNumbers.push(arrSymbols[i]);
    }
  }
  return stringOfNumbers;
}

makeNumber();
