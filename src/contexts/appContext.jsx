import React,{createContext,useState,useEffect} from 'react'
const appContext=createContext();

function AppContextProvider(props) {
 const [app,setApp]=useState({
  token:{},
  isAuthorized:false,
  lang:'en',
  currency:'aze'
 })

 useEffect(()=>{
   setApp((prevApp)=>({...prevApp}))
 },[]);

 function AddToken(token){
    setApp({
     ...app,
     token:token,
    });
    window.localStorage.setItem('token',JSON.stringify(token))
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
                               IsAuthorized:IsAuthorized
                              }
                             }}>
   {props.children}
  </appContext.Provider>
 )
}

export default AppContextProvider;
export {appContext};
