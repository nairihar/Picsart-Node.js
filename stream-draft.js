Get /metadata/:id

// 5gb
// fs.readFile('./metadata-1.txt')

// 1mb -> RAM
const stream = fs.createReadStream('./metadata-1.txt')


function transformStream() {
  .on('data', (chunk) => {
    const newData = chunk.toUpperCase()

    next(newData)
  });
}

stream.pipe(transformStream).on('data', (chunk) => {
  res.write(chunk);

  res.end()
});


readFileStream
  .pipe(toUpperCase)
  .pipe(testStera)
  // ..


// start 0, 2s, 2s, 2s, 2s, 2s, 20m, 
// watch --------------------|
// --------------------------> load



const stream = fs.createWriteStream('./metadata-1.txt')


->   <->    |


read.pipe(write)

pipeline(
  fs.createReadStream('archive.tar'),

  zlib.createGzip(),

  fs.createWriteStream('archive.tar.gz'),

  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);