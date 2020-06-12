import React, { useContext } from 'react'
import axios from 'axios';
import {searchContext} from "../../contexts/search"
import './SearchResult.component.scss'
import ButtonRating from '../button-rating/buttonRating.component';
import HeartImage from '../heart-image/heartImage.component';
import {Link} from 'react-router-dom'



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
                    <h5>
                        <a>
                            {y.product_name}
                        </a>
                    </h5>
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
                    <h5><Link to={`/product/${y.id}/${y.product_name}`}>{y.product_name}</Link></h5>
                    <p>355</p>

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
