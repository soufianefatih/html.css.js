const app = require('./route')
require('./config/database')
require('./model/index')











const PORT = process.env.PORT || 5500;

app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`);
});
