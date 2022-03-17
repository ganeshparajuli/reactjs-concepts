const express = require("express");
const mongoose =require('mongoose');
require("dotenv").config();
//import routes
const userRoutes=require('./routes/user')
//app
const app = express();
//db 
mongoose
    .connect(process.env.MONGODB_URL  || 'mongodb://localhost/mychoice')
    .then (() =>console. log("DB Connected")); 
//*recommended alternate way mention below.    
// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mychoice');

//routes
app.use("/api",userRoutes)

// app.get("/", (req, res) => {
//     res.send("hello from node js");
// });
const port = process.env. PORT || 8000;
app.listen(port, () => {
    console. log(`Server is running on port ${port}`);
});