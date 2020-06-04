import React from "react";
import "./input.styles.scss";

const Input = () => {
  return (
    <div className="input">
        <div className="row">
          <input
            className="input-notes bg-light border__radius--big txt--dark"
            type="text"
            name="notes"
            placeholder="Qeydlər"
          ></input>
        </div>
      </div>
  );
};
export default Input;
