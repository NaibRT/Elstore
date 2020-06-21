import React,{createContext,useState,useEffect} from 'react'
import UrlGenerator from '../services/url-generator';
const appContext=createContext();

function AppContextProvider(props) {
 const [app,setApp]=useState({
  token:{},
  isAuthorized:false,
  lang:'en',
  currency:'aze',
 })

 const [basket,setBasket]=useState([]);
 const [total,setTotal]=useState({
    amount:'',
    totalAmount:'',
    totalDeliveryAmount:'',
    user:{
      name:'',
      surname:'',
      email:'',
      phone:'',
      address:'',
      payment_type:0,
      edv:'',
      city_id:'',
      region_id:'',
      village_id:''
    }
 })

 function minus(e){
  let totalPrice=0;
  let totalDelivery=0;
  var id=e.target.getAttribute('data-id');
  let currentBasket=basket.map(x=>{   
      if(x.id==id&& x.count>1){
          x.count--;
      }
      totalPrice+=(x.price*x.count);
     // totalDelivery+=x.deliveryPrice;
      return x          
  });
  console.log(totalPrice)
   setTotal({
       ...total,
           amount:totalPrice,
           totalDeliveryAmount:totalDelivery,
   });
   setBasket([...currentBasket])
  }

  function plus(e){
    let totalPrice=0;
    let totalDelivery=0;
    var id=e.target.getAttribute('data-id');
    let currentBasket=basket.map(x=>{
        if(x.id==id){
            x.count++;
        }
        totalPrice+=(x.price*x.count);
        //totalDelivery+=x.deliveryPrice;
        return x
        
    });
    
     setTotal({
         ...total,
             amount:totalPrice,
             totalDeliveryAmount:totalDelivery,
     });
     setBasket([...currentBasket])
    }


  function addBasket(e){
    let id=e.target.getAttribute('data');
    let url=UrlGenerator('az','products')
    fetch(`${url}/${id}`)
    .then(async res=>{
       let data=await res.json()
       setBasket([
         ...basket,
         {...data.data[0],
          count:1,
          edv:18,
          deliveryAmount:0.10
         }
       ])
    })
    .catch(err=>console.log(err))
  }

  function getCities(){
    let url=UrlGenerator('az','cities');
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      return data;

    });
  }

  function getRegions(e){
    console.log(e.target.value);
  fetch(`http://139.180.144.49/api/v1/az/regions?city_id=${e.target.value}`)
  .then(response => response.json())
  .then(data =>{
    return data;
  });
}

 useEffect(()=>{
   setApp({...app,isAuthorized:IsAuthorized()})
 },[]);

 function AddToken(token){
    setApp({
     ...app,
     isAuthorized:true,
     token:token,
    });
    window.localStorage.setItem('token',JSON.stringify(token))
 }
 function getToken(){
   let token=JSON.parse(window.localStorage.getItem('token'))
   return token;
 }
 function IsAuthorized(){
   let token=JSON.parse(window.localStorage.getItem('token'))
   if(token!==null){
     return true
   }
   return false
 }
  console.log(total)
 return (
  <appContext.Provider value={{app,
                              events:{
                                setTotal:setTotal,
                                setBasket:setBasket,
                               AddToken:AddToken,
                               IsAuthorized:IsAuthorized,
                               getCities:getCities,
                               getRegions:getRegions,
                               getToken:getToken,
                               addBasket:addBasket,
                               minus:minus,
                               plus:plus
                              },
                              basket,
                              total
                             }}>
   {props.children}
  </appContext.Provider>
 )
}

export default React.memo(AppContextProvider);
export {appContext};
