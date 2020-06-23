import React,{useEffect,useState} from 'react'
import './lang_currency_toggler.scss';
import Selectbox from '../Select-box/SelectBox.component'


const Langs =  [{id:'AZE',name:'Azerbaijan'},{id:'TUR',name:'Turkish'},{id:'UKR',name:'Ukranian'}];
const  langval =  ['AZE','TR','UKR'];
const Currency =  ['AZN','EURO','USD'];


function LangToggler() {

    const [toggler, setToggler] = useState({
        toggle:false
    })

    function toggleropen(){
        setToggler({toggle: !toggler.toggle})
    }

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
            language:'Azerbaijanian',
            currency:'AZN',
        })
    }

    return (
        <>
        <div className='select_border'>
        <button onClick={toggleropen} class="accordion_lang">
        <div>{languageCurrency.language} / {languageCurrency.currency}</div> 
        <div className='accordion_next'>  <img src={require("../../assets/images/icons/next-icon.svg")} /></div>
            
        </button>
        <div className={`panel_lang ${toggler.toggle ? 'active_panel':''}`}  >
        <label>Dil</label>
           <Selectbox firstopt='Dil' handleChange={handleChange} name='language' value={langval} class='accordion_select'  options={Langs}/>
        <label>Valyuta</label>
           <Selectbox firstopt='Valyuta' handleChange={handleChange} name='currency' value={Currency}  class='accordion_select'  options={Currency}/>
        </div>
        </div>
        </>
    )
}

export default LangToggler