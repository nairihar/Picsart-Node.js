'use strict';


const fs = require('fs');

const path = require('path');


const passedArguments = process.argv[2];

let dirName = path.resolve(passedArguments || process.cwd());

let paths = [];

function getDirName(dir, fn) {

    return new Promise(function (res,rej) {
        fs.readdir(dir, function (error, stats) {
            if (error) {
                return fn(error);
            }
            let i = 0;
  
            (function next() {
                let file = stats[i++];
                if (!file) {
                    return fn(null, res,rej);
                }
                file = path.resolve(dir, file);
                fs.stat(file, function (error, stat) {
                    if (stat && stat.isDirectory() || stat.isFile()) {
                        paths.push(file);
                        getDirName(file, function (error) {
                            next();
                        });
                    } else {
                        next();
                    }
                });
            })();
        })
    })
}

getDirName(dirName, function (err, res, rej) {
    if (err){
        error(err.message, true);
    }else {
        res(paths);
    }
}).then(function (arr) {
   return  arr.map(i => i.slice(1));
}).then(pathsToHash).then(console.log);



function pathsToHash(paths) {
    const fileObject = {};
    const regexp = /\..*$/;
    for (let i = 0; i < paths.length; i++) {
        const filepathArr = paths[i].split('/');
        let currentDepth = fileObject;
        for (let i = 0; i < filepathArr.length; i++) {
            if (!(currentDepth[filepathArr[i]] in fileObject)) {
                if (regexp.test(filepathArr[i].trim())){
                    console.log(filepathArr[i], 'filepath');
                    currentDepth[filepathArr[i]] = true
                }else{
                    currentDepth[filepathArr[i]] = {...currentDepth[filepathArr[i]]};
                }
                currentDepth = currentDepth[filepathArr[i]];
            }
        }
    }
    return JSON.stringify(fileObject);
}


function help() {
    console.log('the usage of the script is the following');
    console.log('simply pass the file path (for absolute paths use /) to the folder after the execution command');
}

function error(msg, helpIncluded = false) {
    console.error(msg);
    if (helpIncluded) {
        help();
    }
}
