function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    // Removed the unexpected return statement
    //if (i === 3) {
    //  return;
    //}
  }
}

printNumbers2(5); // Prints 1, 2, 3, 4, 5