const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productId:{type:String, unique:true, required:true},
    productName:{type:String, unique:true},
    size:{type:String},
    companyName:{type:String},
    brandName:{type:String},
    productGroup:{type:String},
    stock:{type:Number},
    buyHistory:[
        {
            date:{type:Date},
            quantity:{type:Number},
            unitePrice:{type:Number},
            totalPrice:{type:Number},
            payment:{type:String},
            remarks:{type:String}
        }
    ],
    salesHistory:[
        {
            date:{type:Date},
            quantity:{type:Number},
            unitePrice:{type:Number},
            totalPrice:{type:Number},
            payment:{type:String},
            remarks:{type:String},
            customer:{type:String}
        }
    ],
    buyOrderPipeline:[
        {
            orderDate:{type:Date},
            quantity:{type:Number},
            unitePrice:{type:Number},
            totalPrice:{type:Number},
            orderBy:{type:String},
            orderTakenBy:{type:String},
            remarks:{type:String}
        }
    ],
    salesOrderPipline:[
        {
            orderDate:{type:Date},
            quantity:{type:Number},
            unitePrice:{type:Number},
            totalPrice:{type:Number},
            orderBy:{type:String},
            orderTakenBy:{type:String},
            remarks:{type:String}
        }
    ],
    totalBuyValue:{type:Number},
    totalSalesValue:{type:Number},
    username:{type:String},
    userid:{type:String}
}, {timestamps:true});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

