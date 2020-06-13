import React,{useEffect} from 'react'
import './InputGroup.styles.scss';



function InputGroup({required,type,label,helper,countertext,formIcon,placeholder,otherProps}) {
    return (
        <div  className='inputForm'>
            <label id='scripted'  className='inputForm_label'>{label}</label>
            <div className='inputForm_iconcontainer'>
            <input required={required} type={type} placeholder={placeholder} {...otherProps} className='inputForm_input' />
            <span className='inputForm_icon'><img src={formIcon} /></span>
            </div>
            <div className='inputForm_helpcontainer'>
                <span className='inputForm_helper_text'>{helper}</span>
                <span className='inputForm_counter' >{countertext}</span>
            </div>
        </div>
    )
}

export default InputGroup
