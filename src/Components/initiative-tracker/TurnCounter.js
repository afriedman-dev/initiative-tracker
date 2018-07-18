import React from "react";
import PropTypes from "prop-types";

const TurnCounter = ({ turn, progress }) => {
  return (
    <div className="turn-counter card text-white bg-secondary">
      <h4 className="card-header">Turn: {turn}</h4>
      <div className="card-body">
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    </div>
  );
};

TurnCounter.propTypes = {
  turn: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired
};

export default TurnCounter;
