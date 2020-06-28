import React,{useState,useContext,useEffect} from 'react';
import './filter.style.scss';
import Markets from './markets';
import Products from './products';
import axios from 'axios'
import {categoryContext} from '../../contexts/category'
import {searchContext} from '../../contexts/search';



function Filter({clickHandler,Pricefrom,Priceto}) {

    const categories = useContext(categoryContext);
    const [market,setMarket] = useState({
        magaza:Markets,
        products:Products,
        
    })
    const [searchMarket, setSearch]=useState({
        searchField:""
    })

    const filteredMerkets = market.magaza.filter(item=> item.name.toLowerCase().includes(searchMarket.searchField.toLowerCase()));
   
    const [passiveCat, setpassiveCat] = useState({
        toggle:false
    })

    function setTogglepassive(){
        setpassiveCat({
            toggle:!passiveCat.toggle
        })
    }

    return (
        <div className='filter'>
             <p onClick={setTogglepassive} className='filter_head drop '>Kateqorİya <div>-</div></p>
            <div className={`panelkategory ${passiveCat.toggle?'panel_cat_passsive':''}`} >
        <div className='category_list'>
        <div className='panel2'>
        <ul>
        {
         categories.state.categories.map(x => {
            return (
            <div>
                <li> 
                <label class="container-check">{x.name}
                    <input value={x.id}   onClick={(e)=>clickHandler(e)}   type="checkbox" />
                    <span class="checkmark"></span>
                    </label>
                </li>
                {(x.children != null) ? x.children.map(item => { return(<li className='category_list_under'>
                    <label class="container-check">{item.name}
                    <input  value={item.id}   onClick={(e)=>clickHandler(e)} type="checkbox" />
                    <span class="checkmark"></span>
                    </label>
                    
                    {
                        (item.children!=null)?
                            item.children.map(itemchildren=>{
                            return (<li className='category_list_under_under'>
                                <label class="container-check">{itemchildren.name}
                            <input  value={itemchildren.id}   onClick={(e)=>clickHandler(e)} type="checkbox" />
                            <span class="checkmark"></span>
                            </label> 
                            </li>
                            )
                        }):
                        ''
                    }

                </li>)}) : ''}

            </div>
            )
        })
        }

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
                    <img alt='' src={require('../../assets/images/market.svg')} />
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
                type="number"
                min={1}
                max={9999}
                onChange={Pricefrom}
                placeholder="0" 
                name="search" />
                <button className='search-input-submit azn' type="submit"><img alt='' src={require('../../assets/images/azn.svg')} /></button>
            </form>
        </div>
        <div className='line_price'>

        </div>
        <div>
            <form className="search-input" >
                <input 
                className='search-input-text'
                type="number"
                min={1}
                max={9999}
                placeholder="0"
                name="search"
                onChange={Priceto}  
                    />
                <button className='search-input-submit azn' type="submit"><img alt='' src={require('../../assets/images/azn.svg')} /></button>
            </form>
        </div>
        
        </div>

            </div>
        </div>
    )
}

export default Filter