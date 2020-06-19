import React from 'react'
import './profile-shop-home.scss'
import Chips from '../components/chips/chips.component';
import CompanyMiniImage from '../components/Compony-mini-image/CompanyMiniImage';
import ButtonRating from '../components/button-rating/buttonRating.component';
import Button from '../components/button/button.component';
import ButtonDropDown from '../components/button-dropdown/ButtonDropDown.component';


function ProfileShopHome() {
    return (
        <section className="profile_shop__home__section">
            <div className="profile_shop__home__image">
                <div className="profile_shop__home__image__content button_drop__down">
                    <ButtonDropDown/>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="all_sides__contents">
                            <div className="left_side">
                                <CompanyMiniImage/>
                            </div>
                            <div className="middle_side_text__content">
                                    <h4>Saboon</h4>
                                    <p>Description in a few words or less even more.</p>
                                    <Chips />
                                    <ButtonRating name='Yuksek rating' icon={require('../assets/images/icons/star.svg')} class='bg-gold'/>
                            </div>
                            <div className="right_side">
                                <div className="right_side__content">
                                    <h6>Əlaqə</h6>
                                    <p>example@example.com</p>
                                    <p>+994 12 455 55 55</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileShopHome
