import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";

export default function SideNav(){
    const user = localStorage.getItem('user');

    function loginLogout(){
        if(user){
            return(
                <div>Logout</div>
            );
        }else{
            return(
                <div>Login</div>
            );
        }
    }
    function loginLogoutLink(){
        if(user){
            return "/accounts/logout/";
        }else{
            return "/";
        }
    }

    function renderSideNav(){
        if(user){
            return(
                <div className="side-nav-container shadow">
            
            <div className="side-nav">
                <div>
                    <h3>Shop Manager</h3>
                    <p>By: TradeCoder</p>
                </div>
                <div>
                    <Link to={loginLogoutLink} className="form-control nav-link">{loginLogout()}</Link>             
                    <Link to="/add-product/" className="form-control nav-link">Add a Product</Link>
                    <Link to="/view-list" className="form-control nav-link">View List</Link>                 
                </div>
            </div>
        </div>
            );
        }
    }

    return (
        <div>
            {renderSideNav()}
        </div>
        
    );

}
