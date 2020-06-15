import React from 'react'
import ButtonRating from '../button-rating/buttonRating.component';
import HeartImage from '../heart-image/heartImage.component';
import {Link} from 'react-router-dom'


import './SearchResultComp.component.scss'

function SearchResultComp(props) {

    return (
        <section className="search_result__section">
            <div className="search_result__content">
            {(props.data.length > 0)?
                props.data.map(y=><div  className="search__result">
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
                <Link to={`/product/${y.id}/${y.product_name}`}>{y.product_name}</Link>
                </h5>
                <p>{y.price} AZN</p>
                <ButtonRating name='Yuksek rating' class='bg-gold' icon={require('../../assets/images/icons/star.svg')}/>

            </div>
                ) 
            :
            props.data.map(y=><div key={y.id} className="search__result">
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
                <ButtonRating name='Yuksek rating' class='bg-gold' icon={require('../../assets/images/icons/star.svg')}/>
            </div>
                ) 
            }
        </div>
        </section>
    )
}

export default SearchResultComp
