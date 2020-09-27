// refs = 0
console.log(1);


// refs += 1
setTimeout(() => { // 3 seconds
  // refs -= 1 .,,, 1-1=0
  console.log(2)
}, 3000);

// refs += 1

// refs -> 2
fs.readFile('asd', () => { // 2 seconds
  // refs -= 1  , 2-1=1
  console.log(3)
})

0.01 s