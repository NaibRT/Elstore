
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
import InputGroup from './components/InputGroup/InputGroup.component';
function App() {
  return (
    <div className="App">
        <InputGroup/>
    </div>
  );
}

export default App;


