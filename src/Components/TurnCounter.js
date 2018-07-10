import React from 'react';

const TurnCounter = (props) => {
    return (
        <div className="turn-counter card text-white bg-secondary">
            <h4 className="card-header">Turn: {props.turn}</h4>
        </div>
    );
};

export default TurnCounter;