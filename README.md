# JavaScript Null Value Handling Bug

This repository demonstrates a common JavaScript bug involving the incorrect handling of null or undefined values.

The `foo` function attempts to add two numbers but doesn't properly handle the case where either input is null.

The bug is in the `if` condition.  While it checks for null, it doesn't address other falsy values like 0 or an empty string. This could lead to incorrect calculations. 

The solution demonstrates a more robust method of null checking to avoid unexpected results.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g., Node.js, browser's console).
3. Observe the output.  The output will incorrectly produce 0 even when one of the inputs is a number and the other null.   
4. Review `bugSolution.js` to see a more robust approach.
