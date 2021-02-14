import React, {useState} from 'react';
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
        axios.get(`http://localhost:5000/view-stock/${productId}/${username}/${userid}`)
        .then(d=>setProduct(d.data))
        .catch(err=>window.alert(err))
    }

    function showStock() {
        if(product.productId){
            return(
                <div className="pt-5">
                <p>
                    Product ID: <span className="text-danger"> {product.productId} </span><br/> 
                    Product Name: <span className="text-primary"> {product.productName} </span> <br/>
                    Company Name: <span className="text-danger"> {product.companyName} </span> <br/>
                    Brand Name: <span className="text-danger">{product.brandName} </span><br/>
                    <strong>Stock: <span className="text-danger"> {product.stock}</span></strong>
                </p>
            </div>
            );
        }else{
            return("");
        }
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

            <div>
                {showStock()}
            </div>
            
          
        </div>
    );
}