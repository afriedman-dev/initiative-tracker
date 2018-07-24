import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
   let wrapperClass = 'form-group';
   if (error && error.length > 0) {
      wrapperClass += ' has-error';
   }

   return (
      <div className={wrapperClass}>
         <label htmlFor={name}>{label}</label>
         <input
            type="text"
            name={name}
            id={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
         {error && <div className="alert alert-danger">{error}</div>}
      </div>
   );
};

TextInput.propTypes = {
   name: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   placeholder: PropTypes.string,
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   error: PropTypes.string,
};

TextInput.defaultProps = {
   placeholder: '',
   error: null,
};

export default TextInput;
