import React from 'react'
import {BrowserRouter} from "react-router-dom"; 
import Navbar from '../components/navbar/navbar.component'
function Index() {
    return (
        <BrowserRouter>
            <Navbar />  
        </BrowserRouter>
    )
}

export default Index
