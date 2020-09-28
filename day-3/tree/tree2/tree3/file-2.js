const fs  = require('fs'); // {}


// refs = 1
// x time -> register cb in x time
fs.readFile('file.txt', (err, data) => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  

});

// refs = 2
// 0 time, register cb immediatly
setImmediate(() => {
  console.log('setImmediate');

  setImmediate(() => {
    console.log('setImmediate 2');
  });
});


// NOdejs
// nextTick
// promise

// EVENT LOOP , LIBUV
// timer: []
//NOdejs
// io: []
//NOdejs
// immediate: []
//NOdejs
// close: []

