const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");

console.log(publicPath);

// app.use(express.static(publicPath))

app.set("view engine", "ejs");

app.get("", (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});
app.get("/profile", (req, res) => {
    const user = {
        name : "Abhishek",
        city : "Abohar",
        phone: 9791999236,
        skills: ["nodejs", "php", "reactjs", "java", "angular" , "javascript"]
    }
    res.render("profile", {user});
});

app.get("/about", (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("*", (req, res) => {
    res.sendFile(`${publicPath}/help.html`);
});

app.listen(4000);
