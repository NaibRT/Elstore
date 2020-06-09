import React,{useState} from 'react';
import './filter.style.scss';
import Markets from './markets';
import Products from './products'

function Filter(prop) {
    
    const [market,setMarket] = useState({
        magaza:Markets,
        products:Products,
        
    })
    const [searchMarket, setSearch]=useState({
        searchField:""
    })

    const filteredMerkets = market.magaza.filter(item=> item.name.toLowerCase().includes(searchMarket.searchField.toLowerCase()));

    return (
        <div className='filter'>
        <p className='filter_head drop accordion2'>Kateqorİya <div>-</div></p>
        <div className='category_list'>
        <div className='panel2'>
        <ul>
                <li><input  type='checkbox' /> Category</li>
                <li><input type='checkbox' /> Category
                    <ul className='category_list_under'>
                        <li><input type='checkbox' /> Category</li>
                        <li><input type='checkbox' /> Category</li>
                        <li><input type='checkbox' /> Category</li>
                    </ul>
                </li>
                <li><input type='checkbox' /> Category</li>
                <li><input type='checkbox' /> Category</li>
                <li><input type='checkbox' /> Category</li>
                <li><input type='checkbox' /> Category</li>
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
