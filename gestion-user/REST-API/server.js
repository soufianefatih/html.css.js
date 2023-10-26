const express = require('express');
const app = express ();
const bodyParser = require("body-parser");
const cors = require('cors')

   app.use(cors())

   app.use("/upload", express.static("./upload"));

   const {
    routerAuth,
   
  } = require("./routes");
    
  app.use("/api/users", routerAuth);

    
     
     //* the will let us get data the data form post
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    





  

 module.exports = app;
