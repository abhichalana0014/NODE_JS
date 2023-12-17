const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
let database = "inotebook";
const dbConnect = async () => {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("users");  
};

module.exports = dbConnect;