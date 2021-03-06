import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";

export default function UserLogin(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [user, setUser] =  useState("");
    const [userid, setUserid]= useState("");
    const [firstName, setFirstName] = useState("");
    

    function onChangeUsername(e){
        setUsername(e.target.value);
    }
    function onChangePassword(e){
        setPassword(e.target.value);
    }
   

    function onSubmitUserLogin(e){
        e.preventDefault();
      
        axios.post(`http://localhost:5000/accounts/login/${username}/${password}`)
        .then((data)=>{
            if(data.data.username){
                setUserid(data.data.userid);
                setUser(data.data.username); 
                setFirstName(data.data.firstName);                    
                window.location.assign('/');
                
            }else{window.alert('incorrect information!')}
        })

        .catch(err=>window.alert(err))
                
    }

    if(!localStorage.getItem('userid')){
        localStorage.setItem('userid', userid);
    }
    if(!localStorage.getItem('username')){
        localStorage.setItem('username', user);
    }
    if(!localStorage.getItem('firstname')){
        localStorage.setItem('firstname', firstName);
    }
    
   function renderLogin(){
    if(!localStorage.getItem('username')){
        return(
            <div className="container login shadow">
                <div className="p-2">
                    <h3 className="text-center text-success">Local Shop Manager</h3>
                    <p className="text-right text-secondary pr-3">By: TradeCoder</p>
                </div>
            
            <form onSubmit={onSubmitUserLogin} className="">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" onChange={onChangeUsername} placeholder="username" required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={onChangePassword} placeholder="password" required/>
                </div>
                <button type="submit" className="btn btn-primary form-control mt-5">Login</button>
            </form>
            <div className="pt-3">
            <Link to="/accounts/signup/" className="">Not have an account? Create one</Link>
            </div>

        </div>

        );
    }else{ return (
        <div className="body-part login shadow">
            <p>Hi {localStorage.getItem('firstname')} ! </p>
            <h4 className="text-success">Welcome to Local Shop Manager! </h4>
            <p className="text-secondary">Please select an item from the menu to continue.</p>

        </div>
    );}
   }

    return(
        <div>
            {renderLogin()}
        </div>        
    );
}