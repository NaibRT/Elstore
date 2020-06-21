import React from 'react'
import ProductCardItem from '../product-card-item/product-cart-item.component'


import './SearchResultComp.component.scss'
function SearchResultComp(props) {
    
    return (
        <section className="search_result__section">
            <div className="search_result__content">

            
            {(props.catFilter!= undefined && props.catFilter.length > 0)?
                props.catFilter.map(y=>
                   <ProductCardItem data={y}/>
                ) 
            :
            props.data.map(x=>
                 <ProductCardItem data={x}/>
                ) 
            }
        </div>
        </section>
    )
}

export default SearchResultComp
