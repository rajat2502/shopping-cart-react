import React from 'react';

import './App.css';
import Sizes from './components/Sizes';
import Products from './components/Products';
import Cart from './components/Cart';
import products from './products.json';

const App = () => {
  return (
    <div className="App">
      <Sizes />
      <Products products={products} />
      <Cart />
    </div>
  );
}

export default App;
