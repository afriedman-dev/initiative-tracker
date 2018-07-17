import React from "react";

const LiveEditInput = ({ name, label, onChange, value, error }) => {
  let wrapperClass = "form-group row";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <div className="col-4">
        <strong>{label}</strong>
      </div>
      <div className="col-8">
        <input
          type="text"
          name={name}
          className="form-control"
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default LiveEditInput;
