import React from 'react'
import {BrowserRouter} from "react-router-dom";
import '../App.scss';
import Navbar from '../components/navbar/navbar.component'
import Category from '../components/Category/Category.component'
import Clay from '../components/Clay-map/clay.map.component'
import name from 'pkg'
function Index() {
    return (
        <BrowserRouter>
            <Navbar />  
            <div className='col-lg-3'>
             <Category/>
            </div>
            <div className='col-lg-9'>
            <Clay/>
            </div>
        </BrowserRouter>
    )
}

export default Index
