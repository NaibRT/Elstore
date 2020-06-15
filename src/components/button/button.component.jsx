import React from "react";
import './button.component.scss';


const Button = (props) => {
  return (
    <div className="btn-group">
          <button onClick={props.onClick} type={props.type} className={`btn-add btn border__radius--big border--medium display__block  ${props.className}`}>
          {props.name}
          </button>
        </div>
  );
};
export default Button;
