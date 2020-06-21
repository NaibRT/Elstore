import React from 'react'
import axios from "axios"

const searchContext=React.createContext({});
const searchContextConsumer=searchContext.Consumer



class SearchContext extends React.Component{
 constructor(props) {
  super(props)
 
  this.state = {
    'searchKey':"",
    "data":[] ,
    "filteredData":[]
  }
 }

 componentWillMount(){
  axios.get(`http://139.180.144.49/api/v1/az/products?include=seller,images`)
  .then(res => {
      this.setState({data: res.data.data});
  })
  
}


    filterCategory =(e)=>{
    this.setState({
      filterCat : Number(e.target.value)
    });
    // alert(e.target.value)
    axios.get(`http://139.180.144.49/api/v1/az/search/product?filter[category_id]=${e.target.value}`)
    .then(res => {
        this.setState({ filteredData: res.data.data});
        console.log(res.data.data)
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
            searchForm:this.searchForm,
            filterCategory:this.filterCategory
         }
         }}>
       {this.props.children}
     </searchContext.Provider>
  )
   }
  }
  
  export default SearchContext
  export {searchContext}
  


  