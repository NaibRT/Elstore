import React,{useContext,useState} from 'react';
import '../App.scss'
import {searchContext} from '../contexts/search';
import Filter from '../components/filter/filter.component'
import SearchResultPage from '../components/Search-reasult-page/SearchResult.component.jsx'


function Search(props) {
    const [priceFrom,setPriceFrom]= useState(0);
    const [priceTo,setPriceTo]= useState(1000000);
    console.log(useState)

    const products = useContext(searchContext);
    console.log(products.state.data)
   
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
    return (
        
        <div className='container-fluid'>
             <div className="row">
             <div className='col-lg-3'>
             <Filter
             Pricefrom={Pricefrom}
             Priceto={Priceto}
              />
         </div>
         <div className='col-lg-9'>
            <SearchResultPage/>
         </div>
             </div>
        </div>
    )
}

export default Search
