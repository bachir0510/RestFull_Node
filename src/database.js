const mongoose = require("mongoose");
const URI = "mongodb://localhost/task_db";

( async() => {
try{
    const db = await mongoose.connect(URI)
console.log('Database is connected to:',db.connection.name);
}catch(error){
    console.log(error)
}
}) ()