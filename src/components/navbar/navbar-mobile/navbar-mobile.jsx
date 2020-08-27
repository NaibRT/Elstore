import React, { useState, useContext } from 'react'
import './navbar-mobile.scss'
import { Link } from 'react-router-dom'
import {appContext} from '../../../contexts/appContext';

function NavbarMobile() {
 const [toggle, setToggle] = useState({
  active: false,
  });

  const AppContext=useContext(appContext);

 function toggleNav() {
  document.getElementsByClassName('menu-container')[0].classList.toggle('change');
  document.getElementById('res-nav-id').classList.toggle('opennav');
  document.getElementsByTagName('body')[0].classList.toggle('of-hidden');
  document.getElementById('res-nav-id').classList.toggle('of-scroll');
  
  const currentState = toggle.active;
  setToggle({ active: !currentState });
}

 return (
  <div className='navbar-mobile'>
     <div className='navbar-mobile-top'></div>
     <div className='navbar-mobile-bootom'>
       <div className='navbar-mobile-bootom-container'>
          <div className='navbar-mobile-bootom-container-left'>
             <div className={`menu-container navbaroutside`} onClick={toggleNav}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
             </div>
          </div>
          <div className='navbar_logo'>
             <Link to='/'><img alt='' src={require('../../assets/logo/logo_1.svg')} /></Link>
          </div>
          <div className='navbar-mobile-bootom-container-right'>
          <div className='navbar-mobile-notification'>
             <img alt='' src={require('../../assets/images/ringbells.svg')} />
             <span>0</span>
          </div>
          <Link className='navbar_buttons_link bag basket' to='/basket'>
             <img alt='' src={require('../../assets/images/bagins.svg')} />
               <span>{AppContext.basket.length}</span>
          </Link> 
          </div>
       </div>
     </div>
  </div>
 )
}

export default NavbarMobile
