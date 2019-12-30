function getMin(arrOfIntArg) {
  arrOfIntArg.sort(function(a, b) {
    return a - b;
  });
  return arrOfIntArg[0];
}

getMin();
