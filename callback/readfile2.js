const { readFile } = require("fs");


let readfilePromise = new Promise((resolve,reject)=>{
    readFile("text.txt", "utf-8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }resolve(data);
        // insert to mysql
      });
    })

readPromose
.then((result)=>{
    console.log(result)
})
.then((err)=>{
    console.log(err)
})