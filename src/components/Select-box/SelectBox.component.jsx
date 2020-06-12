import React from 'react'
import './SelectBox.component.scss';




function SelectBox() {
    return (
        <div className="select__search">
            <form>
                <label htmlFor="" id="labelId"></label>
                <select name="" id="searchSelect">
                    <option value="">Sirala
                    </option>
                    <option value="">Ucuzdan bahaya doğru</option>
                    <option value="">Bahadan ucuza doğru</option>
                    <option value="">Ən çox satılanlar</option>
                    <option value="">Ən yenilər</option>
                </select>
            </form>
        </div>
    )
}

export default SelectBox
