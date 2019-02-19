const axios = require('axios');
const productModel = require('./productSchema.js');

getProductInfo = (id)=>{
    return axios.get("https://redsky.target.com/v2/pdp/tcin/"+id)
    .then((response)=>{
        let id = response.data.product.item.tcin 
        let title = response.data.product.item.product_description.title
        return productModel.find({"product_id":id})
                .then((data)=>{
                    let price = data[0].current_price
                    let res = {"id":id,"title":title,"current_price":price}
                    return res
                })
                .catch(err=>res.status(404).json({
                    error:"Product information with specified id not found"
                }))

    })
    .catch(err=>res.status(500).json({
        error:"Network error"
    }))
}

module.exports = {
    getProductInfo:getProductInfo
}