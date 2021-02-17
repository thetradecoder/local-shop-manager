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
    const [unitPrice, setUnitPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const totalPrice = unitPrice*quantity;
    const [payment, setPayment] = useState("");
    const [remarks, setRemarks] =  useState("");
    const [supplier, setSupplier] =  useState("");

    function onChangeQuantity(e){
        setQuantity(e.target.value)
    }
    function onChangeUnitPrice(e){
        setUnitPrice(e.target.value)
    }
    function onChangePayment(e){
        setPayment(e.target.value)
    }
    function onChangeRemarks(e){
        setRemarks(e.target.value)
    }
    function onChangeSupplier(e){
        setSupplier(e.target.value)
    }
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/status/${productId}/${username}/${userid}`)
        .then(d=>setProduct(d.data))
        .catch(err=>window.alert(err));
    });

    function onSubmitBuyNow(e){
        e.preventDefault();

        const buyHistory = {               
            quantity,
            unitPrice,  
            totalPrice,
            payment,
            supplier,
            remarks
        }

        axios.put(`http://localhost:5000/buy/${productId}/${username}/${userid}`, buyHistory)
        .then(res=>window.alert(res.data))        
        .catch(err=>window.alert(err))
    }



    return(
        <div className="body-part">
            <div className="bg-silver p-3">
                <p className="text-24">Product Details:  {product.productId}-{product.productName}, <br/>
                Current Stock: {product.stock}</p>
            </div>
            <div>
                <form onSubmit={onSubmitBuyNow}>
                    <h1>Buy Now</h1>
                    <div className="d-flex flex-wrap">
                        <div className="form-group">
                            <label>Quantity: </label>
                            <input type="number" className="form-control" onChange={onChangeQuantity} required/>
                        </div>
                        <div className="form-group">
                            <label>Unit Price: </label>
                            <input type="number" className="form-control" onChange={onChangeUnitPrice} required/>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="form-group">
                            <label>Total price / Buy value: </label>
                            <input type="number" className="form-control" value={totalPrice} disabled/>
                        </div>
                                            
                        <div className="form-group">
                            <label>Payment: </label>
                            <input type="text" className="form-control" onChange={onChangePayment} required/>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="form-group">
                                <label>Supplier / Dealer: </label>
                                <input type="text" className="form-control" onChange={onChangeSupplier} required/>
                            </div>

                        <div className="form-group">
                            <label>Note: </label>
                            <input type="text" className="form-control" onChange={onChangeRemarks}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <button type="submit" className="btn btn-primary">Buy {quantity} now</button>
                        </div>
                        <div>
                            <a className="btn btn-warning" href='/view-list'>Go Back</a>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}