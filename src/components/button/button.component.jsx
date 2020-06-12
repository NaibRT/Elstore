import React from "react";
import './button.component.scss';

const Button = (props) => {
  return (
    <div className="btn-group">
          <button className={`btn-add border__radius--big border--medium display__block  ${props.className}`}>
          {props.name}
          </button>
        </div>
  );
};
export default Button;
