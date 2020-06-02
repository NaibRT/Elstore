import React from "react";
import "./buttons.styles.scss";

const Buttons = () => {
  return (
    <div className="btn-group">
      <div className="container">
        <div className="row">
          <button className="btn-buy-now bg-primary border__radius--big border--medium display__block txt--light">
            <h1>INDI AL</h1>
          </button>

          <button className="btn-add bg-primary--light border__radius--big border--medium display__block txt--dark">
            <h1>SEBETE ELAVE ET</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Buttons;
