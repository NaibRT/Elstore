
import React from 'react';
import './App.scss';
import Header from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'
import Index from './pages/index';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SearchContext from './contexts/search';
import CategoryContext from "./contexts/category";

function App() {
  return (
    <div className="App">
    <CategoryContext>
    <SearchContext>
    <Router>
    <Header />  
      <main>
           <div className='container-fluid'>
              <div className='row'>
                <div className="col-lg-12">
                    <Switch>
                    <div className='row'>
                    <Route to='/' component={Index}/>
                    </div>
                  </Switch>
                </div>
              </div>
           </div>
      </main>
      <Footer/>
      </Router>
      </SearchContext>
      </CategoryContext>
    </div>
  );
}

export default App;


