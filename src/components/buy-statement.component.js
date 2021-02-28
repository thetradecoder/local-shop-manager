import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';
import '../App.css';


const username = localStorage.getItem('username');
const userid = localStorage.getItem('userid');

export default function BuyStatement(){
    const [date, setDate] =  useState("");
    const [productId, setProductId] =  useState("");
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] =  useState(0);
    const [unitPrice, setUnitPrice] =  useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [payment, setPayment] = useState("");
    const [supplier, setSupplier] =  useState("");

    return(
        <div>

        </div>
    );
}