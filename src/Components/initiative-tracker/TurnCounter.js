import React from 'react';

const TurnCounter = (props) => {
    return (
        <div className="turn-counter card text-white bg-secondary">
            <h4 className="card-header">Turn: {props.turn}</h4>
            <div className="card-body">
                <div className="progress">
                    <div className="progress-bar" style={{width: `${props.progress}%`}} role="progressbar" aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    );
};

export default TurnCounter;