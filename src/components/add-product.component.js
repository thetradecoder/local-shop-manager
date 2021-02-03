import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';


export default function AddProduct(){
    const [productId, setProductId] = useState(0);
    function onChangeProductId(e){
        setProductId(e.target.value);
    }
    const submitProductData = {
        productId
    }
    return(
        <div>
            <div><h1>Enlist a new product</h1></div>
            <div>
                <form onSubmit={submitProductData}>
                    <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" onChange={onChangeProductId} className="form-control"/>
                    </div>
                </form>
            </div>
        </div>
    );
}


