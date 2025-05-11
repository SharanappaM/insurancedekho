
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("Mongodb url",);
        console.log(" MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
