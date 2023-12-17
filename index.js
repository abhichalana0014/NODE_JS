const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
let database = "inotebook";
const getData = async () => {
    let result = await client.connect();

    let db = result.db(database);

    let collection = db.collection("users");

    // console.log(collection.find({}).toArray());

    let response = await collection.find({}).toArray();

    console.log(response);
};

getData();
