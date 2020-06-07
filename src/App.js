
import React from 'react';
import './App.scss';
import ProductInfo from './pages/product-info'
import BasketPage from "./pages/basket"
import ButtonsMap from "./components/buttonsMap/buttonsMap.component.jsx"
function App() {
  return (
    <div className="App">
      <main>
      <ProductInfo/>
       {/* <BasketPage/> */}
       {/* <ButtonsMap/> */}
      </main>
    </div>
  );
}

export default App;


