import React from "react";

const Checkbox = props => (
  <div className="field">
    <div className="control">
      <label className="checkbox">
        <input type="checkbox" name={props.name} />
        <span style={{ marginLeft: 12 }}>{props.text}</span>
      </label>
    </div>
  </div>
);

export default Checkbox;
