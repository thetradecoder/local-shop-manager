import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';


export default function AddProduct(){
    const [productId, setProductId] = useState("");
    const [productName, setProductName]= useState("");
    const [companyName, setCompanyName]= useState("");
    const [brandName, setBrandName] = useState("");
    const [productGroup, setProductGroup] = useState("");


    function onChangeProductId(e){
        setProductId(e.target.value);
    }
    function onChangeProductName(e){
        setProductName(e.target.value)
    }
    function onChangeCompanyName(e){
        setCompanyName(e.target.value)
    }
    function onChangeBrandName(e){
        setBrandName(e.target.value)
    }
    function onChangeProductGroup(e){
        setProductGroup(e.target.value)
    }
    function onSubmitProductData(e){
        e.preventDefault();
        const productData = {
            productId,
            productName,
            companyName,
            brandName,
            productGroup
        }
    }
    return(
        <div>
            <div><h1>Enlist a new product</h1></div>
            <div>
                <form onSubmit={onSubmitProductData}>
                    <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" onChange={onChangeProductId} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" onChange={onChangeProductName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" onChange={onChangeCompanyName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Brand Name</label>
                        <input type="text" onChange={onChangeBrandName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Product Group</label>
                        <input type="text" onChange={onChangeProductGroup} className="form-control"/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Add new product</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

