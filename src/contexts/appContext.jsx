import React,{createContext,useState,useEffect} from 'react'
import UrlGenerator from '../services/url-generator';
const appContext=createContext();
function AppContextProvider(props) {
 const [app,setApp]=useState({
  token:{},
  isAuthorized:false,
  lang:'en',
  currency:'aze'
 })

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
 return (
  <appContext.Provider value={{app,
                              events:{
                               AddToken:AddToken,
                               IsAuthorized:IsAuthorized,
                               getCities:getCities,
                               getRegions:getRegions,
                               getToken:getToken
                              }
                             }}>
   {props.children}
  </appContext.Provider>
 )
}

export default AppContextProvider;
export {appContext};
