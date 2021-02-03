import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/add-product.component';
import SideNav from './components/side-nav.component';

function App() {
  return (
    <Router>
      <SideNav/>
      <Route path="/add-product" component={AddProduct}/>
    </Router>
  );
}

export default App;
