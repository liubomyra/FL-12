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

function countNumbers(inputString) {
  let orderedArray;
  orderedArray = makeNumber(inputString).sort(function(a, b) {
    return a - b;
  });

  let countNumObject = {};
  let countNum = 0;
  let i;
  let propertyName;

  for (i = 0; i < orderedArray.length; i++) {
    propertyName = orderedArray[i];
    if (Object.prototype.hasOwnProperty.call(countNumObject, propertyName)) {
      countNum++;
    } else {
      countNum = 1;
    }
    countNumObject[propertyName] = countNum;
  }
  return countNumObject;
}

countNumbers();
