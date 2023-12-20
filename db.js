const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/products";

const connection = async () => {
    try {
        await mongoose.connect(mongoURI);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connection;
