import React,{useEffect,useState} from 'react'
import './lang_currency_toggler.scss';
import Selectbox from '../Select-box/SelectBox.component'


const Langs =  [{id:'Azərbaycan',name:'Azərbaycan'},{id:'İnglis',name:'İnglis'},{id:'Russia',name:'Russia'}];
// const  langval =  ['AAZE','TR','UKR'];
// const Currency =  ['AZN','EURO','USD'];


function LangToggler() {
    
    useEffect(()=>{
        // var acc = document.getElementsByClassName("accordion_lang");
        //     var i;
    
        //     for (i = 0; i < acc.length; i++) {
        //     acc[i].addEventListener("click", function() {
        //         this.classList.toggle("active");
        //         var panel = this.nextElementSibling;
        //         if (panel.style.height) {
        //         panel.style.height = null;
        //         } else {
        //         panel.style.height = panel.scrollHeight + "px";
        //         } 
        //     });
        //     }
    })

    // function toggleropen(){
    //     setToggler({toggle: !toggler.toggle})
    // }

    function handleChange(e){
        const { value, name } = e.target;
        console.log(name,value)

        setLanguageCurrency({
            ...languageCurrency,
            [name]:e.target.value
        })
    }

    const [languageCurrency, setLanguageCurrency] = useState({
        language:'',
        currency:'',
    })

    if(languageCurrency.language == '' || languageCurrency.currency ==''){
        setLanguageCurrency({
            language:'Azərbaycan',
            // currency:'AZN',
        })
    }

    // const accordionLangHandler=(e)=>{
    //     console.log(e.target)    
    // }




    return (
    <>
        <div className='select_border'>
        <button class="accordion_lang" >
        <div>{languageCurrency.language}</div> 
        <div className='accordion_next'>  <img src={require("../../assets/images/icons/next-icon.svg")} /></div>
            
        </button>
        <div className={`panel_lang`}  >
        <label>Dil</label>
           <Selectbox handleChange={handleChange} name='language' value={Langs} class='accordion_select'  options={Langs}/>
{/*        <label>Valyuta</label>
<Selectbox handleChange={handleChange} name='currency' value={Currency}  class='accordion_select'  options={Currency}/>*/}
        </div>
        </div>
    </>
    )
}

export default LangToggler