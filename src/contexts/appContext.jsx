import React,{createContext,useState,useEffect} from 'react'
import UrlGenerator from '../services/url-generator';
const appContext=createContext();

function AppContextProvider(props) {
 const [app,setApp]=useState({
  token:{},
  user:{},
  isAuthorized:false,
  lang:'en',
  currency:'aze',
 })


 const [basket,setBasket]=useState([]);
 const [total,setTotal]=useState({
    amount:'',
    totalAmount:'',
    totalDeliveryAmount:'',
    taxamount:18,
    user:{
      name:'',
      surname:'',
      email:'',
      phone:'',
      address:'',
      note:'',
      payment_type:0,
      edv:'',
      city_id:'',
      region_id:'',
      village_id:''
    }
 })

 function minus(e){
  let totalPrice=0;
  // let totalDelivery=0;
  var id=e.target.getAttribute('data-id');
  let currentBasket=basket.map(x=>{   
      if(x.id==id&& x.count>1){
          x.count--;
      }
      totalPrice+=(x.price*x.count);
      //  totalDelivery+=x.delivery_price;
      return x          
  });
   setTotal({
       ...total,
           amount:totalPrice
   });
   setBasket([...currentBasket])
  }

  function plus(e){
    let totalPrice=0;
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
     });
     
     setBasket([...currentBasket])
    }

    
   function checkBasket(id){
     let current=basket.find(x=>x.id==id);
     if(current!==undefined){
       return true
     }
     return false
   }


  function addBasket(e){
    let id=e.target.getAttribute('data');
    if(checkBasket(id)){
      let newBasket=basket;
      newBasket.forEach(x=>{
        if(x.id==id){
          x.console++
        }
      });

      setBasket([...newBasket])
    }else{
    let url=UrlGenerator('az','products')
    fetch(`${url}/${id}`)
    .then(async res=>{
       let data=await res.json()
       setBasket([
         ...basket,
         {...data.data[0],
          count:1
         }
       ])
    })
    .catch(err=>console.log(err))
    }
  }


  function removeFromBasket(e){
    let id=e.target.getAttribute('data-id');
    let bask=basket.filter(x=>x.id!=id)
    console.log(bask)
    setBasket([
        ...bask
    ])
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

function getUserCredentials() {
  let user=JSON.parse(window.localStorage.getItem('user'))
  console.log(user)
  return user
}

 useEffect(()=>{
   setApp({
     ...app,
     isAuthorized:IsAuthorized(),
     user:getUserCredentials()
    })
 },[]);



 useEffect(()=>{
   let deliveryAmount=0;
   let tp=0;
   let countEdv=0;
   let totalAmountAll=0;

   basket.forEach(x=>{
    deliveryAmount+=x.delivery_price;
    tp+=(x.price*x.count)
   })
     countEdv=((deliveryAmount+tp)*18/100);
    totalAmountAll=(deliveryAmount+tp)+countEdv;
   setTotal({
     ...total,
     amount:tp,
     totalDeliveryAmount:deliveryAmount,
     totalAmount:totalAmountAll.toFixed(2)
   })
  
},[basket]);


//  let url=UrlGenerator('az','auth/me');
//  fetch(url,{
//      method:'Post',
//      headers:{
//          'Authorization':`${data.token_type} ${data.access_token}`
//      }
//  }).
//  then(async res=>{
//    let data=await res.json()
//    console.log(data)
//  })

 function AddToken(token){
    setApp({
     ...app,
     token:token,
    });
    window.localStorage.setItem('token',JSON.stringify(token))
    let url=UrlGenerator('az','auth/me');
    fetch(url,{
      method:'Post',
      headers:{
        'Authorization':`${token.token_type} ${token.access_token}`
      }
    }).then(async res=>{
      let data=await res.json();
      window.localStorage.setItem('user',JSON.stringify(data));
      setApp({
        ...app,
        isAuthorized:true,
        user:data
      })
    }).catch(err=>console.log(err))
 }
 function getToken(){
   let token=JSON.parse(window.localStorage.getItem('token'))
   return token;
 }
   function logout() {
     console.log('click')
     localStorage.removeItem('token');
     setApp({
       ...app,
       token:{},
       isAuthorized:false
     })
   }
 function IsAuthorized(){
   let token=JSON.parse(window.localStorage.getItem('token'))
   if(token!==null){
     return true
   }
   return false
 }
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
                               getUserCredentials:getUserCredentials,
                               logout:logout,
                               addBasket:addBasket,
                               removeFromBasket:removeFromBasket,
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
