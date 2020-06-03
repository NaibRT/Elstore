import React,{useState} from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './slider.component.scss';

class ProductSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      step:1,
      items: ['https://img.freepik.com/free-vector/lit-night-fountain-realistic-illustration_1284-18962.jpg?size=626&ext=jpg',
      'https://img.freepik.com/free-vector/lit-night-fountain-realistic-illustration_1284-18962.jpg?size=626&ext=jpg',
      'https://img.freepik.com/free-vector/lit-night-fountain-realistic-illustration_1284-18962.jpg?size=626&ext=jpg',
      'https://img.freepik.com/free-vector/lit-night-fountain-realistic-illustration_1284-18962.jpg?size=626&ext=jpg',
      'https://img.freepik.com/free-vector/lit-night-fountain-realistic-illustration_1284-18962.jpg?size=626&ext=jpg'
    ]
    };
  }

  slideTo = (i) => this.setState({ currentIndex: i });

  onSlideChanged = (e) => this.setState({ currentIndex: e.item });

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1, step: this.state.step + 1 });

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1, step: this.state.step - 1 });

  renderThumbs = () =>
    <ul className="thumbs__container">{this.state.items.map((item, i) =>
      <li className='thumbs' key={i} onClick={() => this.slideTo(i)}> <img className="thumbs__img" src={item}></img></li>)}
    </ul>;

  renderGallery() {
    const { currentIndex, items } = this.state;

    return (<AliceCarousel
      dotsDisabled={true}
      buttonsDisabled={true}
      slideToIndex={currentIndex}
      onSlideChanged={this.onSlideChanged}
    >
      { items.map((item, i) => <div key={i} className="yours-custom-class"><img className='slider__image' src={item} /></div>) }
    </AliceCarousel>);
  }

  render() {
    return (
      <div className='product__slider__container'>
      <div className="product__slider__left">
        { this.renderThumbs() }
      </div>
      <div className="product__slider__right">
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