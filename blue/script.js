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

function* gen() {
  yield
}

const Promise = require('bluebird');

Promise.coroutine(function * () {

  console.log('start');

  // const v1 = yield promise1();

  // console.log('mid', v1);

  const v2 = yield promise2();

  const v = yield Promise.all([
    promise1(),
    promise2(),
  ]);

  console.log(v)

  console.log('end');
  
})()  

function coroutine(gen) {

}

