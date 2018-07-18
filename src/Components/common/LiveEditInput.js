import React from "react";
import PropTypes from "prop-types";

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

LiveEditInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired
};

export default LiveEditInput;
