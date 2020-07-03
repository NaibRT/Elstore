import React,{useState,useEffect} from 'react'
import axios from "axios"
import UrlGenerator from '../services/url-generator';

const searchContext=React.createContext({});



function SearchContext({children}){
 
  const [catFilter, setCatFilter] = useState({
    data:[],
    meta:{}
})
  
   const [state,setState] = useState({
    'searchKey':"",
    "data":[] ,
    "filteredData":[]
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
    let focus =document.querySelectorAll(".focustext");
      for (let i = 0; i < focus.length; i++) {
        if(catFilter.meta.current_page==(i+1) ){
          focus[i].classList.add("activ")
        }
      }
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
         events:{
           setCatFilter:setCatFilter,
            searchForm:searchForm,
            filterCategory:filterCategory,
            setState:setState,
            PagenationHandling:PagenationHandling
         }
         }}>
       {children}
     </searchContext.Provider>
  )
   }
 
  
  export default SearchContext
  export {searchContext}
  


  