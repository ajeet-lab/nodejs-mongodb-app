const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const connectDB = require("./src/config/DB")

connectDB();

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const myRoute = require("./src/routers/MyRouter")
app.use("/api", myRoute);


app.listen(PORT, () => console.log(`Server started at ${PORT}`));