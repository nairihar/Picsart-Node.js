// local scope [number] = 5
// module cache -> function pointer

const number = 5;

module.exports = function() {
  // scope

  let number2 = 4;

  console.log(number,number2);
};
