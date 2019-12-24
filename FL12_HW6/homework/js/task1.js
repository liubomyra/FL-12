const inputA = prompt(
  'Input 3 values (a, b, c) for the quadratic equation. ' +
    'Note: a should not be equal to 0. ' +
    'At first input value for a',
  'a'
);


if (inputA === '' || inputA === false || inputA === true || isNaN(inputA)) {
  alert('Invalid input data');
} else {
  const a = Number.parseFloat(inputA);
  if (a === 0) {
    alert('Invalid input data');
  } else {
    const inputB = prompt('Input value for b', 'b');

    if (inputB === '' || inputB === false || inputB === true || isNaN(inputB)) {
      alert('Invalid input data');
    } else {
      const b = Number.parseFloat(inputB);

      const inputC = prompt('Input value for c', 'c');

      if (
        inputC === '' ||
        inputC === false ||
        inputC === true ||
        isNaN(inputC)
      ) {
        alert('Invalid input data');
      } else {
        const c = Number.parseFloat(inputC);

 
        const coefficientDiscriminat = 4;
        const coefficienDenominator = 2;
        const discriminant = b * b - coefficientDiscriminat * a * c;
        const squareRoot = Math.sqrt(discriminant);
        const denominator = coefficienDenominator * a;
        const root_1 = (-b + squareRoot) / denominator;
        const root_2 = (-b - squareRoot) / denominator;


        if (discriminant === 0) {
          console.log('x = ' + Math.round(root_1));
        } else if (discriminant > 0) {
          console.log(
            'x1 = ' + Math.round(root_1) + ' and x2 = ' + Math.round(root_2)
          );
        } else {
          console.log('No solution');
        }
      }
    }
  }
}
