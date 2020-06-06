import React from "react";
import "./buttons.styles.scss";
import Logo from './icon.svg';

const Buttons = () => {
  return (
    <div className="btn-group">
      
        <div className="row">
          <button className="btn-buy-now bg-primary border__radius--big border--medium display__block txt--light">
           INDI AL
          </button>

          <button className="btn-add bg-primary--light border__radius--big border--medium display__block txt--secondary">
           SEBETE ELAVE ET
          </button>

          <div className="add-basket">
            <img className="add-basket-icon display__inline-block" src={Logo} alt="icon" />
            <p className="add-basket-p txt--secondary  display__inline-block">128 nefer <span className="add-basket-span txt--tertiary ">sebete elave edib</span></p>
          </div>

        </div>
    </div>
  );
};
export default Buttons;
