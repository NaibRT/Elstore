import React,{useContext} from 'react'
import GoBack from '../components/go-back/go-back.component'
import Seller from '../components/seller/seller.component.js'
import {appContext} from '../contexts/appContext'
import Category from '../components/Category/Category.component'
import './shops.scss'




function Shops(){
    const AppContext=useContext(appContext)
    
   
  

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

                    <Seller/>
                
                    
                    </div>
                  
                    
                    
                    
                </div>
        </div>

    </React.Fragment>
)}

export default Shops;