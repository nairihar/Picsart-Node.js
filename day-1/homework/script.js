require('./dotenv')
  .configAsync()
  .then(() => {
    console.log(process.env.EMAIL2)
  });

