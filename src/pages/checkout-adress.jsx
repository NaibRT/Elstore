import React,{useState} from 'react'

import CheckoutFrist from '../components/checkout_first/checkout_firt'
import CheckoutSecond from '../components/checkout_second/checkout_second'
import CheckoutThird from "../components/checkout_third/checkout_third";

import IconDeliverySafetyPayback from '../components/Icon-delivery-safety-payback/IconDeliverySafetyPayback.component'
import TotalSum from '../components/total_sum/tootal_sum.component'
function CheckoutAddress() {

         // Proceed to next step
         const  nextStep = () => {
              setStep(step+1)
           
          };
            
          // Go back to prev step
          const prevStep = () => {
            setStep(step-1)
          };

    const [step,setStep] = useState(1);


    const [state,setState] = useState({
        firstName:'',
        lastName:'',
        number:'',
        country:'',
        states:'',
        village:'',
        adress:'',
        odenisusulu:'',
        bitmetarixi:'',
        cvv:'',
        kartnomresi:'',
    })
    const {firstName,lastName, states ,village,adress,country,odenisusulu,bitmetarixi,cvv,kartnomresi} = state;
    const values = {states, firstName,lastName,village,adress,country,odenisusulu,bitmetarixi,cvv,kartnomresi};


    switch (step) {
        case 1:
            return (
                <div className='container-fluid'>
                   <div className='row'>
                       <div className='col-lg-8'>
                       <CheckoutFrist value={values}  nextStep = {nextStep} prevStep = {prevStep} />
                       </div>
                       <div className='col-lg-4'>
                            <TotalSum/>
                            <br/>
                            <IconDeliverySafetyPayback/>
                       </div>
                   </div>
                </div>
            );
           
        case 2:
            return (
                <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-8'>
                    <CheckoutSecond value={values} nextStep = {nextStep} prevStep = {prevStep} />
                    </div>
                    <div className='col-lg-4'>
                         <TotalSum/>
                         <br/>
                         <IconDeliverySafetyPayback/>
                    </div>
                </div>
             </div>
                
            );
        case 3:
            return (
                <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-8'>
                    <CheckoutThird value={values} nextStep = {nextStep} prevStep = {prevStep}  />
                    </div>
                    <div className='col-lg-4'>
                         <TotalSum/>
                         <br/>
                         <IconDeliverySafetyPayback/>
                    </div>
                </div>
             </div>
               
            );       
               
        
    }
    

}

export default CheckoutAddress
