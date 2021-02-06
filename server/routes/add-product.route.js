const router = require('express').Router();
const Product = require('../models/add-product.model');

router.route('/add-product')
.post((req, res)=>{
    const {username, userid}=req.params;
    const {productId, productName, companyName, brandName, productGroup}= req.body;
    const productData = new Product({productId, productName, companyName, brandName, productGroup, username, userid});
    productData.save()
    .then(data=>res.send(data))
    .catch(err=>res.send('Operation Failed!'+err))
});

module.exports =  router;