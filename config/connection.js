const mongoose = require('mongoose')

const connectionstring = process.env.CONNECTIONSTRING

mongoose.connect(connectionstring).then((res)=>{
    console.log("MongoDB Atals successfully connected with cookpedia Server");
}).catch(err=>{
    console.log("MongoDB Atals connection failed!!");
    console.log(err);
})