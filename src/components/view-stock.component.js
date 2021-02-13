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
    const [productId, setProductId] = useState("");

    function onChangeProductId(e){
        setProductId(e.target.value);
    }

    function onSubmitStockQuery(e){
        e.preventDefault();
    }


  
    return(
        <div className="body-part">
            <h1>View Stock</h1>
            <form onSubmit={onSubmitStockQuery}>
                <div className="form-group">
                    <label>Input Product Id</label>
                    <input type="text" onChange={onChangeProductId} className="form-control"/>
                </div>
                <button className="btn btn-primary" type="submit">View Stock</button>
            </form>
          
        </div>
    );
}