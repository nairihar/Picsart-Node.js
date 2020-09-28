const fs = require("fs");
const basePath = process.argv[2];
const result = {};
const isDirectory = path => {
  return new Promise((resolve, reject) => {
    fs.lstat(path, (err, stats) => {
      if (err) reject("No such file or Directory");
      resolve(stats.isDirectory());
    });
  });
};
const createTree = (path, target) => {
  const throwError = () => reject("Somthing went wrong while getting the list of files");

  return new Promise((reject, resolve) => {
    fs.readdir(path, (err, list) => {
      if (err) {
        return throwError();
      }

      for (const item of list) {
        const currentLocation = `${path}/${item}`;

        isDirectory(currentLocation).then(isDir => {
          console.log(result); //I can see result only here in every interation
          if (!isDir) {
            target[item] = true;
          } else {
            target[item] = {};
            resolve(createTree(currentLocation, target[item]));
          }
        });

      }
    });
  });
};

createTree(basePath, result)
  .then(() => console.log("result --->", result)) //But this part of code always works earlyer
  .catch(err => console.log("Consume Error ==>", err));