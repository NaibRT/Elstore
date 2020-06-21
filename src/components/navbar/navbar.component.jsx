import React,{useState, useEffect,useContext} from 'react';
import './navbar.component.scss';
import { Link , Switch ,  Route, Redirect  } from "react-router-dom";
import ResponsiveCat from '../responsiv_categories/responsiv_categories.component'
import {searchContext} from '../../contexts/search';
import Modal from "../Modal/Modal.component"
import MobileModal from '../categorymobile_modal/mobilemodal'
import axios from 'axios'
import LangToggler from "../lang_currency_toggler/lang_currency_toggler";
import Selectbox from "../Select-box/SelectBox.component";
import {appContext} from '../../contexts/appContext'
import $ from 'jquery'
const Langs =  [
    {id:1,name:'Azerbaijan'},{id:2,name:'Turkish'},{id:3,name:'Ukranian'}];
const Currency =  ['AZN','EURO','USD'];


function  Navbar(props) {

    const products = useContext(searchContext);
    const [visiblepp,setVisiblepp] =useState(false);
    const AppContext=useContext(appContext);


    function showbar(){
        setVisiblepp(!visiblepp)
    }

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
    useEffect(()=>{
        var acc = document.getElementsByClassName("accordion_lang");
            var i;
    
            for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.height) {
                panel.style.height = null;
                } else {
                panel.style.height = panel.scrollHeight + "px";
                } 
            });
            }



            $(function() {
                $(".navbar_bottom_link").click(function() {
                   // remove classes from all
                   $(".navbar_bottom_link").removeClass("activenav");
                   // add class to the one we clicked
                   $(this).addClass("activenav");
                   
                });
                $(".navbar_logo a").click(function() {
                    $(".navbar_bottom_link").removeClass("activenav");
                 });
             });
             
             if(window.location.href.split('/')[3]==='' && window.location.href.split('/')[3] === 'index'){
                $(".navbar_bottom_link").removeClass("activenav");
             }
          








    })
   
    
    
      const [show,setShow] = useState({
        show: false
      })

      
    function handleClick(){
        setShow({
            show: !show.show
          });
    }


   
    const [categories, setCategories] = useState({
        data:[]
    })
   
    const url = 'http://139.180.144.49/api/v1/az/categories';
  
     useEffect(()=>{
      axios({
          method:'GET',
          url:url,
  
      }).then(res=>{
          setCategories({data:res.data.data});
      })
     },[])
  


    const userProfle=<>
    <Link   className='navbar_buttons_link bag budget' >256 ₼ </Link> 
    <Link   className='navbar_buttons_link bag notification' to='/notification'> <img src={require('../../assets/images/Not.svg')} /></Link>  
    <Link onClick={showbar} className={`navbar_buttons_link profile`}> <img src={require('../../assets/images/user.png')} /> <img width='12px' src={require('../../assets/images/down.svg')} /></Link>
<div className={`profile_dropwdown ${visiblepp ? 'active':''}`} >
    <ul className='profile_dropwdown_ul'>
        <li className='profile_dropwdown_li'> <Link to='/profile'>Profile</Link></li>
        <li className='profile_dropwdown_li'><Link to='/orders'>Bəyənilən məhsullar</Link></li>
        <li className='profile_dropwdown_li'><Link to='/orders'>Bəyənilən brendlər və mağazalar</Link></li>
        <li className='profile_dropwdown_li'><Link to='/orders'>Tənzimləmələr</Link></li>
        <li className='profile_dropwdown_li'><Link to='/orders'>Logout</Link></li>
    </ul>
</div>

</>;

const loginRegister=<>

                    <Link className='navbar_buttons_link log login' onClick={Sign} >daxİl ol</Link>
                    <Link className='navbar_buttons_link log signup' onClick={Sign} >hesab yarat</Link>
                      
                    </> 

    return (
        <div className='navbar'>
            <div className='navbar_top'>
                <Link className="navbar_top_link" to='/worked-delivery'>Kuryer olmaq istəyirsiniz?</Link>
                <Link className="navbar_top_link navbar_top_link--end " to='/open-store'>Mağaza aç</Link>
            </div>
            <div className='navbar_center'>
                <div className='navbar_logo'>
                    <Link to='/'><img src={require('../../assets/logo/logo.svg')} /></Link>
                </div>
                <div className='navbar_search'>
                <form   className="search-input" >
                    <input onChange={products.events.searchForm}  value={localStorage.getItem('search')} className='search-input-text' type="text" placeholder="Search.." name="search" />
                    <Link to={`/categories?search:${products.state.searchKey}`} className='search-input-submit' type="submit"><img src={require('../../assets/images/icons/search.svg')} /></Link>
                </form>
                </div>
                <div className='navbar_select'>
                    <LangToggler/>
                </div>
                <div className='navbar_buttons'>
                     <Link   className='navbar_buttons_link bag' to='/basket'> <img src={require('../../assets/images/heading/Bag.svg')} /></Link> 
                    
                    
                    {
                        AppContext.app.isAuthorized?
                            userProfle:
                            loginRegister
                    }
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
                    <Selectbox  value={Langs} class='accordion_select'  options={Langs}/>
                    <Selectbox   value={Currency} class='accordion_select'  options={Currency}/>
                    </div>
                    <div className='responsive_nav_login'>
                    {
                        AppContext.app.isAuthorized?
                       <>
                        <Link   className='responsive_nav_login_log  ' >256 ₼ </Link> 
                            <Link   className='responsive_nav_login_log' to='/notification'> <img src={require('../../assets/images/Not.svg')} /></Link>
                        </>
                        :
                        <>
                        </>
                    }

                    </div>
                    <MobileModal onClose={handleClick} show={show.show}>
                        {categories.data.map(category=>{
                            return (<><br/><Link to={`/search/filter[category_id]=${category.id}&[category_name]=${category.name}`}>{category.name}</Link><br/></>)
                        })}
                        
                    </MobileModal>

                    <div className='responsive_nav_login'>
                        <Link className='responsive_nav_login_log' to='/register'>Register</Link>
                        <Link className='responsive_nav_login_log' to='/login'>Login</Link>
                    </div>

                    
                    <div className='responsive_nav_bottom'>
                            <Link className='responsive_nav_bottom_item' to="/cabinet">Cabinet <img src={require('../../assets/images/icons/arrowDown.png')} /> </Link>
                            <Link onClick={handleClick} className='responsive_nav_bottom_item ' >Kategories <img src={require('../../assets/images/icons/arrowDown.png')} /></Link>
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
