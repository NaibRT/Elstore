import React from 'react'
import {BrowserRouter} from "react-router-dom";
import '../App.scss';
import Navbar from '../components/navbar/navbar.component'
function Index() {
    return (
        <BrowserRouter>
            <Navbar />  
            <div className='col-lg-3'>
            </div>
        </BrowserRouter>
    )
}

export default Index
