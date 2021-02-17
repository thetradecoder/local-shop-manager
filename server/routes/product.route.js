const router = require('express').Router();
const Product = require('../models/product.model');

router.route('/add-new/:username/:userid')
.post((req, res)=>{
    const {username, userid}=req.params;
    const {productId, productName, companyName, brandName, productGroup, stock}= req.body;
    const productData = new Product({productId, productName, companyName, brandName, productGroup, stock, username, userid});
    productData.save()
    .then(()=>res.send(`${productName} added!`))
    .catch(err=>res.send('Operation Failed! Product exists or Duplicate ID!'))
});

router.route('/view-product-list/:username/:userid')
.get((req, res)=>{
    const {username, userid} = req.params;
     Product.find({username, userid}, {productId:true, productName:true, brandName:true, stock:true, productGroup:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});

router.route('/view-stock/:productId/:username/:userid')
.get((req, res)=>{
    const {productId, username, userid} = req.params;    
    Product.findOne({productId, username, userid}, {productId:true, productName:true, companyName:true, brandName:true, productGroup:true, stock:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});

router.route('/view-position/:productId/:username/:userid')
.get((req, res)=>{
    const {productId, username, userid}=req.params;
    Product.findOne({productId, username, userid}, {productId:true, productName:true, companyName:true, brandName:true, productGroup:true,  stock:true, totalBuyValue:true, totalSalesValue:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});
router.route('/status/:productId/:username/:userid')
.get((req, res)=>{
    const {username, userid, productId} = req.params;
    Product.findOne({productId, username, userid}, {productId:true, productName:true, stock:true})
    .then(data=>res.send(data))
    .catch(err=>res.send('request declined'))
})

router.route('/buy/:productId/:username/:userid')
.put((req, res)=>{
    const {username, userid, productId} =  req.params;
    const { quantity, unitPrice, totalPrice, payment, remarks } = req.body;

    Product.findOneAndUpdate({productId, username, userid}, {$push:{buyHistory:{date: new Date(), quantity, unitPrice, totalPrice, payment, remarks}}, $inc:{stock:quantity, totalBuyValue:totalPrice}})
    .then(()=>res.status(200).send(`Bought ${quantity}, Total Amount: ${totalPrice}`))    
    .catch(err=>res.send(err))
});



router.route('/sell/:productId/:username/:userid')
.put((req, res)=>{
    const {username, userid, productId}= req.params;
    const {quantity, totalPrice} = req.body;
    Product.findOneAndUpdate({productId, username, userid}, {$push:{salesHistory:{quantity, totalPrice, date:new Date()}}, $inc:{stock:(0-quantity), totalSalesValue:totalPrice}})
    .then(()=>res.status(200).send(`Sold ${quantity}, Total Amount ${totalPrice}`))
    .catch(err=>res.send(err))
})

module.exports =  router;