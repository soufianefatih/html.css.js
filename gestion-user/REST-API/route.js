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
const agenceRoutes = require("./route/agence");
const categoryRoutes = require("./route/category");
const carsRoutes = require("./route/cars");
const userRoutes = require("./route/user");
const bookingRoutes = require("./route/booking");
const reviewRoutes = require("./route/review");


//* Register Our Routes
  app.use("/api/location/", authRoutes);
  app.use("/api/location/agence", agenceRoutes);
  app.use("/api/location/category", categoryRoutes);
  app.use("/api/location/cars", carsRoutes);
  app.use("/api/location/users",userRoutes);
  app.use("/api/location/booking",bookingRoutes);
  app.use("/api/location/review",reviewRoutes);

  

 module.exports = app;
