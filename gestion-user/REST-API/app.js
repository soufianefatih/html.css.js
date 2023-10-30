const express = require('express');
const app = express ();
const bodyParser = require("body-parser");
const cors = require('cors')
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

   app.use(cors())
   app.use(express.json());
   app.use("/upload", express.static("./upload"));

   const {
    routerAuth,
   
  } = require("./routes");
    
  app.use("/api/users", routerAuth);

    
     
     //* the will let us get data the data form post
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


    





  

 module.exports = app;
