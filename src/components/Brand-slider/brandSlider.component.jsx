import React,{Component} from 'react'
import './brandSlider.component.scss'
import Swiper from 'swiper';
import SliderConfig from './slider.condig'
import HeartImage from '../heart-image/heartImage.component';
import ButtonRating from '../button-rating/buttonRating.component';
import {Link} from 'react-router-dom'

class BrandSlider extends Component{

    componentDidUpdate(props){
        this.swiper = new Swiper('#brandSlider.swiper-container',{
            slidesPerView : 8,
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
                nextEl: '.brand-button-next'
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
            <section className="brand_slider_section">
                            <div className="brand_slider_title">
                             <h4>{this.props.name}</h4>
                            </div>
                            <div id="brandSlider" className="swiper-container">
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
                                                    <h4>{x.product_name}</h4>
                                                    <p>{x.product_price} AZN</p>
                                                    <ButtonRating/>
                                                </div>
                                                }):
                                                null
                                        }
                                </div>
                            </div>
                <div className="brand-button-next"> <img src={require('../../assets/images/icons/next-icon.svg')} alt=""/> </div>
            </section>
        )
    }
}

export default BrandSlider
