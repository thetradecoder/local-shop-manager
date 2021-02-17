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
    const [filterBy, setFilterBy] =  useState("");
    const [filterStock, setFilterStock] = useState(100000000);

    function onChangeFilterBy(e){
        setFilterBy(e.target.value)
    }
    function onChangeFilterStock(e){
        setFilterStock(e.target.value===""?100000000:e.target.value)
    }


    useEffect(()=>{
        axios.get(`http://localhost:5000/view-product-list/${username}/${userid}`)
        .then(d=>setProductList(d.data))        
        .catch(err=>window.alert(err))
    })

    const list =  productList.filter((e)=>e.productName.match(filterBy) && e.stock<=filterStock).map((e,i)=>{
        
        return(
       
            <tr>
                <td>{e.productId}</td>
                <td>{e.productName}</td>                
                <td>{e.stock}</td>
                <td><a href={`/buy/${e.productId}`}>Buy</a></td>
                <td><a href={`/sell/${e.productId}`}>Sell</a></td>
            </tr>         
        );
    });

    
    return(
        <div className="body-part">
            <div className="bg-teal p-2">
                <h1 className="text-white">Product List</h1>          
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="form-group flex-grow-1 pr-2">
                        <label className="text-white">Search by product name:</label>
                        <input type="text" onChange={onChangeFilterBy} value={filterBy} placeholder="Type a product name here" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="text-white">Search by below stock range: </label>
                        <input type="number" onChange={onChangeFilterStock} min="0"  placeholder="Type stock range" className="form-control" />
                    </div>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <th>Product ID </th>
                    <th>Product Name </th>
                    <th>Stock Position </th>
                    <th>Buy</th>
                    <th>Sell</th>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    );
}