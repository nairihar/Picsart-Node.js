const { sum } = require('./calculator');

const n = parseInt(process.argv[2]);
const m = parseInt(process.argv[3]);

console.log(`The sum of n & m is ${sum(n, m)} The multiplication of n & m is: ${mult(n, m)}`)