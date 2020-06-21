import React from "react";
import './button.component.scss';


const Button = ({children,onClick,type,name,data,className}) => {
  return (
    <div className="btn-group">
          <button data={data} onClick={onClick} type={type} className={`btn-add btn border__radius--big border--medium display__block  ${className}`}>
          {name}
          {children}
          </button>
        </div>
  );
};
export default Button;
