import React from 'react'
import {BrowserRouter} from "react-router-dom";
import '../App.scss';

import Category from '../components/Category/Category.component'
import Clay from '../components/Clay-map/clay.map.component'
import BrandSlider from '../components/Brand-slider/brandSlider.component'
import IconSlider from '../components/Icon-slider/IconSlider.component'
import MehsulCard from '../components/mehsulCard/mehsul_card.component'

function Index() {
    return (
            <>
            <div className='col-lg-3'>
             <Category/>
            </div>
            <div className='col-lg-9'>
            <Clay/>
            </div>
            <div className="container-fluid">
            <BrandSlider name='Trend məhsullar'/>
            </div>
            <div className="container-fluid">
            <IconSlider/>
            <br/>
            <br/> 
            <MehsulCard/> 
             </div>
            </>
    )
}

export default Index
