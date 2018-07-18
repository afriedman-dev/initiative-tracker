import React from 'react';
import PropTypes from 'prop-types';
import NewCharacterForm from './NewCharacterForm';

const NewCharacterFormPage = ({ addNewChar }) => {
   return (
      <div className="col offset-3" style={{ marginTop: '2.5rem' }}>
         <NewCharacterForm onSubmit={addNewChar} />
      </div>
   );
};

NewCharacterFormPage.propTypes = {
   addNewChar: PropTypes.func.isRequired,
};

export default NewCharacterFormPage;
