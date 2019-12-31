function isBigger(param1, param2) {
  return param1 > param2;
}

function isSmaller(param1, param2) {
  return !(param1 === param2 || isBigger(param1, param2));
}

isSmaller();
