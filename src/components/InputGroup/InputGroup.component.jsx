import React from 'react'
import './InputGroup.styles.scss';

function InputGroup({label,helper,countertext,formIcon}) {
    return (
        <form className='inputForm'>
            <label  className='inputForm_label'>{label}</label>
            <div className='inputForm_iconcontainer'>
            <input className='inputForm_input' />
            <span className='inputForm_icon'><img src={formIcon} /></span>
            </div>
            <div className='inputForm_helpcontainer'>
                <span className='inputForm_helper_text'>{helper}</span>
                <span className='inputForm_counter' >{countertext}</span>
            </div>
        </form>
    )
}

export default InputGroup
