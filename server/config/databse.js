
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://hbdsharanappa52:Z6R37v7Kid6pgRV3@cluster0.xofe4ov.mongodb.net/insurancedb",);
        console.log(" MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
