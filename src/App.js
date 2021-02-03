import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/ccs/bootstrap.min.css';
import AddProduct from './components/add-product.component';

function App() {
  return (
    <Router>
      <Route path="/add-product" component={AddProduct}/>
    </Router>
  );
}

export default App;
