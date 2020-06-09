import React,{useState,useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './slider.component.scss';

class ProductSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      step:1,
      items: ['hero.jpg',
      'hero.jpg',
      'hero.jpg',
      'hero.jpg',
      'hero.jpg',
      'hero.jpg',
      'hero.jpg',
      'hero.jpg',
      'hero.jpg',
      'hero.jpg'
      
    ]
    };
  }

  slideTo = (i) => this.setState({ currentIndex: i });

  onSlideChanged = (e) => this.setState({ currentIndex: e.item });

  slideNext = () => {
    this.setState({ currentIndex: this.state.currentIndex + 1, step: this.state.step + 1 });
    if(this.state.step >= this.state.items.length ){
      this.setState({step:  1 });
    } 
  };

  slidePrev = () =>{
    this.setState({ currentIndex: this.state.currentIndex - 1, step:  this.state.step - 1 });
    if(this.state.step <= 1 ){
      this.setState({step:  this.state.items.length })
    }
  };

  renderThumbs = () =>
    <ul className="thumbs__container">{this.state.items.map((item, i) =>
      <li  className='thumbs'  key={i} onClick={() => {this.slideTo(i);
      this.setState({step:i + 1})}}> <img value={i} tabIndex="-1" className="thumbs__img" src={require(`../../assets/images/slider/${item}`)}></img></li>)}
    </ul>;

  renderGallery() {
    const { currentIndex, items } = this.state;

    return (<AliceCarousel
    
      dotsDisabled={true}
      buttonsDisabled={true}
      slideToIndex={currentIndex}
      onSlideChanged={this.onSlideChanged}
    >
      { items.map((item, i) => <div key={i} className="yours-custom-class"><img className='slider__image' src={require(`../../assets/images/slider/${item}`)} /></div>) }
    </AliceCarousel>);
  }

  slideThumb(){
    document.getElementsByClassName('product__slider__left')[0].scrollTo(2000,2000);
  }
    
  render() {
    return (
      <div className='product__slider__container'>
      <div className="product__slider__left">
        { this.renderThumbs() }
        <button onClick={this.slideThumb} className='thumb_slider'><img src={require('../../assets/images/slider/icons/next.png')} /></button>
      </div>
      <div className="product__slider__right">
          <button className='heart_product'><img src={require('../../assets/images/icons/heart.png')} /></button>
          { this.renderGallery() }
          <button className="prev_btn" onClick={() => this.slidePrev()}><img src={require('../../assets/images/slider/icons/next.png')} /></button>
          <button className="next_btn" onClick={() => this.slideNext()}><img src={require('../../assets/images/slider/icons/next.png')} /></button>
          <span className='sliderCount'>{this.state.step+"/"+this.state.items.length}</span>
      </div>
    </div>
    );
  }
}


export default ProductSlider