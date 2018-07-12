import React from 'react';
import NewCharacterForm from './NewCharacterForm';

const NewCharacterFormPage = () => {
    let char = {
        name: '',
        charImg: '',
        order: '',
        armor: '',
        health: '',
        attack: ''
    }
    return (
        <div className="col offset-3" style={{ "marginTop": "2.5rem" }}>
            <NewCharacterForm char={char}/>
        </div>
    )
};

export default NewCharacterFormPage;