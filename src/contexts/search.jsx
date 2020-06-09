import React from 'react'

const searchContext=React.createContext({});
const searchContextConsumer=searchContext.Consumer



class SearchContext extends React.Component{
 constructor(props) {
  super(props)
 
  this.state = {
    'searchKey':"",

    "data": [
      {
        "id": 1,
        "product_price": 8,
        "product_name": "komputer",
        "product_description": ""
      },
      {
        "id": 1,
        "product_price": 8,
        "product_name": "computer",
        "product_description": ""
      },
      {
        "id": 4,
        "product_price": 124,
        "product_name": "Macbook",
        "product_description": ""
      },

      {
        "id": 4,
        "product_price": 234234,
        "product_name": "Macbook",
        "product_description": ""
      },


      {
        "id": 4,
        "product_price": 50,
        "product_name": "Macbook",
        "product_description": ""
      },

    ]
  }
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
  


  