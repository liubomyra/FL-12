function addOne(x) {
  return x + 1;
}

function pipe() {
  let args = Array.prototype.slice.call(arguments);
  let i;
  let result = args[0];
  for (i = 1; i < args.length; i++) {
    result = args[i](result);
  }
  return result;
}

pipe(1, addOne);
