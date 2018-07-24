import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//basic character card
const CharacterCard = ({
   index,
   charImg,
   name,
   armor,
   health,
   attack,
   id,
   removeCharacter,
}) => {
   let classList = 'col char-card-container  ml-auto mb-2';
   let cardClass = 'charCard card pullUp';

   if (index === 0) {
      cardClass += ' current-card floating';
   }

   const remove = () => {
      removeCharacter(index);
   };

   return (
      <div className={classList}>
         <div className={cardClass}>
            <button type="button" className="btn close-btn" onClick={remove} />
            <img
               className="charImg card-img-top"
               src={charImg}
               alt="Character Card"
            />
            <div className="card-body">
               <h5 className="card-title">{name + ' ' + id}</h5>
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
            <Link to={'/character/' + id}>
               <button
                  type="button"
                  className="card-link btn btn-secondary"
                  style={{ width: `100%` }}>
                  <i className="fa fa-pencil-alt" aria-hidden="true" /> Edit
               </button>
            </Link>
         </div>
      </div>
   );
};

CharacterCard.propTypes = {
   index: PropTypes.number.isRequired,
   id: PropTypes.string.isRequired,
   charImg: PropTypes.string.isRequired,
   name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   armor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   health: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   attack: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   removeCharacter: PropTypes.func.isRequired,
};

CharacterCard.defaultProps = {
   armor: 0,
   health: 0,
   attack: '+0',
};

export default CharacterCard;
