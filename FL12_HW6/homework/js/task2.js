// Your code goes here
var inputValueAgain = "Please reload the page and try again.";

var inputA = prompt(
  " Input 3 numbers (a, b, c) for triangle sides length. At first input  a = ",
  "a"
);

if (inputA === "" || inputA === false || inputA === true || isNaN(inputA)) {
  alert(" Input values should be ONLY numbers. " + inputValueAgain);
} else {
  var a = Number.parseFloat(inputA);

  if (a <= 0) {
    alert(
      " A triangle must have 3 sides with a positive definite length  " +
        inputValueAgain
    );
  } else {
    var inputB = prompt(" Input b = ", "b");
    if (inputB === "" || inputB === false || inputB === true || isNaN(inputB)) {
      alert(" Input values should be ONLY numbers. " + inputValueAgain);
    } else {
      var b = Number.parseFloat(inputB);

      if (b <= 0) {
        alert(
          " A triangle must have 3 sides with a positive definite length  " +
            inputValueAgain
        );
      } else {
        var inputC = prompt(" Input c = ", "c");
        if (
          inputC === "" ||
          inputC === false ||
          inputC === true ||
          isNaN(inputC)
        ) {
          alert(" Input values should be ONLY numbers. " + inputValueAgain);
        } else {
          var c = Number.parseFloat(inputC);

          if (c <= 0) {
            alert(
              " A triangle must have 3 sides with a positive definite length  " +
                inputValueAgain
            );
          } else {
            console.log(" Your values: " + a, b, c);
            if (a + b <= c || a + c <= b || b + c <= a) {
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
  }
}
