const router = require('express').Router();
let productController = require('./productController.js');
router.get('/:id',(req,res)=>{
    productController.getProductInfo(req.params.id)
    .then(response=>res.send(response))
    .catch(err=>res.status(404).json({
        error:"Product Information with the specified id not found or Check your Internet connection"
    }))
});

module.exports = router;