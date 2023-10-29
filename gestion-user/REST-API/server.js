/* -------------------------------------------------------------------------- */
/*                               index || Server                              */
/* -------------------------------------------------------------------------- */


require("dotenv").config();
require('./config/database')()
const app= require('./app');
const {  PORT } = process.env;
const PORTS = PORT || 3030;




app.listen(PORTS,()=>{
console.log(`Server is running on port ${PORT}`);
});

