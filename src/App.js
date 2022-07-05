import React from 'react';
import CategoryList from './CategoryList';
//Baska component kullanılacağı zaman import edilir.
import Navi from './Navi';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      <Navi/>
      <CategoryList/>
      <ProductList/>
    </div>
  );
}

export default App;
