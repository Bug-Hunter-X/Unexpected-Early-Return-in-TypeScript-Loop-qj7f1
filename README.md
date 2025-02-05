# Unexpected Early Return in TypeScript Loop

This example demonstrates a common error in TypeScript involving unexpected early returns from loops. The function `printNumbers2` is intended to print numbers from 1 to n. However, due to an unintended `return` statement within the loop, it prematurely exits after printing 3, even if n is greater than 3.

## How to reproduce
1.  Run `bug.ts` using a TypeScript compiler and Node.js.
2. Observe that `printNumbers2` only prints 1, 2, and 3.