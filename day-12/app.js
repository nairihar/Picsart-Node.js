// request ->

// route

// middlware
// // log request
// // auth
// // parse


// endpoint GET '/users'

// <- response

setTimeout(function() {
  // refs -=1 
  setTimeout(function() {
    console.log(1);
  }, 60000); // refs += 1
}, 60000); // refs += 1




express.close()


