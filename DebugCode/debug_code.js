function performOperation() {
  // Get user input from input fields
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);
  // Check if inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
    let result1 = addition(num1, num2);
    let result2 = multiply(num1, num2);
    let result3 = division(num1, num2);

    // Display the result
    displayResult(result1, result2, result3);
  } else {
    displayResult("Please enter valid numbers");
  }
}
function addition(a, b) {
  debugger;
  return a + b;
}
function division(a, b) {
  debugger;
  return a / b;
}
function multiply(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a * b;
}

function displayResult(result1, result2, result3) {
  // Display the result in the paragraph element
  const resultElement = document.getElementById("result");
  resultElement.textContent = `The addition result is: ${result1} 
    The multiplication result is: ${result2} 
    The division result is: ${result3}`;
}
