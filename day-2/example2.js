for (let i = 1; i <= 123; i++) {
  let a = 2*2;
}

setTimeout(function() {
  console.log(2)
}, 0); // 4

// push cb to queue
setImmediate(() => {
  console.log(3);
})