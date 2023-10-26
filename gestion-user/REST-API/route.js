const express = require('express');
const app = express ();
require('./model/index');



const bodyParser = require("body-parser");
const cors = require('cors')

    app.use(cors())

    app.use("/upload", express.static("./upload"));
    
    
     
     //* the will let us get data the data form post
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    


//* Require Routes
const authRoutes = require("./route/auth");

const userRoutes = require("./route/user");



//* Register Our Routes

  app.use("/api/location/users",userRoutes);


  

 module.exports = app;
