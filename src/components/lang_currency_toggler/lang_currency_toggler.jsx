import React,{useEffect,useState} from 'react'
import './lang_currency_toggler.scss';
import Selectbox from '../Select-box/SelectBox.component'


const Langs =  [
    {id:0,name:'Azərbaycan'},
    {id:1,name:'İnglis'},
    {id:2,name:'Russia'}
];
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

    const accordionLangHandler=(e)=>{
        console.log(e.target)
    }

    return (
        <>
           <Selectbox  class='accordion_select'  options={Langs}/>
        </>
    )
}

export default LangToggler