const express = require('express');
const app = express ();
const bodyParser = require("body-parser");
const cors = require('cors')
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

   app.use(cors())
   app.use(express.json());
   app.use("/upload", express.static("./upload"));

   // * routing path
   const {
    routerAuth,
    routerUser 
  } = require("./routes");
    
  app.use("/api/users", routerAuth, routerUser);


   //* documentation swagger
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

     
     //* the will let us get data the data form post
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


  //* global midleware for not router
    app.use((req, res) => {
      res.status(404).json({ message: "Not Found" });
    });
    
    app.use((err, req, res, next) => {
      const { status = 500, message = "Server Error" } = err;
      res.status(status).json({ message });
    });
    


  

 module.exports = app;
