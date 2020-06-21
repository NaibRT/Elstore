import React,{useState,useEffect,useContext} from 'react'
import {BrowserRouter} from "react-router-dom";
import axios from 'axios'
import '../App.scss';

import Category from '../components/Category/Category.component'
import Clay from '../components/Clay-map/clay.map.component'
import BrandSlider from '../components/Brand-slider/brandSlider.component'
import MostSellerSlide from '../components/Most-Seller-Slide/MostSellerSlide.component'
import IconSlider from '../components/Icon-slider/IconSlider.component'
import MehsulCard from '../components/mehsulCard/mehsul_card.component'
import {appContext} from '../contexts/appContext'

function Index() {
    const [product,setProduct]=useState({});
    const AppContext=useContext(appContext)
    // useEffect(()=>{
    //     let token=AppContext.events.getToken();
    //     axios.get('http://139.180.144.49/api/v1/az/products?include=seller,images',{headers:{
    //         'Authorization':`${token.token_type} ${token.access_token}`
    //     }})
    //     .then(x=>{
    //         setProduct(x.data.data)
    //     })
    // },[])



    return (
            <>
            <div className='container-fluid'>
                <div className='row'>   
                    <div className='col-lg-3'>
                    <Category/>
                    </div>
                    <div className='col-lg-9'>
                    <Clay/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <BrandSlider data={product} name='Trend məhsullar'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <IconSlider/>
                        <br/>
                        <br/> 
                        <MehsulCard/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <MostSellerSlide data={product} name='Çox satılanlar'/>
                    </div>
                </div>
           </div>

            </>
    )
}

export default Index
