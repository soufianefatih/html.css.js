
require("dotenv").config();
require('./config/database')()
const app= require('./server');



const {  PORT } = process.env;



const PORTS = PORT || 6000;

app.listen(PORTS,()=>{
console.log(`Server is running on port ${PORT}`);
});

