// Your code goes here
var inputValueAgain = "Please reload the page and try again.";

var input = prompt(
  "Hello! Please input 3 numbers (a, b, c) for triangle sides length.",
  "a, b, c"
);

if (input.length === 0) {
  alert(" input is empty. " + inputValueAgain);
} else {
  var inputValues = input.split(",", 3);
  if (inputValues.length !== 3) {
    alert(" input has < 3 values. " + inputValueAgain);
  } else {
    var a = Number(inputValues[0]);
    var b = Number(inputValues[1]);
    var c = Number(inputValues[2]);
    if (
      inputValues[0] === "" ||
      inputValues[0] === false ||
      inputValues[0] === true ||
      isNaN(a) ||
      inputValues[1] === "" ||
      inputValues[1] === false ||
      inputValues[1] === true ||
      isNaN(b) ||
      inputValues[2] === "" ||
      inputValues[2] === false ||
      inputValues[2] === true ||
      isNaN(c)
    ) {
      alert(" Input values should be ONLY numbers " + inputValueAgain);
    } else {
      if (a <= 0 || b <= 0 || c <= 0) {
        alert(
          " A triangle must have 3 sides with a positive definite length  " +
            inputValueAgain
        );
      } else {
        console.log(" Your values: " + a, b, c);
        if (a + b < c || a + c < b || b + c < a) {
          alert(" Triangle doesn’t exist ");
        } else if ((a === b) === c) {
          alert(" Equilateral triangle ");
        } else if (
          (a === b && a !== c) ||
          (a === c && a !== b) ||
          (c === b && c !== a)
        ) {
          alert(" Isosceles triangle ");
        } else {
          alert(" Scalene triangle ");
        }
      }
    }
  }
}
