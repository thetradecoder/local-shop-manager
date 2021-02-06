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

rotuer.route('/show-product-list')
.get((req, res)=>{
    Product.find({}, {productId:true, productName:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});

router.route('/show-single-product-stock')
.get((req, res)=>{
    const {productId} = req.params;
    Product.find({productId}, {productId:true, productName:true, stock:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});

router.route('/show-single-product-position')
.get((req, res)=>{
    Product.findOne({productId}, {productId:true, productName:true, stock:true, totalBuyValue:true, totalSalesValue:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
})

module.exports =  router;