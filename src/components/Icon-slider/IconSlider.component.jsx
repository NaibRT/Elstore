import React, { Component } from 'react'
import './IconSlider.component.scss'
import Swiper from 'swiper';

export class IconSlider extends Component {
    componentDidUpdate(){
        var iconSlider = new Swiper('#icon_slider__container.swiper-container',{
            slidesPerView : 8,
            slidesPerGroup: 1,
            spaceBetween:10,
            loop: true,
            speed:1000,
            loopFillGroupWithBlank: true,
            grabCursor: true,
            navigation:{
                nextEl: '.icon-button-next',
                prevEl: '.icon-button-preview'
            },
            breakpoints:{
                320:{
                    slidesPerView:2
                },
                576:{
                    slidesPerView:3
                },
                768:{
                    slidesPerView:3
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
                            <div id="icon_slider__container" className="swiper-container">
                                
                                <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Icon-Image.svg')} alt=""/>
                                            </div>  
                                            <p>Store name texts</p>
                                        </div>

                                </div>
                            </div>
                <div className="icon-button-next"> <img src={require('../../assets/images/icons/chevron-right-solid.svg')} alt=""/> </div>
                <div className="icon-button-preview"> <img src={require('../../assets/images/icons/chevron-left-solid.svg')} alt=""/> </div>
            </section>
        )
    }
}

export default IconSlider
