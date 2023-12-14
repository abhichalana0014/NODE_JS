const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");

console.log(publicPath)

app.use(express.static(publicPath))


// app.get("", (req, res) => {
//     res.send("this is my homePage");
// });
// app.get("/about", (req, res) => {
//     res.send("this is my about");
// });
// app.get("/help", (req, res) => {
//     res.send("this is my help");
// });



app.listen(5000);
