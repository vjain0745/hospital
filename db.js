const mongoose =require("mongoose");

const URI = "mongodb+srv://abc:abc@cluster0.wn2yh.mongodb.net/test?retryWrites=true&w=majority";

const connectdb= async()=>{
    await mongoose.connect(URI, { useUnifiedTopology: true , useNewUrlParser: true, useFindAndModify: false });

 console.log("db connected");
};

module.exports = connectdb;