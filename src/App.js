import React from 'react';

import './App.css';
import Sizes from './components/Sizes';
import Products from './components/Products';
import Cart from './components/Cart';

const App = () => {
  return (
    <div className="App">
      <Sizes />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
