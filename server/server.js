const express = require('express');
const cors =  require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
require ('dotenv').config();
const productRoute = require('./routes/product.route');



const app = express();
const port = process.env.PORT || 5000;

const dbUri = process.env.MONGO_URI;
mongoose.connect(dbUri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
.then(()=>console.log('DB Connected!'))
.catch(err=>console.log('DB connection failed!'));



app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/add-new-product', productRoute);


app.listen(port, ()=>{
    console.log('server is on');
})