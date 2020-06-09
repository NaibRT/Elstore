
import React from 'react';
import './App.scss';
import ProductInfo from './pages/product-info'
import BasketPage from "./pages/basket"
import Heading from './components/heading-chips/heading-chips.component'
import BrandSlider from './components/Brand-slider/brandSlider.component'
import IconSlider from './components/Icon-slider/IconSlider.component'
function App() {
  return (
    <div className="App">
      <main>
       <ProductInfo/>
        <BrandSlider/>
        <IconSlider/>
      </main>
    </div>
  );
}

export default App;


