const express = require('express');
const cors =  require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());

const dbUri = process.env.MONGO_URI;
mongoose.connect(dbUri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
.then(()=>console.log('DB Connected!'))
.catch(err=>console.log('DB connection failed!'));

app.listen(port, ()=>{
    console.log('server is on');
})