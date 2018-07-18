import React from "react";
import PropTypes from "prop-types";
import LiveEditInput from "../common/LiveEditInput";

//basic character card
const CharacterCardInput = ({
  index,
  initiative,
  onFieldChange,
  charImg,
  name,
  armor,
  health,
  attack,
  id,
  errors
}) => {
  let cardClass = "charCard card";

  if (index === 0) {
    cardClass += " current-card";
  }

  return (
    <div className="col ml-auto">
      <div className={cardClass}>
        <img
          className="charImg card-img-top"
          src={charImg}
          alt="Character Card"
        />
        <div className="card-body">
          <h5 className="card-title">
            <input value={name} />
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <LiveEditInput
              name="order"
              label="Initiative:"
              value={initiative}
              onChange={onFieldChange}
              error={errors.initiative}
            />
          </li>
          <li className="list-group-item">
            <LiveEditInput
              name="armor"
              label="AC:"
              value={armor}
              onChange={onFieldChange}
              error={errors.armor}
            />
          </li>
          <li className="list-group-item">
            <LiveEditInput
              name="health"
              label="HP:"
              value={health}
              onChange={onFieldChange}
              error={errors.health}
            />
          </li>
          <li className="list-group-item">
            <LiveEditInput
              name="attack"
              label="ATTACK:"
              value={attack}
              onChange={onFieldChange}
              error={errors.attack}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

CharacterCardInput.propTypes = {
  index: PropTypes.number.isRequired,
  initiative: PropTypes.number.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  charImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  armor: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired,
  attack: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  errors: PropTypes.object.isRequired
};

export default CharacterCardInput;
