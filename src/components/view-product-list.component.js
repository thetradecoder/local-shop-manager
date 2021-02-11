import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';
import '../App.css';

import axios from 'axios';
const username = localStorage.getItem('username');
const userid = localStorage.getItem('userid');

export default function ViewProductList(){
    const [productList, setProductList] = useState([]);


    useEffect(){
        axios.get(`http://localhost:5000/view-product-list/${username}/${userid}`)
        .then(d=>setProductList(d))
        .catch(err=>window.alert(err))
    }

 
    return(
        <div>
            <div>
                <h1>Product List</h1>
            </div>
            <table>
              
            </table>
        </div>
    );
}