const express = require('express');
const cors =  require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
require ('dotenv').config();
const addProductRoute = require('./routes/add-product.route');
const buyProductRoute  = require('./routes/buy-a-product.route');
const sellProductRoute = require('./routes/sell-a-product.route');


const app = express();
const port = process.env.PORT || 5000;

const dbUri = process.env.MONGO_URI;
mongoose.connect(dbUri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
.then(()=>console.log('DB Connected!'))
.catch(err=>console.log('DB connection failed!'));



app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/add-new-product', addProductRoute);
app.use('/buy-a-product', buyProductRoute);
app.use('/sell-a-product', sellProductRoute);


app.listen(port, ()=>{
    console.log('server is on');
})