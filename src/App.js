import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/add-product.component';
import SideNav from './components/side-nav.component';
import UserLogin from './components/login.component';
import Logout from './components/logout.component';
import UserForm from './components/signup.component';
import ViewProductList from './components/view-product-list.component';
import ViewStock from './components/view-stock.component';
import Buy from './components/buy-product.component';
import Sell from './components/sell-product.component';

function App() {
  return (
    <Router>
      <SideNav/>
      <Route path="/" component={UserLogin} exact/>
      <Route path ="/accounts/logout" component={Logout} />
      <Route path = "/accounts/signup" component={UserForm}/>
      <Route path="/add-product" component={AddProduct}/>
      <Route path="/view-list" component={ViewProductList}/>
      <Route path="/view-stock" component={ViewStock}/>
      <Route path="/buy/" component={Buy}/>
      <Route path="/sell/" component={Sell}/>
    </Router>
  );
}

export default App;
