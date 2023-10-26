const mongoose = require("mongoose");
const express = require('express');
const app = express ();
// require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();



// const { DB_HOST, PORT } = process.env;

// mongoose.set("strictQuery", true);

// mongoose.connect(process.env.DB_HOST, () => console.log("connected to db"));
const connectToMongo = async () => {
    await mongoose.connect('mongodb://127.0.0.1');
    console.log("Connected to MongoDB");
  };
  
  connectToMongo();
// mongoose
//     .connect('mongodb://127.0.0.1')
//     .catch (error => console.log(error));

const PORT = process.env.PORT || 6000;

app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`);
});

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     app.listen(PORT);
//     console.log("Server started at port " + PORT);
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });
