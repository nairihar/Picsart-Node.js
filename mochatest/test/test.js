const path = require('path');
const Mocha = require('mocha');

const rootTest = new Mocha();

// npm test ping/ping_test.js
// npm test ping

rootTest.addFile(
  path.join(__dirname, './helpers/utils_test.js')
);

rootTest.addFile(
  path.join(__dirname, './ping/ping_test.js')
);

rootTest.run((failed_count) => {
  if (failed_count !== 0) {
    return console.log(':(');
  }

  console.log('Done :)');
});