const express = require("express");
const app = express();
const mongoose =require("mongoose");
const bodyParser = require("body-parser");
const pug = require("pug");
const Router = require("express");
const connectdb = require("./db");
const PORT = process.env.PORT || 3000;



// mongoose.connect("mongodb://localhost:27017/hospital", { useUnifiedTopology: true , useNewUrlParser: true, useFindAndModify: false});
// var db = mongoose.connection;
connectdb();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// db.on('open', function () {

//     console.log("db connect");
// });


app.set("view engine", "pug");


var routes = require('./routes/index');
app.use('/api', routes);



app.listen(PORT ,()=>{
console.log("running gooddd....");
});
