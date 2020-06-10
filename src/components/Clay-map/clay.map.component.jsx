import React from 'react';
import  '../Clay-map/clay.map.component'
import Clay from '../index-clay/clay.component';
import './clay-map.style.scss'

class ClayMap extends React.Component{
    constructor(){
        super();

        this.state ={
            sections: [
                {
                  title: 'Clay',
                  imageUrl: '..//../assets/images/index/Image.svg',
                  id: 1,
                  linkUrl: ''
                },
                {
                    title: 'Clay',
                    imageUrl: '..//../assets/images/index/Image.svg',
                    id: 1,
                    linkUrl: ''
                  },
                  {
                    title: 'Clay',
                    imageUrl: '..//../assets/images/index/Image.svg',
                    id: 1,
                    linkUrl: ''
                  },
                  {
                    title: 'Clay',
                    imageUrl: '..//../assets/images/index/Image.svg',
                    id: 1,
                    linkUrl: ''
                  },
                  {
                    title: 'Clay',
                    imageUrl: '..//../assets/images/index/Image.svg',
                    id: 1,
                    linkUrl: ''
                  },
                  {
                    title: 'Clay',
                    imageUrl: '..//../assets/images/index/Image.svg',
                    id: 1,
                    linkUrl: ''
                  },
                  {
                    title: 'Clay',
                    imageUrl: '..//../assets/images/index/Image.svg',
                    id: 1,
                    linkUrl: ''
                  },
                  {
                    title: 'Clay',
                    imageUrl: '..//../assets/images/index/Image.svg',
                    id: 1,
                    linkUrl: ''
                  },
                  {
                    title: 'Clay',
                    imageUrl: '..//../assets/images/index/Image.svg',
                    id: 1,
                    linkUrl: ''
                  },
               
              ]
                      
    }
}
render()
{ 
    return(
        <React.Fragment>
        <div className='row'>
    { this.state.sections.map(({title, imageUrl, id},i)=>(
      <div key = {i} className='col-lg-4'>
        <Clay  title={title} imageUrl = {imageUrl}/>
        </div>
    ))  
    }
    </div>
        </React.Fragment>
    );
     }
}
export default ClayMap;
