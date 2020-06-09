
import React from 'react';
import './App.scss';
import ProductInfo from './pages/product-info'
import BasketPage from "./pages/basket";
import Index from './pages/index';
import Search from './pages/search';

import {BrowserRouter} from 'react-router-dom';

import SearchContext from './contexts/search'
function App() {
  return (
    <div className="App">
      <main>
       {/* <ProductInfo/> */}
       {/* <BasketPage/> */}
       {/* <Index /> */}
       <BrowserRouter>
       <SearchContext>
         <Search/>
       </SearchContext>
       </BrowserRouter>
      </main>
    </div>
  );
}

export default App;



