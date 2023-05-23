// Wait for the DOM content to be loaded before executing the code
document.addEventListener("DOMContentLoaded", function() {
  // Select the display element, numeric buttons, equal button, and clear button
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".buttons button");
  const equalButton = document.querySelector(".equal");
  const clearButton = document.querySelector(".clear");

  // Add event listeners to numeric buttons
  buttons.forEach(button => {
    // When a numeric button is clicked
    button.addEventListener("click", function() {
      const value = button.textContent;
      // Append the clicked value to the display
      display.value += value;
    });
  });

  // Add event listener to clear button
  clearButton.addEventListener("click", function() {
    // Clear the display when the clear button is clicked
    display.value = "";
  });

  // Add event listener to equal button
  equalButton.addEventListener("click", function() {
    try {
      // Evaluate the expression and get the result
      const result = evalExpression(display.value);
      // Display the result in the display
      display.value = result;
    } catch (error) {
      // Display "Error" if an error occurs during evaluation
      display.value = "Error";
    }
  });

  // Function to evaluate the expression
  function evalExpression(expression) {
    // Define the operators and their corresponding functions
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b
    };

    // Split the expression into tokens using regular expression
    const tokens = expression.split(/(\+|\-|\*|\/)/);
    // Initialize the result with the first number in the expression
    let result = parseFloat(tokens[0]);

    // Iterate through the tokens and perform the calculations
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);

      // Check if the operator exists in the operators object and the operand is a valid number
      if (operators.hasOwnProperty(operator) && !isNaN(operand)) {
        // Perform the calculation using the operator and update the result
        result = operators[operator](result, operand);
      } else {
        // Throw an error if the expression is invalid
        throw new Error("Invalid expression");
      }
    }

    // Return the final result
    return result;
  }
});
