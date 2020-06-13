import React,{useState, useEffect,useContext} from 'react';
import './navbar.component.scss';
import { Link , Switch ,  Route, Redirect  } from "react-router-dom";
import ResponsiveCat from '../responsiv_categories/responsiv_categories.component'
import {searchContext} from '../../contexts/search';
import Modal from "../Modal/Modal.component"

function  Navbar(props) {
    const products = useContext(searchContext);

    const [toggle, setToggle] = useState({
        active: false,
      });

    function toggleNav() {
        const currentState = toggle.active;
        setToggle({ active: !currentState });
    }

   function Sign(){
       let modal= document.getElementById("login__modal");
       modal.style.display="block";
       console.log(modal)
       
   }

    return (
        <div className='navbar'>
            <div className='navbar_top'>
                <Link className="navbar_top_link" to='#'>Kuryer olmaq istəyirsiniz?</Link>
                <Link className="navbar_top_link navbar_top_link--end " to='#'>Mağaza aç</Link>
            </div>
            <div className='navbar_center'>
                <div className='navbar_logo'>
                    <Link to='/'><img src={require('../../assets/images/heading/logo.svg')} /></Link>
                </div>
                <div className='navbar_search'>
                <form   className="search-input" >
                    <input onChange={products.events.searchForm}  value={localStorage.getItem('search')} className='search-input-text' type="text" placeholder="Search.." name="search" />
                    <Link to={`/categories?search:${products.state.searchKey}`} className='search-input-submit' type="submit"><img src={require('../../assets/images/icons/search.svg')} /></Link>
                </form>
                </div>
                <div className='navbar_buttons'>
                    <Link className='navbar_buttons_link bag' to='/basket'> <img src={require('../../assets/images/heading/Bag.svg')} /></Link>
                    <Link className='navbar_buttons_link log login' onClick={Sign} >daxİl ol</Link>
                    <Link className='navbar_buttons_link log signup' to='/register'>hesab yarat</Link>
                    <div>
                    <div className={`${toggle.active ? 'change': ''} menu-container navbaroutside`}    onClick={toggleNav}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    </div>
                </div>
            </div>
            
            {/* <div className='searchDiv'>
                <form className="search-input" action="/action_page.php">
                    <input className='search-input-text' type="search" placeholder="Search.." name="search" />
                    <button className='search-input-submit' type="submit"><img src={require('../../assets/images/icons/search.svg')} /></button>
                </form>
            </div> */}

            <div className={`${toggle.active ? 'opennav': ''} responsive_nav`}>
                    <div className='responsive_nav_top'>
                        <Link className='responsive_nav_top_lang' to='/eng'>Eng</Link>
                        <Link className='responsive_nav_top_lang' to='/ru'>Ru</Link>
                    </div>
                    <div className='responsive_nav_login'>
                        <Link className='responsive_nav_login_log' to='/register'>Register</Link>
                        <Link className='responsive_nav_login_log' to='/login'>Login</Link>
                    </div>
                    <div className='responsive_nav_bottom'>
                            <Link className='responsive_nav_bottom_item' to="/cabinet">Cabinet <img src={require('../../assets/images/icons/arrowDown.png')} /> </Link>
                        <Link className='responsive_nav_bottom_item' to="/categories">Kategories <img src={require('../../assets/images/icons/arrowDown.png')} /></Link>
                    </div>
                </div>

            <div className='navbar_bottom'>
                <Link to='/homeandoffice' className='navbar_bottom_link'>Ev və ofis aksesuarları</Link>
                <Link to='/clothesandbags' className='navbar_bottom_link'>Geyim və çantalar</Link>
                <Link to='/bujiteriya' className='navbar_bottom_link'>Bijuteriya və aksesuarlar</Link>
                <Link to='/special' className='navbar_bottom_link'>Özəlləşdirilən</Link>
                <Link to='/art' className='navbar_bottom_link'>İncəsənət nümunələri</Link>
                <Link to='/handcraft' className='navbar_bottom_link'>Əl işləri</Link>
            </div>

        </div>
    )
}

export default Navbar
