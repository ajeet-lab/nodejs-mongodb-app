const mongoose = require("mongoose");

const connectDB = async (req, res) => {
    try{
        await mongoose.connect("mongodb://localhost:27017/tata_capital")
        console.log("Database is connected...");
    }catch(e){
        console.log("Error :: "+e.message);
    }
}

module.exports = connectDB;