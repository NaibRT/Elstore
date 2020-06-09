import React from "react";
import Logo from "./Bag.svg";
import './button-buy-now.styles.scss';

const ButtonBuyNow = () => {
  return (
    <div className="btn-group">

          <button className="btn-buy-now border__radius--big border--medium display__block txt--secondary">
            indi al
          </button>

          <div className="add-basket">
            <img
              className="add-basket-icon display__inline-block"
              src={Logo}
              alt="icon"
            />
            <p className="add-basket-p txt--secondary  display__inline-block">
              12 nəfər səbətə əlavə edib
            </p>
          </div>
        </div>
  );
};
export default ButtonBuyNow;
