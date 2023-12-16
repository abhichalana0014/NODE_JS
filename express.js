const express = require("express");
const reqFilter = require("./middleware");
const { run } = require("node:test");
const app = express();

const route = express.Router();



route.use(reqFilter)

app.get("/",(_, resp) => {
    resp.send("Welcome to HomePage.");
});
route.get("/about", (_, resp) => {
    resp.send("Welcome to AboutPage.");
});
route.get("/users", (_, resp) => {
    resp.send("Welcome to usersPage.");
});
app.get("/contact", (_, resp) => {
    resp.send("Welcome to contact Page.");
});

app.use("/",route)

app.listen(4000);
