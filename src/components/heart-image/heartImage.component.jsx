import React,{useEffect,useContext} from 'react'
import UrlGenerator from '../../services/url-generator'
import './heartImage.component.scss';
import {appContext} from '../../contexts/appContext'


function HeartImage({id}) {
    const AppContetx=useContext(appContext);
    function showHide(e){
        let id=e.currentTarget.getAttribute('data-id');
        let url=UrlGenerator('az','users/like');
        let token=AppContetx.events.getToken();
        if(token!==null){
            fetch(url,{
                headers:{
                 'Content-Type':'application/json',
                 'Authorization':`${token.token_type} ${token.access_token}`
                },
                method:'Post',
                body:JSON.stringify({type:'product',liketable_id:id,action_type:'like'})
            }).then( response=>{
                if(!response.ok){
                    document.getElementById('login__modal').style.display='block'
                }
            })
            .catch(()=>document.getElementById('login__modal').style.display='block')
        }else{
            document.getElementById('login__modal').style.display='block';
        }

        // let firstImg = document.querySelector('.hearts_icon')
        // if(firstImg.childNodes[0].style.display === 'block'){
        //     firstImg.childNodes[0].style.display = 'none';
        //     firstImg.childNodes[1].style.display = 'block';
        // }else{
        //     firstImg.childNodes[1].style.display = 'none';
        //     firstImg.childNodes[0].style.display = 'block';
        // }
    }
    return (
        <div data-id={id} onClick={(e)=>showHide(e)} className="hearts_icon">
            <img src={require('../../assets/images/icons/Enabled.svg')} alt=""/>
            <img src={require('../../assets/images/icons/Active2.svg')} alt=""/>
        </div>
    )
}

export default HeartImage
