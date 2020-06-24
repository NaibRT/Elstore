import React,{useState,useEffect} from 'react'
import axios from "axios"
const categoryContext=React.createContext({});
const categoryContextConsumer=categoryContext.Consumer



function CategoryContext(props){
    
    const [categories,setCategories]=useState([]);
    
    const [childrens,setChildrens]=useState([]);


    function getSubCat(e){
        let children=[];
        let id=e.target.getAttribute('data-id');
        console.log(id)
        categories.forEach(x=>{
            if(x.id==id && x.children!=null ){
                children= x.children
                
            }});
            setChildrens({children});
            
    }

    console.log(childrens)

  const url = 'http://139.180.144.49/api/v1/az/categories';

   useEffect(()=>{
    axios({
        method:'GET',
        url:url,

    }).then(res=>{
        setCategories(res.data.data);
    })
   },[])

      
    return (
     <categoryContext.Provider value={{
         state:{
            categories:categories,
            childrens:childrens,
         },
         event:{
            getSubCat:getSubCat
         }
         }}>
       {props.children}
     </categoryContext.Provider>
  )
   }
  
  export default CategoryContext
  export {categoryContext}
  


  