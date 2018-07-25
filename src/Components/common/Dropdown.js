import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ data }) => {
   return (
      <div className="form-row align-items-center">
         <div className="col-auto my-1">
            <strong className="mr-sm-2">{data.label}</strong>
            <select className="custom-select mr-sm-2">
               <option defaultValue>{data.default}</option>
               {data.options.map(option => {
                  return (
                     <option key={option.value} value={option.value}>
                        {option.name}
                     </option>
                  );
               })}
            </select>
         </div>
      </div>
   );
};

Dropdown.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Dropdown;
