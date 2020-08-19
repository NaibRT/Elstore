import React, { Component } from 'react';
import './brandSlider.component.scss';
import Swiper from 'swiper';
import ProductCartItem from '../product-card-item/product-cart-item.component';
import { Link } from 'react-router-dom'
class BrandSlider extends Component {
    componentDidUpdate(props){
        this.swiper = new Swiper('#brandSlider.swiper-container',{
            slidesPerView : 'auto',
            slidesPerGroup: 1,
            loop: true,
            freeMode: true,
            loopedSlides: "auto",
            speed:1000,
            spaceBetween : 18,
            loopFillGroupWithBlank: true,
            grabCursor: true,
            // autoplay: {
            //     delay: 0,
            //     disableOnInteraction: false,
            // },
            navigation:{
                nextEl: '.brand-button-next',
                prevEl: '.brand-button-preview'
            },
            breakpoints:{
                0:{
                    slidesPerView:1
                },
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
            <section className="brand_slider_section">
                            <div className="brand_slider_title display__flex">
                             <h4>{this.props.name}</h4>
                             <Link to="/trends">Daha çox</Link>
                            </div>
                            <div id="brandSlider" className="swiper-container">
                                <div className="swiper-wrapper">
                                        {
                                            this.props.data.length>0?
                                                this.props.data.map(x=>{
                                                return <div className="swiper-slide">
                                                        <ProductCartItem data={x}/>
                                                       </div>
                                                }):
                                                null
                                        }
                                </div>
                            </div>
                <div className="brand-button-next"> <img src={require('../../assets/images/icons/chevron-right-solid.svg')} alt=""/> </div>
                <div className="brand-button-preview"> <img src={require('../../assets/images/icons/chevron-left-solid.svg')} alt=""/> </div>
            </section>
        )
    }
}

export default BrandSlider;
