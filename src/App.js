
import React from 'react';
import './App.scss';
import ProductInfo from './pages/product-info'
import BasketPage from "./pages/basket";
import Index from './pages/index';
function App() {
  return (
    <div className="App">
      <main>
       {/* <ProductInfo/> */}
       {/* <BasketPage/> */}
       <Index />
      </main>
    </div>
  );
}

export default App;



