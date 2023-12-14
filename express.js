const express = require("express");
const app = express();

app.get("", (req, res) => {
    res.send("this is my homePage");
});
app.get("/about", (req, res) => {
    res.send("this is my about");
});
app.get("/help", (req, res) => {
    res.send("this is my help");
});

app.listen(5000);
