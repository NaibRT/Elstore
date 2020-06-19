
import React from 'react';
import './App.scss';
import Header from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'
import Index from './pages/index';
import Serach from './pages/search'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SearchContext from './contexts/search';
import CategoryContext from "./contexts/category";
import AppContextProvider from './contexts/appContext'
import Main from './pages/container-page';
import Succespayment from './components/succespayment/succespayment'

import Delivery from "./components/DeliveryRegistr/DeliveryRegistr.component"
import CompanyAdd from "./components/CompanyAdd/CompanyAdd.component"


import LoginModal from './components/Modal/Modal.component';
import DatatableOrder from './components/datatable order/datatable_order';
import Campaign from './pages/compaign'




function App() {
  return (
    
    <div className="App">
    <AppContextProvider>
    <CategoryContext>
    <SearchContext>

    <Router>
    <Header />
    <br/>
    <br/>
          <Campaign />
      <Footer/>
       <LoginModal/>
      </Router>
  
      </SearchContext>
      </CategoryContext>
      </AppContextProvider>
      
    </div>
  );
}

export default App;


