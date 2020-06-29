import React from 'react'
import './SelectBox.component.scss';




function SelectBox(props) {
    return (
            <div className={`${props.class}`} >
                    <label htmlFor="" id="labelId">{props.label}</label>
                    <select name={props.name} value={props.value}  onChange={props.handleChange} ref={props.register}  id="searchSelect">
                        <option>{props.firstopt} </option>
                    {
                        (props.options!==undefined)?props.options.map(item =>{
                            return <option value={item.value}>{item.name}</option>
                            }):''
                    }
                    </select>
            </div>
    )
}


export default SelectBox