import React from 'react'
import axios from "axios"
import UrlGenerator from '../services/url-generator';

const searchContext=React.createContext({});



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
   let url=UrlGenerator('az','products?include=seller,images')
  axios.get(url)
  .then(res => {
      this.setState({data: res.data.data});
  })
  
}


    filterCategory =(e)=>{
      let url=UrlGenerator('az',`search/product?filter[category_id]=${e.target.value}`)
      console.log("fitercategory",e.target.value)
    this.setState({
      filterCat : Number(e.target.value)
    });
    axios.get(url)
    .then(res => {
        this.setState({ filteredData: res.data.data});
        console.log(res.data.data)
    })
  }


   searchForm=(e)=>{
     e.preventDefault();
     e.stopPropagation()
    var search =  e.target.value;
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
            filterCategory:this.filterCategory,
            setState:this.setState
         }
         }}>
       {this.props.children}
     </searchContext.Provider>
  )
   }
  }
  
  export default SearchContext
  export {searchContext}
  


  