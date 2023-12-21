const express = require("express");
const connection = require("./db");
const User = require("./models/Users");

const app = express();

app.use(express.json());
connection();

app.get("/search/:key", async (req, resp) => {
    console.log(req.params.key);
    let data = await User.find({
        $or: [
            { name: { $regex: req.params.key } },
            { email: { $regex: req.params.key } },
        ],
    });

    resp.send(data);
});

app.delete("/:_id", async (req, resp) => {
    try {
        const data = await User.deleteOne(req.params);
        resp.send(data);
    } catch (error) {
        console.error("Error to delete the data: ", error);
    }
});

app.post("/create", async (req, resp) => {
    try {
        let data = new User(req.body);
        let result = await data.save();

        console.log(result);
        resp.send(result);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
});

app.listen(4000);
