const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", async (_, resp) => {
    try {
        let data = await getData();
        console.log(data);
        resp.json(data);
    } catch (error) {
        console.error("Error to show data: ", error);
        resp.status(500).json({ error: "Internal Serval Error" });
    }
});

app.post("/", async (req, resp) => {
    try {
        // console.log(req.body)
        let _data = await dbConnect();
        const dataToInsert = {
            ...req.body,
            date: new Date(),
        };
        const data = await _data.insertOne(dataToInsert);
        resp.send(data);
    } catch (error) {
        console.error("Error to post data: ", error);
        resp.status(500).json({ error: "Internal Serval Error" });
    }
});

app.put("/:name", async (req, resp) => {
    try {
        const collection = await dbConnect();
        const dataToInsert = {
            ...req.body,
            date: new Date(),
        };
        let result = collection.updateOne(
            { name: req.params.name },
            { $set: dataToInsert }
        );

        resp.send({ result: "update" });
    } catch (error) {
        console.error("Error to update the data: ", error);
    }
});

app.delete("/:id", async (req, resp) => {
    try {
        const collection = await dbConnect();
        const result = await collection.deleteOne({
            _id: new mongodb.ObjectId(req.params.id),
        });
        resp.send(result);
    } catch (error) {
        console.error("Error to delete the data: ", error);
    }
});

const getData = async () => {
    try {
        const collection = await dbConnect();
        const data = await collection.find().toArray();
        return data;
    } catch (error) {
        console.error("Error to get data: ", error);
    }
};

app.listen(4000);
// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

// dbConnect();
