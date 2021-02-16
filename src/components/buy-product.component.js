import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';
import '../App.css';

const username = localStorage.getItem('username');
const userid = localStorage.getItem('userid');
const productId = window.location.href.split('/').reverse()[0];

export default function Buy(){
    const [product, setProduct] =  useState({});
    useEffect(()=>{
        axios.get(`http://localhost:5000/buy/${productId}/${username}/${userid}`)
        .then(d=>setProduct(d.data))
        .catch(err=>window.alert(err));
    })
    return(
        <div className="body-part">
            <div>
                <p>Product Details:  {product.productId}-{product.productName}, <br/>
                Current Stock: {product.stock}</p>
            </div>


        </div>
    );
}