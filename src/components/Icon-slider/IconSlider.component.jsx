import React, { Component } from 'react'
import './IconSlider.component.scss'
import Swiper from 'swiper';

export class IconSlider extends Component {
    componentDidMount(){
        var iconSlider = new Swiper('.icon_slider__container',{
            slidesPerView : 8,
            slidesPerGroup: 1,
            spaceBetween:10,
            loop: true,
            speed:1000,
            loopFillGroupWithBlank: true,
            grabCursor: true,
            navigation:{
                nextEl: '.icon-button-next'
            },
            breakpoints:{
                320:{
                    slidesPerView:1
                },
                576:{
                    slidesPerView:2
                },
                768:{
                    slidesPerView:5
                },
                992:{
                    slidesPerView:6
                },
                1200:{
                    slidesPerView:8,
                    // spaceBetween:5
                }
            }
        })
    }
    render() {
        return (
            <section className="icon_slider_section">
                <div className="container-fluid">
                    <div className="icon_slider_row">
                        <div className="icon_slider_column">
                            <div className="swiper-container icon_slider__container">
                                <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Icon-Image.svg')} alt=""/>
                                            </div>  
                                            <p>Store name texts</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Icon-Image.svg')} alt=""/>
                                            </div>  
                                            <p>Store name texts</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Icon-Image.svg')} alt=""/>
                                            </div>  
                                            <p>Store name texts</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Icon-Image.svg')} alt=""/>
                                            </div>  
                                            <p>Store name texts</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Icon-Image.svg')} alt=""/>
                                            </div>  
                                            <p>Store name texts</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Icon-Image.svg')} alt=""/>
                                            </div>  
                                            <p>Store name texts</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Icon-Image.svg')} alt=""/>
                                            </div>  
                                            <p>Store name texts</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Icon-Image.svg')} alt=""/>
                                            </div>  
                                            <p>Store name texts</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icon-button-next"> <img src={require('../../assets/images/icons/next-icon.svg')} alt=""/> </div>
            </section>
        )
    }
}

export default IconSlider
