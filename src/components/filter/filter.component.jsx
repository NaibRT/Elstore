import React,{useState,useContext} from 'react';
import './filter.style.scss';
import Markets from './markets';
import Products from './products';

import {categoryContext} from '../../contexts/category'




function Filter(prop) {

    const categories = useContext(categoryContext);
    


    const [market,setMarket] = useState({
        magaza:Markets,
        products:Products,
        
    })
    const [searchMarket, setSearch]=useState({
        searchField:""
    })

    const filteredMerkets = market.magaza.filter(item=> item.name.toLowerCase().includes(searchMarket.searchField.toLowerCase()));
   
    


  let SubCategories=[];
  
  if(categories.state.childrens.children!==undefined){
    SubCategories = categories.state.childrens.children.map(x=>{
        console.log(x)
        return <ul className='category_list_under'>
        <li>
        <label class="container-check">{x.translation.name}
            <input type="checkbox"/>
            <span class="checkmark"></span>
        </label> 
        </li>
        </ul>
        

    })                 
}

console.log(SubCategories)


    return (
        <div className='filter'>
        <p className='filter_head drop accordion2'>Kateqorİya <div>-</div></p>
        <div className='category_list'>
        <div className='panel2'>
        <ul>
        {
         categories.state.categories.map(x => {
             console.log(x)
            return (
            <div>
                <li> <input  className='category_checkbox'  type="checkbox"/> {x.translation.name}</li>
                {(x.children != null) ? x.children.map(item => { return(<li  className='category_list_under' ><input  className='category_checkbox' type="checkbox"/>{item.translation.name}</li>)}) : ''}
            </div>
            )
        })
        }


        {/* {
            categories.state.categories.map(item=>{
                
                return (
                    <li>
                        {item.translation.name}
                            <input data-id={item.id} onClick={(e)=>{categories.event.getSubCat(e);}}  type="checkbox"/>
                           
                    </li>
                )

            })
           
        }
        
                 */}




                {/* <li>
                        <label class="container-check">Category
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label> 

                    <ul className='category_list_under'>
                        <li>
                        <label class="container-check">Category
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label> 
                        </li>
                        <li>
                            <label class="container-check">Category
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label> 
                        </li>
                        <li>
                            <label class="container-check">Category
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label> 
                        </li>
                    </ul>
                </li> */}


      
      


            </ul>
        </div>
        </div>
        <p className='filter_head'>Mağaza</p>
        <div className='form_filter'>
            <form className="search-input">
                <input 
                onChange={e => {
                    setSearch({searchField:e.target.value});
                }} 
                className='search-input-text' 
                type="search" 
                placeholder="Search markets" 
                name="search" />
            </form>
        </div>
        <div className="filter_markets">
        <div className='row'>
        {
            filteredMerkets.filter((item,idx)=>idx < 4 )
            .map(({name}) => {
                return (
                <div className='col-lg-6 center'>
                    <img src={require('../../assets/images/market.svg')} />
                    <p className='filter_market_title'>{name}</p>
                </div>
                )
            })
        }
        </div>
        </div>
        <p className='filter_head'>qİymət aralığı</p>
        <div className='filter_price_div'>
        <div>
            <form className="search-input">
                <input 
                className='search-input-text' 
                type="text" 
                onChange={prop.Pricefrom}
                placeholder="0" 
                name="search" />
                <button className='search-input-submit azn' type="submit"><img src={require('../../assets/images/azn.svg')} /></button>
            </form>
        </div>
        <div className='line_price'>

        </div>
        <div>
            <form className="search-input" >
                <input 
                className='search-input-text'
                type="text" 
                placeholder="0"
                name="search"
                onChange={prop.Priceto}  
                    />
                <button className='search-input-submit azn' type="submit"><img src={require('../../assets/images/azn.svg')} /></button>
            </form>
        </div>
        
        </div>

        </div>
    )
}

export default Filter
