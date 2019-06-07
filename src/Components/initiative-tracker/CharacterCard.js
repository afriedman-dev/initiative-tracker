import React from 'react';
import PropTypes from 'prop-types';
import StatusBar from '../common/StatusBar';

//basic character card
const CharacterCard = ({ index, char, removeCharacter, flipCard }) => {
  let cardClass = 'charCard card pullUp';

  if (index === 0) {
    cardClass += ' current-card floating';
  }

  const remove = () => {
    removeCharacter(index);
  };

  const flip = () => {
    flipCard(char.id);
  };

  return (
    <div>
      <div className={cardClass}>
        <button type="button" className="btn close-btn" onClick={remove} />
        <img className="charImg card-img-top" src={char.charImg} alt="Character Card" />
        <div className="card-body">
          <h5 className="card-title">{char.name}</h5>
          <StatusBar statuses={char.statuses} />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>AC:</strong> {char.armor}
          </li>
          <li className="list-group-item">
            <strong>HP:</strong> {char.health}
          </li>
          <li className="list-group-item">
            <strong>ATTACK:</strong> {char.attack}
          </li>
        </ul>
        <button
          type="button"
          className="card-link btn btn-secondary"
          onClick={flip}
          style={{ width: `100%` }}
        >
          <i className="fa fa-pencil-alt" aria-hidden="true" /> Edit
        </button>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  index: PropTypes.number.isRequired,
  char: PropTypes.object.isRequired,
  removeCharacter: PropTypes.func.isRequired,
  flipCard: PropTypes.func.isRequired
};

export default CharacterCard;
