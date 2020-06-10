
import React from 'react';
import './App.scss';
import Header from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'
import IndexPage from './pages/index';
import SerachPage from './pages/search'
import BasketPage from './pages/basket'
import SearchResultPage from './components/Search-reasult-page/SearchResult.component.jsx'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ProductPage from './pages/product-info'
import SearchContext from './contexts/search';
import CategoryContext from "./contexts/category";
function App() {
  return (
    <div className="App">
    <CategoryContext>
    <SearchContext>
    <Router>
    <Header />
    <br/>
    <br/>
      <main>
           <div className='container-fluid'>
              <div className='row'>
                <div className="col-lg-12">
                    <div className='row'>
                    <Switch>
                    <Route to='/' exact={true}  component={IndexPage}/>
                    <Route to='/product-info' exact   component={BasketPage}/>
                    <Route to='/categories' exact  component={SerachPage}/>
                    <Route to='/product-info/:id'  component={ProductPage}/>
                  
                    
                    
                    <Route to='/search' exact   component={SearchResultPage}/>
                    </Switch>
                    </div>
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


