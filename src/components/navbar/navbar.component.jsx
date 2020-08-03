import React,{useState, useEffect,useContext} from 'react';
import './navbar.component.scss';
import {useHistory,Link } from "react-router-dom";
import {searchContext} from '../../contexts/search';
import MobileModal from '../categorymobile_modal/mobilemodal'
import axios from 'axios'
import LangToggler from "../lang_currency_toggler/lang_currency_toggler";
import Selectbox from "../Select-box/SelectBox.component";
import {appContext} from '../../contexts/appContext'
import $ from 'jquery'
import UrlGenerator from '../../services/url-generator';

const Langs =  [
    {id:1,name:'Azerbaijan'},{id:2,name:'Turkish'},{id:3,name:'Ukranian'}];
const Currency =  ['AZN','EURO','USD'];


function  Navbar(props) {

    const products = useContext(searchContext);
    const [visiblepp,setVisiblepp] =useState(false);
    const AppContext=useContext(appContext);
    const History=useHistory();

    const [categories, setCategories] = useState({
        data:[]
    })

    const [show,setShow] = useState({
        show: false
      })

      const [navbarCat, setNavbarCat] = useState({
        data:[]
    })

    const [toggle, setToggle] = useState({
        active: false,
      });


    function showbar(){
        setVisiblepp(!visiblepp)
    }


      window.onclick = function(event) {
        if (!event.target.matches('.navbar_buttons_link profile')) {
      
          var dropdowns = document.getElementsByClassName(".profile_dropwdown");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {  
              openDropdown.classList.remove('show');
            }
          }
        }
      }
      
    function toggleNav() {
        document.getElementsByTagName('body')[0].classList.toggle('of-hiddel');
        document.getElementById('res-nav-id').classList.toggle('of-scroll');
        document.getElementById('res-nav-id').classList.toggle('opennav');
        const currentState = toggle.active;
        setToggle({ active: !currentState });
    }

   function Sign(){
       let modal= document.getElementById("login__modal");
       modal.style.display="block";
       
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
                panel.style.height = '70px';
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

    },[])
   
    let url=UrlGenerator('az','categories')
    useEffect(()=>{
        axios({
            method:'GET',
            url:url,
    
        }).then(res=>{
            setNavbarCat({
                data:res.data.data
            })
        })
    },[])


    function handleClick(){
        setShow({
            show: !show.show
          });
    }

     useEffect(()=>{
      axios({
          method:'GET',
          url:url,
  
      }).then(res=>{
          setCategories({data:res.data.data});
      })
     },[])
  

    const userProfle=<>
    <Link onClick={showbar} className={`navbar_buttons_link profile`}> <img alt='' src={require('../../assets/images/manly.svg')} /> </Link>
    
    
<div className={`profile_dropwdown ${visiblepp ? 'active':''}`} >
    <ul className='profile_dropwdown_ul'>
        <li className='profile_dropwdown_li'> <Link to='/profile'>Profil</Link></li>
        <li className='profile_dropwdown_li_a'><Link onClick={AppContext.events.logout}>Çıxış</Link></li>
    </ul>
</div>

</>;
const loginRegister = <>
<Link onClick={showbar} className={`navbar_buttons_link profile`}> <img alt='' src={require('../../assets/images/manly.svg')} /> </Link>
    
    
<div className={`profile_dropwdown ${visiblepp ? 'active':''}`} >
    <ul className='profile_dropwdown_ul'>
        <li className='profile_dropwdown_li'> <Link onClick={Sign}>Daxil ol</Link></li>
        <li className='profile_dropwdown_li_a'><Link onClick={Sign}>Hesab Yarat</Link></li>
    </ul>
</div>
                    </> 
             console.log(categories.data)       
    return (
        <div className='navbar'>
            <div className='navbar_top'>
                <div className='left_navbar__top'>
                    <Link to = '/campaigns' className="navbar_top_link">Kampaniyalar</Link>
                    <Link  to = '/shops' className="navbar_top_link">Mağazalar</Link>
                    <Link className="navbar_top_link">Tez-tez verilən suallar</Link>
                    <Link to = '/contact' className="navbar_top_link">Əlaqə</Link>
                </div>
                <div className="right_navbar__top">
                    <Link className="navbar_top_link" to='/worked-delivery'>Kuryer olmaq istəyirsiniz?</Link>
                    <Link className="navbar_top_link navbar_top_link--end " to='/open-store'>Mağaza aç</Link>
                    
                    
                    
                   

                    <div className='navbar_select'>
                    <LangToggler firstopt="Azərbaycan"/>
                    </div>

                </div>
            </div>
            <div className='navbar_center'> 
                <div className='navbar_logo'>
                    <Link to='/'><img alt='' src={require('../../assets/logo/logo_1.svg')} /></Link>
                </div>
                <div className='navbar_search'>
                <form onSubmit={(e)=>{e.preventDefault();History.push(`/search/filter[title]=${products.state.searchKey}`)}}  className="search-input" >
                <div className="withicon">
                    <input onChange={products.events.searchForm}  value={products.state.searchKey} className='search-input-text' type="text" placeholder="Axtarış.." name="search" />
                    <Link to={`/search/filter[title]=${products.state.searchKey}`} className='search-input-submit' type="submit"><img alt='' src={require('../../assets/images/Iconka.svg')} /></Link>
              </div>
                    </form>
                </div>
                
                

                <div className='navbar_buttons'>
                <Link   className='navbar_buttons_link bag notification' to='/notification'> <img alt='' src={require('../../assets/images/ringbells.svg')} /></Link>
                <Link   className='navbar_buttons_link bag' to='/basket'><img alt='' src={require('../../assets/images/bagins.svg')} /><span>{AppContext.basket.length}</span></Link> 
                     
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
            
            {/*------------------responsive nav*/}
            <div className='responsive_nav' id='res-nav-id'>
                    <div className='responsive_nav_top'>
                    {/*<Selectbox  value={Langs} class='accordion_select'  options={Langs}/>*/}
                    {/* <Selectbox   value={Currency} class='accordion_select'  options={Currency}/> */}
                    </div>
                    <div className='responsive_nav_login'>
                    
                    {
                    //     AppContext.app.isAuthorized?
                    //    <>
                    //     <Link   className='responsive_nav_login_log  ' >0 ₼ </Link> 
                    //         <Link   className='responsive_nav_login_log' to='/notification'> <img alt='' src={require('../../assets/images/Not.svg')} /></Link>
                    //     </>:null
                    }
                    </div>
                    <MobileModal onClose={handleClick} show={show.show}>
                        {categories.data.map(category=>{
                            return (<><br/><Link to={`/search/filter[category_id]=${category.id}`}>{category.name}</Link><br/></>)
                        })}
                        
                    </MobileModal>
                    <div className='responsive_nav_login'>
                        <Link className='responsive_nav_login_log' onClick={()=>{document.getElementById('login__modal').style.display='block';}}>Qeydiyyat</Link>
                        <Link className='responsive_nav_login_log' onClick={()=>{document.getElementById('login__modal').style.display='block';}}>Daxil Ol</Link>
                    </div>
                    
                    <div className='responsive_nav_bottom'>
                            <Link className='responsive_nav_bottom_item' to="/profile">Profil <img alt='' src={require('../../assets/images/icons/arrowDown.png')} /> </Link>
                            <Link onClick={handleClick} className='responsive_nav_bottom_item ' >Kateqoriyalar <img alt='' src={require('../../assets/images/icons/arrowDown.png')} /></Link>
                    </div>
                </div>
        </div>
    )
}
export default Navbar