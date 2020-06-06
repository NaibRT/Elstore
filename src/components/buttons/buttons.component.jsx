import React from "react";
import "./buttons.styles.scss";
import Logo from "../buttons/Bag.svg";

const Buttons = () => {
  return (
    <div className="btn-group">
      <div className="container">
        <div className="row">
          <button className="btn-add bg-primary border__radius--big border--medium display__block txt--light">
            səbətə əlavə et
          </button>

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
      </div>
    </div>
  );
};
export default Buttons;
