Promise.resolve(1)
  .then(a => {
    console.log(1);
  });

process.nextTick(() => {
  console.log(2)
})