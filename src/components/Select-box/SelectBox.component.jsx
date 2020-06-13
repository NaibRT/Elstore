import React from 'react'
import './SelectBox.component.scss';




function SelectBox(props) {
    return (
        <div className={`select__search ${props.class}`} >
            <form>
                <label htmlFor="" id="labelId">{props.label}</label>
                <select name="" id="searchSelect">
                   {
                    props.options.map(item=>{
                        return <option value="">{item}</option>
                    })
                   }
                </select>
            </form>
        </div>
    )
}


export default SelectBox

