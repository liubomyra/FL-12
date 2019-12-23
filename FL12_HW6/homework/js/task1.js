// Your code goes here
var inputValueAgain = "Please reload the page and try again.";
var notCompleteEquation = "It is not a complete square equation.";

var inputA = prompt(
  " Input 3 values (a, b, c) for quadratic equation. Note 'a' not equal to 0. At first input  a = ",
  "a"
);

if (inputA === "" || inputA === false || inputA === true || isNaN(inputA)) {
  alert(" Invalid input data. " + inputValueAgain);
} else {
  var a = Number.parseFloat(inputA);
  if (a === 0) {
    alert(" Invalid input data. " + inputValueAgain);
  } else {
    var inputB = prompt(" Input b = ", "b");
    if (inputB === "" || inputB === false || inputB === true || isNaN(inputB)) {
      alert(" Invalid input data. " + inputValueAgain);
    } else {
      var b = Number.parseFloat(inputB);

      var inputC = prompt(" Input c = ", "c");
      if (
        inputC === "" ||
        inputC === false ||
        inputC === true ||
        isNaN(inputC)
      ) {
        alert(" Invalid input data. " + inputValueAgain);
      } else {
        var c = Number.parseFloat(inputC);

        console.log("Your values: " + a, b, c);

        var Discriminant = b * b - 4 * a * c;
        var squareRoot = Math.sqrt(b * b - 4 * a * c);
        var denominator = 2 * a;
        var root_1 = (-b + squareRoot) / denominator;
        var root_2 = (-b - squareRoot) / denominator;

        if (Discriminant === 0) {
          console.log(
            "Equation has two identical solution, x1 = x2 = " +
              Math.round(root_1) +
              "."
          );
        } else if (Discriminant > 0) {
          console.log(
            "Equation has two solution, x1 = " +
              Math.round(root_1) +
              " and x2 = " +
              Math.round(root_2) +
              "."
          );
        } else {
          console.log("Equation has no real solution.");
        }
      }
    }
  }
}
