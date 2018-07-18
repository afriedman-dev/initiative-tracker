import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//basic character card
const CharacterCard = ({ index, charImg, name, armor, health, attack, id }) => {
  let classList = "col char-card-container  ml-auto mb-2";
  let cardClass = "charCard card pullUp";

  if (index === 0) {
    cardClass += " current-card floating";
  }

  return (
    <div className={classList}>
      <div className={cardClass}>
        <button type="button" className="btn close-btn" />
        <img
          className="charImg card-img-top"
          src={charImg}
          alt="Character Card"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>AC:</strong> {armor}
          </li>
          <li className="list-group-item">
            <strong>HP:</strong> {health}
          </li>
          <li className="list-group-item">
            <strong>ATTACK:</strong> {attack}
          </li>
        </ul>
        <Link to={"/character/" + id}>
          <button
            type="button"
            className="card-link btn btn-secondary"
            style={{ width: `100%` }}
          >
            <i className="fa fa-pencil-alt" aria-hidden="true" /> Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  index: PropTypes.number.isRequired,
  charImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  armor: PropTypes.number.isRequired,
  health: PropTypes.number.isRequired,
  attack: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default CharacterCard;
