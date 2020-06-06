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
          />
          <div className="input-quantity txt--right">
            <span className="numbers txt--tertiary txt--end">0/256</span>
          </div>
        </div>
      </div>
  );
};
export default Input;
