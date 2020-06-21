import React,{useContext,useState,useEffect} from 'react';
import '../App.scss'
import {searchContext} from '../contexts/search';
import Filter from '../components/filter/filter.component'
import SearchResultPage from '../components/Search-reasult-page/SearchResult.component.jsx'
import UrlGenerator from '../services/url-generator';


function Search(props) {
    const [priceFrom,setPriceFrom]= useState(0);
    const [priceTo,setPriceTo]= useState(1000000);
    const [catFilter, setCatFilter] = useState({
        data:[]
    })
    
     useEffect(()=>{
         let url=UrlGenerator('az','search/product')
         let id=props.match.params.id;
         console.log(id)
        //  console.log(props.match.params.id)
         fetch(`http://139.180.144.49/api/v1/az/search/product?${id}`)
        .then(response => response.json())
        .then(data => {
            setCatFilter({data:data});
            console.log(data)
        });
      },[])

    const products = useContext(searchContext);
   
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
             {/* {
                 (catFilter.data.data!=undefined)?

                 catFilter.data.data.map(item=>{
                    return( <SearchResultPage  />)
                })
                :''
             } */}
            <SearchResultPage  catFilter={ catFilter.data.data} />
         </div>
             </div>
        </div>
    )
}

export default Search
