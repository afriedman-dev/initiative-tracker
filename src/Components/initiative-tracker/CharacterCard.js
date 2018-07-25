import React from 'react';
import PropTypes from 'prop-types';

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
   flipCard,
}) => {
   let cardClass = 'charCard card pullUp';

   if (index === 0) {
      cardClass += ' current-card floating';
   }

   const remove = () => {
      removeCharacter(index);
   };

   const flip = () => {
      flipCard(id);
   };

   return (
      <div>
         <div className={cardClass}>
            <button type="button" className="btn close-btn" onClick={remove} />
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
            <button
               type="button"
               className="card-link btn btn-secondary"
               onClick={flip}
               style={{ width: `100%` }}>
               <i className="fa fa-pencil-alt" aria-hidden="true" /> Edit
            </button>
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
   flipCard: PropTypes.func.isRequired,
};

CharacterCard.defaultProps = {
   armor: 0,
   health: 0,
   attack: '+0',
};

export default CharacterCard;
