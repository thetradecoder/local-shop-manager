import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';
import '../App.css';

const username = localStorage.getItem('username');
const userid = localStorage.getItem('userid');
const productId = window.location.href.split('/').reverse()[0];

export default function Sell(){
    const [product, setProduct] =  useState({});
    const [unitPrice, setUnitPrice] =  useState(0);
    const [quantity, setQuantity] = useState(0);
    function onChangeQuantity(e){
        setQuantity(e.target.value)
    }
    function onChangeUnitPrice(e){
        setUnitPrice(e.target.value)
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/status/${productId}/${username}/${userid}`)
        .then(d=>setProduct(d.data))
        .catch(err=>window.alert(err))
    })

    return(
        <div className="body-part">
            <div className="bg-silver p-3">
                <p className="text-24">Product Details:  {product.productId}-{product.productName}, <br/>
                Current Stock: {product.stock}</p>
            </div>
            
        </div>
    );
}