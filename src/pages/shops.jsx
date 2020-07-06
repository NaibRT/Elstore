import React,{useContext, useEffect, useState} from 'react'
import GoBack from '../components/go-back/go-back.component'
import Seller from '../components/seller/seller.component.js'
import {appContext} from '../contexts/appContext'
import Category from '../components/Category/Category.component'
import './shops.scss'
import UrlGenerator from '../services/url-generator'




function Shops(){
    const AppContext=useContext(appContext)
    const [shops, setShops] = useState([]);

    useEffect(()=>{
     let url=UrlGenerator('az','stores');
     fetch(url)
     .then(async res=>{
         let data=await res.json();
         if(res.ok){
             setShops([...data.data])
         }
     })
    },[])
   
  

return(
    <React.Fragment>
   
    <div className="redirect">
    <GoBack link='/' text='ƏSAS SƏHİFƏYƏ GERİ DÖN' />
    </div>
            
    <div className="text">
    <h1>Mağazalar</h1>
    <br />
    
    </div>
    <div className='container-fluid'>
                <div className='row'> 
                    <div className=' col-12 col-lg-3 col-md-4 col-xs-12'>
                    <Category/>
                    </div>
                    <div className=' col-12 col-lg-9 col-md-8 col-xs-12'>
                    {
                        // shops.map((x,i)=>{
                        //     return <Seller key={i} seller={x}/>
                        // })
                    }
                    </div>
                </div>
        </div>
    </React.Fragment>
)}

export default Shops;