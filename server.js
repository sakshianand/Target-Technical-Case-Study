const express = require('express')
const app = express();
const axios = require('axios')
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

// use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/products',require(path.join(__dirname,'./server/products')))

app.listen(process.env.PORT || 5000,()=>{
   console.log('Application listening on port 5000!')
})




//Set up default mongoose connection
var mongoUrl = 'mongodb://root:root%40123@ds141815.mlab.com:41815/heroku_v3nz5dtm';

mongoose.connect(mongoUrl,{
  useNewUrlParser:true
});

mongoose.connection.on('connected',()=>{
  console.log("mongoose is now connected to",mongoUrl)
});

mongoose.connection.on('error',(err)=>{
  console.log("error in mongoose connection",err);

mongoose.connection.on('disconnected',()=>{
  console.log("mongoose is now disconnected");
});

process.on('SIGINT',()=>{
    mongoose.connection.close(()=>{
      console.log('mongoose disconnected on process termination')
    });
  });
});




