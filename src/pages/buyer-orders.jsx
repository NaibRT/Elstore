import React, { useContext,useState, useEffect } from 'react'
import {appContext} from '../contexts/appContext';
import UrlGenerator from '../services/url-generator';
import OrderCard from '../components/order-card/order-card.component';

function BuyerOrders() {
 const [currentOrders, setCurrentOrders] = useState([]);
 const [oldOrders, setOldOrders] = useState([]);
 const AppContext=useContext(appContext)

 useEffect(()=>{
  let currentOrderUrl=UrlGenerator('az','users/buyer/orders/0');
  let oldOrderUrl=UrlGenerator('az','users/buyer/orders/1');
  let token=AppContext.app.token;
  
  //-------------------------current Orders Fetch
  fetch(currentOrderUrl,{
      headers:{
          'Authorization':`${token.token_type} ${token.access_token}`
      }
  })
  .then(async res=>{
      let data=await res.json();
      if(res.ok){
       setCurrentOrders([
              ...data.data
          ])
      }
  }).catch(err => console.log(err));

  //----------------------------old orders fetch
  fetch(oldOrderUrl,{
   headers:{
       'Authorization':`${token.token_type} ${token.access_token}`
   }
})
.then(async res=>{
   let data=await res.json();
   if(res.ok){
    setOldOrders([
           ...data.data
       ])
   }
}).catch(err => console.log(err))
 },[])

 return (
  <div className='buyer-order-content'>
  <section id='current-order-section'>
  <OrderCard orders={currentOrders}/>
  </section>
  <section id='old-order-section'>
  <OrderCard orders={oldOrders}/>
  </section>
   
  </div>
 )
}

export default BuyerOrders
