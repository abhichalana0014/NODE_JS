const fs = require("fs");
const path  = require("path");

const dirPath = path.join(__dirname, "crud");
console.log(dirPath);

const filePath = `${dirPath}/data.txt`
// create a file.
// fs.writeFileSync(filePath, "this is my new learning node js files ");

// // read a file.
// fs.readFile(filePath, "utf-8",(err, item)=>{
//     console.log(item)
// })

// // update a file.
// fs.appendFile(filePath, "and i am currently perform the crud operations", (err)=>{
//     if(!err) console.log("file is updated")
// })

// //renam a file.
// fs.rename(filePath, `${dirPath}/newdata.txt`, (err)=>{
//     if(!err) console.log("file name is updated")
// })

//delete a file.
fs.unlinkSync(`${dirPath}/newdata.txt`)


