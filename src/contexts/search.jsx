import React,{useState,useEffect} from 'react'
import axios from "axios"
import UrlGenerator from '../services/url-generator';

const searchContext=React.createContext({});



function SearchContext({children}){
 
  const [catFilter, setCatFilter] = useState({
    data:[],
    meta:{}
})

const [currenOrder, setcurrenOrder] = useState({
  data:[],
  meta:{}
})
  
   const [state,setState] = useState({
    'searchKey':"",
    "data":[] ,
    "filteredData":[]
  })

  const [filter, setFilter] = useState({
    priceFrom:'',
    queryParams:[],
    priceTo:'',
    order:''
  })

useEffect(() => {
  let url=UrlGenerator('az','products?include=seller,images')
  axios.get(url)
  .then(res => {
       setState({data: res.data.data});
  })
}, []);


    const filterCategory =(e)=>{
      let url=UrlGenerator('az',`search/product?filter[category_id]=${e.target.value}`)
      console.log("fitercategory",e.target.value)
    setState({
      filterCat : Number(e.target.value)
    });
    axios.get(url)
    .then(res => {
        setState({ filteredData: res.data.data});
        console.log(res.data.data)
    })
  }

    const PagenationHandling=(e)=>{
      
         let url=UrlGenerator('az',`products?page=${e.target.innerHTML}&filter[category_id]=1,10,16,15`)
    fetch(url,{
        method:"GET",
    })
    .then(async res=>{
      let data=await res.json();
     if(res.ok){
         setCatFilter({
           data:data.data,
           meta:data.meta
         })
        
     }
    })
    .catch(
        (err) =>console.log(err)
    )
     
    } 


    const PagenationHandling1=(e)=>{
      
      let url=UrlGenerator('az',`users/buyer/orders/0`)
 fetch(url,{
     method:"GET",
 })
 .then(async res=>{
   let data=await res.json();
  if(res.ok){
    setcurrenOrder({
        data:data.data,
        meta:data.meta
      })
     
  }
 })
 .catch(
     (err) =>console.log(err)
 )
  
 } 

   const searchForm=(e)=>{
    //  e.preventDefault();
    //  e.stopPropagation()
    var search =  e.target.value;
     setState((prevState)=>({
        ...prevState,
        searchKey:search,
        value:search
     }))
 }

  
    return (
     <searchContext.Provider value={{
         state:state,
         catFilter:catFilter,
         filter:filter,
         currenOrder:currenOrder,
         events:{
           setCatFilter:setCatFilter,
           setFilter:setFilter,
           searchForm:searchForm,
           filterCategory:filterCategory,
           setState:setState,
           PagenationHandling:PagenationHandling,
           PagenationHandling1:PagenationHandling1
         }
         }}>
       {children}
     </searchContext.Provider>
  )
   }
 
  
  export default SearchContext
  export {searchContext}
  


  