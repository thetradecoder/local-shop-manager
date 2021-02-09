import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/add-product.component';
import SideNav from './components/side-nav.component';
import UserLogin from './components/login.component';
import Logout from './components/logout.component';
import UserForm from './components/signup.component';

function App() {
  return (
    <Router>
      <SideNav/>
      <Route path="/" component={UserLogin} exact/>
      <Route path ="/accounts/logout" component={Logout} />
      <Route path = "/accounts/signup" component={UserForm}/>
      <Route path="/add-product" component={AddProduct}/>
    </Router>
  );
}

export default App;
