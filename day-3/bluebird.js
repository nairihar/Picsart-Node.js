Promise.resolve()
  .then(() => {

  })


Promise.resolve()
  .then(() => {
    
  })


  // promise queue: [cb, cb]

  Promise = require('bluebird');

Promise.resolve()
  .then(() => { // cb1
      console.log(1)
  })


Promise.resolve()
  .then(() => { // cb2
    console.log(2)
  });

  process.nextTick(() => {
    console.log(2)
  })

  setImmediate(() => {
      cb1() console.log(1)
      cb2() console.log(2)
  })

  // libuv immediate queue : 
