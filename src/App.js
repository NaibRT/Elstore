
import React from 'react';
import './App.scss';
import Header from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'
import Index from './pages/index';
import Serach from './pages/search'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SearchContext from './contexts/search';
import CategoryContext from "./contexts/category";
import Main from './pages/container-page';
import Modal from "./components/Modal/Modal.component"
import Succespayment from './components/succespayment/succespayment'
function App() {
  return (
    <div className="App">
      <Modal/>
    <CategoryContext>
    <SearchContext>
    <Router>
    <Header />
    <br/>
    <br/>
          <Succespayment/>
      <Footer/>
      </Router>
      </SearchContext>
      </CategoryContext>
      
    </div>
  );
}

export default App;


