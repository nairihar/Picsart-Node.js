const { Readable, Transform } = require('stream');

function clock () {
  let c = 0;
  const stream = new Readable({
    objectMode: true,
    read() {}
  })

  setInterval(() => {
    c += 1;
    stream.push(`${c}`)
  }, 1000);

  return stream
}

function mult2 () {
  return new Transform({
    objectMode: true,
    transform: (n, _, done) => {
      done(null, n * 2);
    }
  })
}

const m$ = mult2();
const c$ = clock().pipe(m$);


// st.on('data', (n) => {
//   console.log('Data:', n);
// });

console.log(m$.isPaused())


// setTimeout(() => {
//   m$.pause();
//   console.log('paused')
// }, 3000);

// setTimeout(() => {
//   m$.resume();
//   console.log('resume')
// }, 6000);

// // clock().pipe(process.stdout);

// process.stdin.on('data', buf => {

// });



// // process.stdin.pipe(toUpperCase()).pipe(process.stdout);

// // Buffer [1-255, 123, 123, 123, 213123]

// // async iteration

// // for await (let a of [Promise.resolve()]) {

// // }

// // a = {
// //   then() {
// //     return 1
// //   }
// // }

// // stream -> iterable

// // observable
// // observers[f1, f2, foo]
// subject


// subject.sub(function foo(num) {

// })

// sub.publsih(123)


// ///

// // consumer

// // consumer functions[]
// // broker


// // publisher


// pipeline(
//   fs.createReadStream('archive.tar'),
//   zlib.createGzip(),
//   fs.createWriteStream('archive.tar.gz'),
//   (err) => {
//     if (err) {
//       console.error('Pipeline failed.', err);
//     } else {
//       console.log('Pipeline succeeded.');
//     }
//   }
// );