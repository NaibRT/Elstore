import React,{useContext,useState,useEffect} from 'react';
import '../App.scss'
import {searchContext} from '../contexts/search';
import Filter from '../components/filter/filter.component'
import SearchResultPage from '../components/Search-reasult-page/SearchResult.component.jsx'
import UrlGenerator from '../services/url-generator';
import {appContext} from '../contexts/appContext';
import { queries } from '@testing-library/react';
import Pagenation from "../components/Pagination/pagination.component"


function Search(props) {
    let AppContext=useContext(appContext)
    let SearchContext=useContext(searchContext)
    const [priceFrom,setPriceFrom]= useState('');
    const [queryParams, setQueryParams] = useState([])
    const [priceTo,setPriceTo]= useState('');
    const [order,setOrder]=useState('');
    


    function clickHandler(e) {
        console.log(e.target.checked)
        let pageUrl=window.location.pathname;
        let query='';
        let id=e.target.value;
        let sellerId='';
        let queries=queryParams;

        if(pageUrl.includes('company')){
            sellerId=Object.keys(props.match.params).length!==0
            ?props.match.params.id:null;
            query+=query!==''?`&filter[company_id]=${sellerId}`:`filter[company_id]=${sellerId}`
        }
        if(pageUrl.includes('profile')){
            sellerId=AppContext.app.user.id;
            query+=query!==''?`&filter[company_id]=${sellerId}`:`filter[company_id]=${sellerId}`
        }
        if(queryParams.length>0){
            query+=query!==''?`&filter[category_id]=`:`&filter[category_id]=`
           queryParams.forEach((x,k)=>{
               console.log(k)
               k===queries.length-1
               ?query+=`${x}`
               :query+=`${x},`
           })
        }
        if(order!==''){
            query+=query!==''?`&filter[order]=${order}`:`filter[order]=${order}`
        }

        // if(AppContext.app.isAuthorized){
        //     let store_id=AppContext.app.user.id
        //     query=`filter[company_id]=${store_id}&filter[category_id]=`;
        // }else{
        //     query=`filter[category_id]=`;
        // }
        if(e.target.checked){
            queries.push(`${id}`)
       }else{
           let newqueries=queries.filter(x=>x!==`${id}`);
           queries=newqueries
           console.log(newqueries)
       }
       
       if(queryParams.length>0){
        query+=query!==''?`&filter[category_id]=`:`filter[category_id]=`
       queryParams.forEach((x,k)=>{
           console.log(k)
           k===queries.length-1
           ?query+=`${x}`
           :query+=`${x},`
       })
    }
       if(priceFrom!=''){
         query+=query!=''?`&filter[min_prize]=${priceFrom}`:`filter[min_prize]=${priceFrom}`
       }
       if(priceTo!=''){
           query+=query!=''?`&filter[max_price]=${priceTo}`:`filter[max_price]=${priceTo}`
       }
       console.log(query)
       let url=UrlGenerator('az',`search/product?${query}`)
       fetch(url)
       .then(async res=>{
           let data=await res.json();
           console.log(data)
           setQueryParams([
              ...queries
           ])
          SearchContext.events.setCatFilter({
               ...SearchContext.catFilter,
               meta:data.meta,
               data:data.data
           })

       }).catch(err=>console.log(err))
    }


     const selectHandle=(e)=>{
         let pageUrl=window.location.pathname;
         let filterQuery='';
         let sellerId='';
         if(pageUrl.includes('company')){
             sellerId=Object.keys(props.match.params).length!==0
             ?props.match.params.id:null;
             filterQuery+=filterQuery!==''?`&filter[company_id]=${sellerId}`:`filter[company_id]=${sellerId}`;
         }
         if(pageUrl.includes('profile')){
             sellerId=AppContext.app.user.id;
             filterQuery+=filterQuery!==''?`&filter[company_id]=${sellerId}`:`filter[company_id]=${sellerId}`;
         }
         if(queryParams.length>0){
            filterQuery+=filterQuery!==''?`&filter[category_id]=`:`filter[category_id]=`
            queryParams.forEach((x,k)=>{
                console.log(k)
                k===queryParams.length-1
                ?filterQuery+=`${x}`
                :filterQuery+=`${x},`
            })
         }
         if(priceFrom!=''){
            filterQuery+=filterQuery!==''?`&filter[min_prize]=${priceFrom}`:`filter[min_prize]=${priceFrom}`
          }
          if(priceTo!=''){
              filterQuery+=filterQuery!==''?`&filter[max_price]=${priceTo}`:`filter[max_price]=${priceTo}`
          }
           setOrder(e.target.value);
          filterQuery+=filterQuery!==''?`&filter[order]=${e.target.value}`:`filter[order]=${e.target.value}`;
           console.log(filterQuery)
          let url=UrlGenerator('az',`search/product?${filterQuery}`);
          fetch(url)
          .then(async res=>{
              let data=await res.json();
              console.log(data)
              setQueryParams([
                 ...queries
              ])
              SearchContext.events.setCatFilter({
                  ...SearchContext.catFilter,
                  meta:data.meta,
                  data:data.data
              })
   
          }).catch(err=>console.log(err))
     }
    
     useEffect(()=>{
         let url=UrlGenerator('az','search/product')
         let query=props.match.params.query;
         console.log(query)
         fetch(`${url}?${query}`)
        .then(response => response.json())
        .then(data => {
            SearchContext.events.setCatFilter({data:data.data,meta:data.meta});
            console.log(data)
        });
      },[])

   
    function Pricefrom(e){
        setPriceFrom(e.target.value)
        let sellerId='';
        let pageUrl=window.location.pathname;
        let filterQuery='';
        if(pageUrl.includes('company')){
            sellerId=Object.keys(props.match.params).length!==0
            ?props.match.params.id:null;
            filterQuery+=filterQuery!==''?`&filter[company_id]=${sellerId}`:`filter[company_id]=${sellerId}`
        }
        if(pageUrl.includes('profile')){
            sellerId=AppContext.app.user.id;
            filterQuery+=filterQuery!==''?`&filter[company_id]=${sellerId}`:`filter[company_id]=${sellerId}`
        }
        if(queryParams.length>0){
            filterQuery+=filterQuery!==''?`&filter[category_id]=`:`filter[category_id]=`
           queryParams.forEach((x,k)=>{
               console.log(k)
               k===queryParams.length-1
               ?filterQuery+=`${x}`
               :filterQuery+=`${x},`
           })
        }
        if(order!==''){
            filterQuery+=filterQuery!==''?`&filter[order]=${order}`:`filter[order]=${order}`
        }


        filterQuery+=`&filter[min_price]=${e.target.value}`

        if(priceTo!='')
        filterQuery+=filterQuery!==''?`&filter[max_price]=${priceTo}`:`filter[max_price]=${priceTo}`
        console.log(filterQuery)
        let url=UrlGenerator('az',`search/product?${filterQuery}`)
        fetch(url)
        .then(async res=>{
            let data=await res.json();
            console.log(data)
            SearchContext.events.setCatFilter({
                ...SearchContext.catFilter,
                meta:data.meta,
                data:data.data
            })
 
        }).catch(err=>console.log(err))

    }

    function Priceto(e){
        setPriceTo(e.target.value)
         
        let sellerId='';
        let pageUrl=window.location.pathname;
        let filterQuery='';
        if(pageUrl.includes('company')){
            sellerId=Object.keys(props.match.params).length!==0
            ?props.match.params.id:null;
            filterQuery+=filterQuery!==''?`&filter[company_id]=${sellerId}`:`filter[company_id]=${sellerId}`
        }
        if(pageUrl.includes('profile')){
            sellerId=AppContext.app.user.id;
            filterQuery+=filterQuery!==''?`&filter[company_id]=${sellerId}`:`filter[company_id]=${sellerId}`
        }
        if(queryParams.length>0){
            filterQuery+=filterQuery!==''?`&filter[category_id]=`:`filter[category_id]=`
           queryParams.forEach((x,k)=>{
               console.log(k)
               k===queryParams.length-1
               ?filterQuery+=`${x}`
               :filterQuery+=`${x},`
           })
        }
        if(order!==''){
            filterQuery+=filterQuery!==''?`&filter[order]=${order}`:`filter[order]=${order}`
        }

        filterQuery+=`&filter[max_price]=${e.target.value}`

        if(priceFrom!='')
        filterQuery+=filterQuery!==''?`&filter[min_price]=${priceFrom}`:`filter[min_price]=${priceFrom}`;

        console.log(filterQuery)
        let url=UrlGenerator('az',`search/product?${filterQuery}`)
        fetch(url)
        .then(async res=>{
            let data=await res.json();
            console.log(data)
            SearchContext.events.setCatFilter({
                ...SearchContext.catFilter,
                meta:data.meta,
                data:data.data
            })
 
        }).catch(err=>console.log(err))
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
            <SearchResultPage handleSelect={selectHandle} catFilter={ SearchContext.catFilter.data} />
             <Pagenation paginationHandling={SearchContext.events.PagenationHandling} meta={SearchContext.catFilter.meta}/>
         </div>
             </div>
        </div>
    )
}

export default Search
