import React from 'react';
import PropTypes from 'prop-types';

const LiveEditInput = ({ name, label, onChange, value, error }) => {
  const wrapperClass = `form-group row${error && error.length > 0 ? ' has-error' : ''}`;

  return (
    <div className={wrapperClass}>
      <div className="col-4">
        <strong>{label}</strong>
      </div>
      <div className="col-8">
        <input type="text" name={name} className="form-control" value={value} onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

LiveEditInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  error: PropTypes.string
};

LiveEditInput.defaultProps = { error: null };

export default LiveEditInput;
