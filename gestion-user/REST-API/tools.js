// const express = require('express');
// const app = express()
// const bodyParser = require("body-parser");
// const cors = require('cors')




 module.exports = function (app){

    const bodyParser = require("body-parser");
    const cors = require('cors')

    app.use(cors())

    app.use("/upload", express.static("./upload"));
    
    
     
     //* the will let us get data the data form post
     app.use(bodyParser.urlencoded({ extended: true }));
     app.use(bodyParser.json());
    





 }