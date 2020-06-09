import React, { Component } from 'react'
import axios from 'axios';

import './SearchResult.component.scss'

import ButtonRating from '../button-rating/buttonRating.component';
import HeartImage from '../heart-image/heartImage.component';

export class SearchResult extends Component {

    constructor(){
        super();

        this.state={
            products:[]
        }
    }

    componentWillMount(){
        axios.get(`http://139.180.144.49/api/v1/az/products?include=seller,images`)
        .then(res => {
            this.setState({products: res.data.data});
        })
        
    }
    render() {
        // let divs=[];
        // if(this.state.products.length>0){
        //     divs=this.state.products.map(x=>{
        //         return <div style={{backgroundColor:'red'}}>{x.product_name}</div>
        //         })
        // }

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
               {
                this.state.products.map(y=>
                <div key={y.id} className="search__result">
                    <HeartImage/>
                    {
                        //  <img src={y.images[0].product_image} alt=""/>
                        y.images.map(f=>{
                            if(f.is_main){
                                return <div key={f.id} className="swiper_slide_image">
                                    <img src={f.product_thumbnail_image} alt=""/>
                                </div> 
                            }
                            // console.log(f.product_image)

                        })
                    }
                    <h5>{y.product_name}</h5>
                    <p>355</p>
                    <ButtonRating/>
                </div>
                    )   
               }
            </div>
            </section>
            
        )
    }
}

export default SearchResult
