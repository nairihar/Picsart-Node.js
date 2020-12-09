function promise1() {
  return new Promise(r => {
    setTimeout(() => {
      r('promise1')
    }, 3000)
  })
}


function promise2() {
  return new Promise(r => {
    setTimeout(() => {
      r('promise2')
    }, 2000)
  })
}

Promise.coroutine(function * () {

  console.log('start');

  const v1 = yield promise1();

  console.log('mid', v);

  const v2 = yield promise2();

  console.log('end', v2);
  
})