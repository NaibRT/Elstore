import React from 'react'

function Checkbox(props) {
    return (
        <label class="container-check">{props.name}
            <input value={props.value}   onClick={props.onClick}   type="checkbox" />
            <span class="checkmark"></span>
        </label>
    )
}

export default Checkbox
