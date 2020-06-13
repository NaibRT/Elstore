import React,{useContext,Component} from 'react';
import './chips.style.scss';
import {chipsContext} from "../../contexts/ChipsHeading"
import axios from 'axios'

// const HeadingContext = useContext()

// const chipsContext=useContext(chipsContext);

// function Chips(this.props){
//     return(
//         <React.Fragment>
//         <div className="star__chips display__flex">

//                         <div className="star__text display__flex"> 
//                          {
//                             chipsContext.state.avg_rating.map(x=>{
//                                 if(x.)
//                                 return <img src={require('../../assets/images/heading/iconka.svg')} alt=""/> 
                             
//                             })
//                          }




//         </div>
//         </React.Fragment>
//     )
// }

class Chips extends Component{

    constructor(){
        super();
        this.state={
            stars:[]
        }
    }

    componentDidMount(){
        // axios.get(`http://139.180.144.49/api/v1/az/products`)
        // .then(res=>{
        //     this.setState(this.state.stars = res.data.data);
        console.log(this.props.stars)
        // })
    }

    render(){
        let stars=[];
          if(this.props.stars!=undefined){
              for (let index = 0; index < this.props.stars; index++) {
                   stars.push(<img src={require('../../assets/images/heading/iconka.svg')} alt=""/>)   
              }
          }
          console.log(stars)
        return(
            <React.Fragment>
                    <div className="star__chips display__flex">
                    
                     <div className="star__text display__flex"> 
                             {stars}
                            <h2>{this.props.rating}</h2>
                            <span className="right-line">
                            <img src={require('../../assets/images/heading/Divider.svg')} alt=""/>
                            </span>
                        </div>

                        <div className="heart__text display__flex">
                                             
                        <img src={require('../../assets/images/heading/Union.svg')} alt=""/>                                          
                        <h2>{this.props.store}</h2>
                    </div>
                     
                                   
                    </div>
                    </React.Fragment>  
        

                        )   }
}





export default Chips;
