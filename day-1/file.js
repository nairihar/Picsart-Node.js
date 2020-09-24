const fs = require('fs');

console.log(1);
const data = fs.readFileSync('text2.file');
console.log(2, data);

// const Promise = require('bluebird');
// const { reject, resolve } = require('bluebird');

// const readFileAsync = Promise.promisify(fs.readFile);


// fs.readFile('hello.txt', (err, data) => {
//   console.log(err, data.toString());
// });


// function promisify(fun) {
//    new Promise((res, rej) => {
//     // ... 
//     function callback(err, data) {
//       if (err) {
//         return reject(err);
//       }
//       resolve(data);
//     }
//     fs.readFile(arg1, arg2, callback)
//   });

//   // return function(promise)
// }

// readFileAsyc = promisify(fs.readFile)