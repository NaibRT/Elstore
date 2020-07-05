import React, { useEffect, useState, useContext } from 'react'
import DataTable from '../components/datatable/datatable'
import UrlGenerator from '../services/url-generator'
import {appContext} from '../contexts/appContext'

function DeliverOrder() {
 const [orders,setOrders]=useState([])
 const AppContext=useContext(appContext)
 const th=[
     
 ]
 
 // useEffect(()=>{
 //  let url=UrlGenerator('az','');
 //  let token=AppContext.app.token;
 //  fetch(url,{
 //   headers:{
 //    'Authorization':`${token.token_type} ${token.access_token}`
 //   },
 //   method:'Post'
 //  }).then(async res=>{
 //    let data=await res.json()
 //    console.log(data)
 //  }).catch(err=>console.log(err))
   
 // })

 return (
  <div>
  <DataTable tbody={[]} thead={[]} />
  </div>
 )
}

export default DeliverOrder
