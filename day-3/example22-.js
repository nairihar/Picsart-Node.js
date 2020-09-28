const fs  = require('fs');

fs.readFile('file.txt', (err) => {
  process.nextTick(() => {
    console.log('nextTick in fs');
  });

  setTimeout(() => {
    console.log('setTimeout');
    
    process.nextTick(() => {
      console.log('nextTick in setTimeout');
    });
  }, 0);
  
  setImmediate(() => {
    console.log('setImmediate');

    process.nextTick(() => {
      console.log('nextTick in setImmediate');

      Promise.resolve()
        .then(() => {
          console.log('Promise in setImmediate');
        });
    });
  });  
});
// nextTick in fs
// setImmediate
// nextTick in setImmediate
// Promise in setImmediate
// setTimeout
// nextTick in setTimeout

// NEXT TICK
// PROMISE

// TIMERS : cb2
// I/O // stex
// IMMEDIATE : cb3
// CLOSE
