const express = require('express')
const app = express();
const axios = require('axios')

app.get('/products/:id',(req,res) =>{
   axios.get("https://redsky.target.com/v2/pdp/tcin/"+req.params.id)
   .then( (response)=>{
       let id = response.data.product.item.tcin 
       let title = response.data.product.item.product_description.title
          res.send({"id":id,"title":title});
   })
   .catch((err)=>{
     console.log("No product of the specified id found")
   }); 
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});