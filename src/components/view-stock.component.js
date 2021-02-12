import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';
import '../App.css';

import axios from 'axios';
const username = localStorage.getItem('username');
const userid = localStorage.getItem('userid');


export default function ViewStock(){
    const [product, setProduct]= useState({});
    const [stock, setStock] = useState(0);


    useEffect(()=>{
        axios.get(`http://localhost:5000/view-stock/${productId}/${username}/${userid}`)
        .then(d=>setProduct(d.data))
        .catch(err=>window.alert(err))
    });

    const productDetails = ()=>{
        return(
            <div>
                <p>Stock position Date and Time: {new Date()}</p>
                <p>Product Name: {product.productId}-{product.productName}</p>
                <p>Brand Name: {product.brandName}-{product.companyName}</p>
                <p>Stock position: {product.stock}</p>

            </div>
        );
    }


    return(
        <div></div>
    );
}