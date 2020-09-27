setTimeout(function() {
  console.log(1);
}, 0);

setImmediate(function() {
  console.log(2)
});

Promise.resolve()
  .then(() => {
    console.log(3)
  })


// .on('close', () => {

// })


false.readFile('asdsad', () => {
  console.log()
})

false.readFile('asdsad', () => {
  
})


