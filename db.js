const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://karthikeyaguruju:8wYgqLPBWem7Ol64@cluster0.oz96v82.mongodb.net/nxtrider' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
