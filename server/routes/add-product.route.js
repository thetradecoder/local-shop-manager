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
    Product.find({productId}, {productId:true, productName:true, companyName:true, brandName:true, productGroup:true, stock:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});

router.route('/show-single-product-position')
.get((req, res)=>{
    Product.findOne({productId}, {productId:true, productName:true, companyName:true, brandName:true, productGroup:true,  stock:true, totalBuyValue:true, totalSalesValue:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});

router.route('/buy-a-product')
.put((req, res)=>{
    const {username, userid, productId} =  req.params;
    const {buyHistory} = req.body;
    Product.findOneAndUpdate({productId, username, userid}, {$push:{buyHistory}, $inc:{stock:buyHistory.quantity, totalBuyValue:buyHistory.totalPrice}})
    .then(data=>res.status(200).send('Buy completed!'))
    .catch(err=>res.send(err))
})

module.exports =  router;