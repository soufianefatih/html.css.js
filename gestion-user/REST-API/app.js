const mongoose = require("mongoose");
const express = require('express');
const app = express ();
require("dotenv").config();
require('./config/database')()


const {  PORT } = process.env;



const PORTS = PORT || 6000;

app.listen(PORTS,()=>{
console.log(`Server is running on port ${PORT}`);
});

