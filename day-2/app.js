(function (exports, require....) {
  // local scope foo: pointer

  console.log(__dirname, __filename)

  const foo = require('./helper');

  foo()

  foo()
}) ... 