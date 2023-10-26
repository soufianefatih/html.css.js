const mongoose = require('mongoose');
require("dotenv").config();


const { DB_CONNECT } = process.env;

const connectToMongo = async () => {
    await mongoose.connect(DB_CONNECT);
    console.log("Connected to MongoDB");
  };


module.exports = connectToMongo



// .then(() => {
//     app.listen(PORT);
//     console.log("Server started at port " + PORT);
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });
  