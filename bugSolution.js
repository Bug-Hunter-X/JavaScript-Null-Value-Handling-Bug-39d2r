function foo(a, b) {
  // Check if either a or b is null or undefined using loose equality
  if (a == null || b == null) {
    return 0; // Handle null or undefined values
  }

  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(0,5)); //Output 5
console.log(foo('',5)); //Output 5