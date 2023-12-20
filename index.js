const express = require("express");
const connection = require("./db");
const Product = require("./models/Users")


const app = express();

app.use(express.json());
connection();

app.post("/create", async (req, resp) => {
    try {
        let data = new Product(req.body);
        let result = await data.save();

        console.log(result);
        resp.send(result);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
});

app.listen(4000)