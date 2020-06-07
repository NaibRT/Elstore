import React from "react";
import './button-add.styles.scss';

const ButtonAdd = () => {
  return (
    <div className="btn-group">
      <div className="container">
        <div className="row">
          <button className="btn-add bg-primary border__radius--big border--medium display__block txt--light">
            səbətə əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};
export default ButtonAdd;
