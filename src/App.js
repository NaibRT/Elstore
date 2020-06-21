
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
import CompanyAdd from "./components/CompanyAdd/CompanyAdd.component"
import DatatableOrder from './components/datatable order/datatable_order'
import Delivery from "./components/DeliveryRegistr/DeliveryRegistr.component"
import LoginModal from './components/Modal/Modal.component';
import Campaign from './pages/compaign'
import ProfileShopHome from './pages/profile-shop-home'
import NavbarProfile from './components/navbar profile/nav-profile'
import CheckoutThird from './components/checkout_third/checkout_third'
const th = ['sİfarİş kodu','məhsulun adı', 'say', 'qİymət','Status', 'Düzəlİş' ];
var sifaris = [
  {
    'kod':'0259416',
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'qiymət':'18 ₼',
    'status': 'Hazırlanır',
  },
  {
    'kod':'0259416',
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'qiymət':'18 ₼',
    'status': 'Hazırlanır',
  }, {
    'kod':'0259416',
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'qiymət':'23 ₼',
    'status': 'Hazırlanır',
  }, {
    'kod':'0259416',
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'qiymət':'34 ₼',
    'status': 'Hazırlanır',
  }
  
]


function App() {

  
  return (
    
    <div className="App">
   <AppContextProvider>
    <CategoryContext>
    <SearchContext>

    <Router>
      {
       (window.location.href.split('/')[3]==='profile')?<NavbarProfile/>:<Header />
      }
    <br/>
    <br/>
          <CheckoutThird />
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


