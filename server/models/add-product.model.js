const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productId:{type:String, unique:true},
    productName:{type:String, unique:true},
    companyName:{type:String},
    brandName:{type:String},
    productGroup:{type:String},
    stock:{type:Number},
    buyHistory:[],
    salesHistory:[],
    buyOrderPipeline:{type:Number},
    salesOrderPipline:{type:Number},
    totalBuyValue:{type:Number},
    totalSalesValue:{type:Number},
    username:{type:String},
    userid:{type:String}
}, {timestamps:true});


const AddProduct = mongoose.model('AddProduct', ProductSchema);

module.exports = AddNewProduct;

