import React from "react";

const Input = props => (
  <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
      <input className="input" name={props.name} type={props.type} />
    </div>
  </div>
);

Input.defaultProps = {
  type: "text"
};

export default Input;
