// Your code goes here
var inputValueAgain = "Please reload the page and try again.";
var notCompleteEquation = "It is not a complete square equation.";

var input = prompt(
  "Hello! Please input 3 comma separated values for quadratic equation.",
  "a, b, c"
);

if (input.length === 0) {
  alert("input is empty. " + inputValueAgain);
} else {
  var inputValues = input.split(",", 3);
  if (inputValues.length !== 3) {
    alert("input has < 3 values. " + inputValueAgain);
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
      alert("Invalid input data." + inputValueAgain);
    } else {
      console.log("Your values: " + a, b, c);

      if (a === 0 && b !== 0) {
        console.log(
          "It is linear equation. It has one solution, x1 = " + -c / b + "."
        );
      } else if (a === 0 && b === 0 && c !== 0) {
        console.log("It is not equation.");
      } else if (a === 0 && b === 0 && c === 0) {
        console.log("x can be any number.");
      } else if (a !== 0 && b === 0 && c === 0) {
        console.log(notCompleteEquation + " It has one solution, x1 = 0.");
      } else if (a !== 0 && c === 0) {
        console.log(
          notCompleteEquation +
            " It has two solution, x1 = 0 " +
            " and x2 = " +
            -b / a +
            "."
        );
      } else if (a !== 0 && b === 0 && c !== 0) {
        if (c / a > 0) {
          console.log(notCompleteEquation + " It has no real solution.");
        } else {
          console.log(
            notCompleteEquation +
              " It has two solution, x1 = " +
              Math.sqrt(-c / a) +
              " and x2 = " +
              -Math.sqrt(-c / a) +
              "."
          );
        }
      } else if (a !== 0 && b !== 0 && c !== 0) {
        var Discriminant = b * b - 4 * a * c;
        var squareRoot = Math.sqrt(b * b - 4 * a * c);
        var denominator = 2 * a;
        var root_1 = (-b + squareRoot) / denominator;
        var root_2 = (-b - squareRoot) / denominator;

        if (Discriminant === 0) {
          console.log(
            "Equation has two identical solution, x1 = x2 = " + root_1 + "."
          );
        } else if (Discriminant > 0) {
          console.log(
            "Equation has two solution, x1 = " +
              root_1 +
              " and x2 = " +
              root_2 +
              "."
          );
        } else {
          console.log("Equation has no real solution.");
        }
      }
    }
  }
}
