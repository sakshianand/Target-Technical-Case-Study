const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let product = new mongoose.Schema({
    product_id:{
        type:Number
    },
    current_price:{
        "value":{
            type:Number
        },
        "currency_code":{
            type:String
        }
    }
},{collection:'price_info'});

let productSchema = mongoose.model('product',product);

module.exports = productSchema;