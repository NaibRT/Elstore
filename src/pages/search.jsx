import React,{useContext,useState,useEffect} from 'react';
import '../App.scss'
import {searchContext} from '../contexts/search';
import Filter from '../components/filter/filter.component'
import SearchResultPage from '../components/Search-reasult-page/SearchResult.component.jsx'
import UrlGenerator from '../services/url-generator';
import {appContext} from '../contexts/appContext';


function Search(props) {
    let SearchContext=useContext(searchContext)
    let AppContext=useContext(appContext)
    const [priceFrom,setPriceFrom]= useState(0);
    const [queryParams, setQueryParams] = useState([])
    const [priceTo,setPriceTo]= useState(1000000);
    const [catFilter, setCatFilter] = useState({
        data:[]
    })


    function clickHandler(e) {
        console.log(e.target.checked)
        let id=e.target.value;
        let queries=queryParams;
        let store_id=AppContext.app.user.id
        let query=`filter[company_id]=${store_id}&filter[category_id]=`;
        if(e.target.checked){
            queries.push(`${id}`)
       }else{
           let newqueries=queries.filter(x=>x!==`${id}`);
           queries=newqueries
           console.log(newqueries)
       }
       
       queries.forEach((x,k)=>{
           console.log(k)
           k===queries.length-1
           ?query+=`${x}`
           :query+=`${x},`
       })
       let url=UrlGenerator('az',`search/product?${query}`)
       fetch(url)
       .then(async res=>{
           let data=await res.json();
           console.log(data)
           setQueryParams([
              ...queries
           ])
           setCatFilter({
               ...catFilter,
               data:data.data
           })

       }).catch(err=>console.log(err))
    }
    
     useEffect(()=>{
         let url=UrlGenerator('az','search/product')
         let query=props.match.params.query;
         fetch(`${url}?${query}`)
        .then(response => response.json())
        .then(data => {
            setCatFilter({data:data});
            console.log(data)
        });
      },[])

   
    function Pricefrom(e){
        setPriceFrom(e.target.value)
    }

    function Priceto(e){
        setPriceTo(e.target.value)
    }
                    // {
                //     products.state.data.filter(item=> products.state.searchKey.toLowerCase().includes(item.product_name.toLowerCase()))
                //     .filter((item)=>{ return item.product_price>=priceFrom &&  item.product_price < priceTo})
                //     .map(({product_price,product_name,product_description})=>{
                //         return(
                //             <div>
                //                 <h2>{product_price}</h2>
                //                 <p>{product_name}</p>
                //                 <p>{product_description}</p>
                //                 <br />
                //                 <br />
                //                 <br />
                //             </div>
                //         )
                //     })
                // }
                console.log("SearchContext",SearchContext)
    return (
        
        <div className='container-fluid'>
             <div className="row">
             <div className='col-lg-3'>
             <Filter
             clickHandler={clickHandler}
             Pricefrom={Pricefrom}
             Priceto={Priceto}
              />
         </div>
         <div className='col-lg-9'>
             {/* {
                 (catFilter.data.data!=undefined)?

                 catFilter.data.data.map(item=>{
                    return( <SearchResultPage  />)
                })
                :''
             } */}
            <SearchResultPage  catFilter={ catFilter.data} />
         </div>
             </div>
        </div>
    )
}

export default Search
