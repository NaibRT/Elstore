import React,{useState,useEffect} from 'react';
import axios from "axios";
const chipsContext=React.createContext({});

function ChipsContext(props){
    
    const [chips,setChips]=useState([]);
    
    const url = 'http://139.180.144.49/api/v1/az/products';

    useEffect(()=>{
     axios({
         method:'GET',
         url:url,
 
     }).then(res=>{
      setChips(res.data.data);
      console.log(res.data.data)
     })
    },[])
      
    return (
     <ChipsContext.Provider value={{
         state:{
          chips:chips
         }
         
         }}>
       {props.children}
     </ChipsContext.Provider>
  )
   }
  
  export default ChipsContext
  export {chipsContext}
  


  