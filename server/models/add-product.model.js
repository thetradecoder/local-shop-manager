const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productId:{type:String, unique:true},
    productName:{type:String, unique:true},
    companyName:{type:String},
    brandName:{type:String},
    productGroup:{type:String}
}, {timestamps:true});


const AddNewProduct = mongoose.model('AddNewProduct', ProductSchema);

module.exports = AddNewProduct;

