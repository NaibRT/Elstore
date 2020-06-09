import React,{Component} from 'react'
import './brandSlider.component.scss'

import Swiper from 'swiper';
import HeartImage from '../heart-image/heartImage.component';
import ButtonRating from '../button-rating/buttonRating.component';

class BrandSlider extends Component{

    componentDidMount(props){
        this.swiper = new Swiper('#brandSlider.swiper-container',{
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
        return (
            <section className="brand_slider_section">
                <div className="container-fluid">
                    <div className="brand_slider_row">
                        <div className="brand_slider_column">
                            <div className="brand_slider_title">
                             <h4>{this.props.name}</h4>
                            </div>
                            <div id="brandSlider" className="swiper-container">
                                <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <HeartImage/>
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Image.jpg')} alt=""/>
                                            </div>
                                            <h4>Məhsulun adı</h4>
                                            <p className="discount">20% endirim</p>
                                            <p>183 AZN</p>
                                            <ButtonRating/>
                                        </div>
                                        <div className="swiper-slide">
                                            <HeartImage/>
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Image.jpg')} alt=""/>
                                            </div>
                                            <h4>Məhsulun adı</h4>
                                            <p className="discount">20% endirim</p>
                                            <p>183 AZN</p>
                                            <ButtonRating/>
                                        </div>
                                        <div className="swiper-slide">
                                            <HeartImage/>
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Image.jpg')} alt=""/>
                                            </div>
                                            <h4>Məhsulun adı</h4>
                                            <p className="discount">20% endirim</p>
                                            <p>183 AZN</p>
                                            <ButtonRating/>
                                        </div>
                                        <div className="swiper-slide">
                                            <HeartImage/>
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Image.jpg')} alt=""/>
                                            </div>
                                            <h4>Məhsulun adı</h4>
                                            <p className="discount">20% endirim</p>
                                            <p>183 AZN</p>
                                            <ButtonRating/>
                                        </div>
                                        <div className="swiper-slide">
                                            <HeartImage/>
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Image.jpg')} alt=""/>
                                            </div>
                                            <h4>Məhsulun adı</h4>
                                            <p className="discount">20% endirim</p>
                                            <p>183 AZN</p>
                                            <ButtonRating/>
                                        </div>
                                        <div className="swiper-slide">
                                            <HeartImage/>
                                            <div className="swiper_slide_image">
                                                <img src={require('../../assets/images/Image.jpg')} alt=""/>
                                            </div>
                                            <h4>Məhsulun adı</h4>
                                            <p className="discount">20% endirim</p>
                                            <p>183 AZN</p>
                                            <ButtonRating/>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-button-next"> <img src={require('../../assets/images/icons/next-icon.svg')} alt=""/> </div>
            </section>
        )
    }
}

export default BrandSlider
