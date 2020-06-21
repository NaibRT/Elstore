import React,{useState} from 'react'
import './ButtonDropDown.component.scss'
import Button from '../button/button.component';


function showHide(e){
    let current=e.target.closest('.button_drop__down').nextElementSibling;

    // current.classList.toggle('middle_side-height')
}

function ButtonDropDown() {
    const [toggle, setToggle] = useState({
        active: false,
      });

      function toggleNav() {
        const currentState = toggle.active;
        setToggle({ active: !currentState });
    }

    return (
        <>
     
            <Button onClick={toggleNav}  className='left_side__overflow' name='düzəlİş et'/>
        
            <div id="middleSide" className={`middle_side middle_hide ${toggle.active ? 'middle_side-height':''}`} >
                <div className="middle_side__content">
                    <a href="">yenİ Şəkİl əlavə et</a>
                    <a href="">Rəsmİ Sİl</a>
                </div>
            </div>
        </>
    )
}

export default ButtonDropDown
