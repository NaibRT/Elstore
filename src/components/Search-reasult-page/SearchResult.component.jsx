import React, { useContext } from 'react'

import './SearchResult.component.scss'
import {searchContext} from '../../contexts/search';
import ButtonRating from '../button-rating/buttonRating.component';
import HeartImage from '../heart-image/heartImage.component';

function SearchResult() {

const products=useContext(searchContext);




        return (
            <section className="search_result__section">
                <div className="select__search">
                    <select name="" id="">
                        <option value="">Sirala</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                <div className="search_result__content">

                {(products.state.filteredData.length==0)?
                    products.state.data.map(y=><div key={y.id} className="search__result">
                    <HeartImage/>
                    {
                        y.images.map(f=>{
                            if(f.is_main){
                                return <div key={f.id} className="swiper_slide_image">
                                    <img src={f.product_thumbnail_image} alt=""/>
                                </div> 
                            }

                        })
                    }
                    <h5>{y.product_name}</h5>
                    <p>{y.price} AZN</p>
                    <ButtonRating/>
                </div>
                    ) 
                :
                products.state.filteredData.map(y=><div key={y.id} className="search__result">
                    <HeartImage/>
                    {
                        y.images.map(f=>{
                            if(f.is_main){
                                return <div key={f.id} className="swiper_slide_image">
                                    <img src={f.product_thumbnail_image} alt=""/>
                                </div> 
                            }

                        })
                    }
                    <h5>{y.product_name}</h5>
                    <p>{y.price} AZN</p>
                    <ButtonRating/>
                </div>
                    ) 
                }
                    
               {

  
               }



            </div>
            </section>
            
        )
    }


export default SearchResult
