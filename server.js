const express = require('express')
const app = express();
const axios = require('axios')
const mongoose = require('mongoose');
const path = require('path');


app.use('/products',require(path.join(__dirname,'./server/products')))

// app.listen(8000, () => {
//   console.log('Application listening on port 8000!')
// });
app.listen(process.env.PORT || 5000,()=>{
   console.log('Application listening on port 5000!')
})




//Set up default mongoose connection
var mongoUrl = 'mongodb://root:root@ds141815.mlab.com:41815/heroku_v3nz5dtm';

mongoose.connect(mongoUrl,{
  useNewUrlParser:true
});

mongoose.connection.on('connected',()=>{
  console.log("mongoose is now connected to",mongoUrl)
});

mongoose.connection.on('error',()=>{
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


// app.use('/products/:id',require(path.join(__dirname,'./server/products')))
app.get('/products/:id',(req,res) =>{
   axios.get("https://redsky.target.com/v2/pdp/tcin/"+req.params.id)
   .then( (response)=>{
       let id = response.data.product.item.tcin 
       let title = response.data.product.item.product_description.title
          res.send({"id":id,"title":title});
   })
   .catch((err)=>{
     console.log(err)
   }); 
})

