const { Transform } = require('stream');

const myTransform = new Transform({
    // writableObjectMode: true,

  transform(chunk, encoding, callback) {
    // Coerce the chunk to a number if necessary.


      // Transform the chunk into something else.
    const data = chunk.toString().toUpperCase();

    // Push the data onto the readable queue.
    callback(null, data);
  }
});

process.stdin.pipe(myTransform).pipe(process.stdout)

