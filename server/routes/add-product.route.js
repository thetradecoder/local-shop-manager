const router = require('express').Router();
const AddProduct = require('../models/add-product.model');

router.route('/add-product')
.post((req, res)=>{
    const {username, userid}=req.params;
    const {productId, productName, companyName, brandName, productGroup}= req.body;
    const productData = {productId, productName, companyName, brandName, productGroup};
    productData.save()
    .then(data=>res.send(data))
    .catch(err=>res.send('Operation Failed!'+err))
});

module.exports =  router;