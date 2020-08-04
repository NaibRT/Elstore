import React,{useContext} from 'react'
import GoBack from '../components/go-back/go-back.component'
import Button from '../components/button/button.component'
import InputGroup from '../components/InputGroup/InputGroup.component'
import {appContext} from '../contexts/appContext'
import Card from '../components/card/card.component'
import './contact.scss'




function Contact(){
    const AppContext=useContext(appContext)
    
    function nameEventHandler(e){
        AppContext.events.setTotal({
          ...AppContext.total,
          user:{
              ...AppContext.total.user,
              name:e.target.value
          } 
        })
      }

      
    function emailEventHandler(e){
        AppContext.events.setTotal({
          ...AppContext.total,
          user:{
              ...AppContext.total.user,
              name:e.target.value
          } 
        })
      }

return(
    <React.Fragment>
        <div className='container-fluid'>
        <div className="row">
        <div class= "col-lg-6 col-md-6 col-xs-12 ">
        <div className="redirect">
        <GoBack link='/' text='ƏSAS SƏHİFƏYƏ GERİ DÖN' />
        </div>
        <div className="text">
        <h1>Əlaqə</h1>
        <br />
        <p>Bu hissədə datalar olacaq</p>
        </div>
        </div>
        <div class = "col-lg-6 col-md-6 col-xs-12">
        <Card>
            <div className = "basket__cart">
                <h3>Mesaj göndər</h3>
                <br />
                <InputGroup onChange={(e)=>{nameEventHandler(e)}} placeholder='Adınız' />
                        <br/> 
                <InputGroup onChange={(e)=>emailEventHandler(e)}  type='email' placeholder='E-poçt adresi' />
                        <br/>
                <InputGroup onChange={(e)=>{nameEventHandler(e)}} type='textarea' placeholder='Mesajınız' />
                <Button className='bg-primary--light'>GÖNDƏR</Button>
            </div>
            </Card>
        </div>
        </div>
        </div>
    </React.Fragment>
)}

export default Contact;