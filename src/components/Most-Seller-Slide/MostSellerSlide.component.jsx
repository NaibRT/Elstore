import React, { Component } from 'react'
import './MostSellerSlide.component.scss'

import Swiper from 'swiper';
import {Link} from 'react-router-dom'


import HeartImage from '../heart-image/heartImage.component';
import ButtonRating from '../button-rating/buttonRating.component';

export class MostSellerSlide extends Component {
    componentDidUpdate(props){
        var mostSeller = new Swiper('#mostSlider.swiper-container',{
            slidesPerView : 4,
            slidesPerGroup: 1,
            loop: true,
            speed:1000,
            spaceBetween : 18,
            loopFillGroupWithBlank: true,
            grabCursor: true,
            // autoplay: {
            //     delay: 0,
            //     disableOnInteraction: false,
            // },
            navigation:{
                nextEl: '.most-button-next',
                prevEl: '.most-button-preview'
            },
            breakpoints:{
                320:{
                    slidesPerView:1
                },
                576:{
                    slidesPerView:2
                },
                768:{
                    slidesPerView:3
                },
                992:{
                    slidesPerView:4
                },
                1200:{
                    slidesPerView:4,
                    // spaceBetween:5
                }
            }
        })
        
    }

    render(){
        // <p className="discount">20% endirim</p>
        return (
            <section className="most_seller_slider_section">
                            <div className="most_slider_title">
                             <h4>{this.props.name}</h4>
                            </div>
                            <div id="mostSlider" className="swiper-container">
                                <div className="swiper-wrapper">
                                        {
                                            this.props.data.length>0?
                                                this.props.data.map(x=>{
                                                    return <div className="swiper-slide">
                                                    <HeartImage/>
                                                    <div className="swiper_slide_image">
                                                        {
                                                            x.images.map(f=>{
                                                                if(f.is_main){
                                                                    return <img src={f.product_thumbnail_image} alt=""/>
                                                                }
                                                            })
                                                        }
                                                    </div>
                                                    <h4>
                                                        <a>
                                                            <Link to={`/product/${x.id}/${x.product_name}`}>{x.product_name}</Link>
                                                        </a>
                                                    </h4>
                                                    <p>{x.product_price} AZN</p>
                                                    <ButtonRating name='Yuksek rating' class='bg-gold' icon={require('../../assets/images/icons/star.svg')}/>
                                                </div>
                                                }):
                                                null
                                        }
                                </div>
                            </div>
                <div className="most-button-next"> <img src={require('../../assets/images/icons/chevron-right-solid.svg')} alt=""/> </div>
                <div className="most-button-preview"> <img src={require('../../assets/images/icons/chevron-left-solid.svg')} alt=""/> </div>
            </section>
        )
    }
}

export default MostSellerSlide
