const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productId:{type:String, unique:true},
    productName:{type:String, unique:true},
    companyName:{type:String},
    brandName:{type:String},
    productGroup:{type:String},
    stock:{type:Number},
    buy:{type:Number},
    sales:{type:Number},
    buyOrderPipeline:{type:Number},
    saleOrderPipline:{type:Number},
    totalBuyValue:{type:Number},
    totalSalesValue:{type:Number}
}, {timestamps:true});


const AddNewProduct = mongoose.model('AddNewProduct', ProductSchema);

module.exports = AddNewProduct;

