import React from 'react'
import axios from "axios"

const searchContext=React.createContext({});
const searchContextConsumer=searchContext.Consumer



class SearchContext extends React.Component{
 constructor(props) {
  super(props)
 
  this.state = {
    'searchKey':"",

    "data":[] 
  }
 }

 componentWillMount(){
  axios.get(`http://139.180.144.49/api/v1/az/products?include=seller,images`)
  .then(res => {
      this.setState({data: res.data.data});
  })
  
}
 
   searchForm=(e)=>{
     e.preventDefault();
     e.stopPropagation()
    var search =  e.target.value;
    localStorage.setItem('search', search);
    
     this.setState((prevState)=>({
        ...prevState,
        searchKey:search,
        value:search
     }))
 }

 render(){
    return (
     <searchContext.Provider value={{
         state:this.state,
         events:{
            searchForm:this.searchForm  
         }
         }}>
       {this.props.children}
     </searchContext.Provider>
  )
   }
  }
  
  export default SearchContext
  export {searchContext}
  


  