import React from 'react';
import PropTypes from 'prop-types';
import LiveEditInput from '../common/LiveEditInput';

//basic character card
const CharacterCardInput = ({
   index,
   order,
   onFieldChange,
   charImg,
   name,
   armor,
   health,
   attack,
   id,
   errors,
   removeCharacter,
}) => {
   let cardClass = 'charCard card pullUp';

   if (index === 0) {
      cardClass += ' current-card floating';
   }

   const remove = () => {
      removeCharacter(index);
   };

   return (
      <div className="col ml-auto">
         <div className={cardClass}>
            <button type="button" className="btn close-btn" onClick={remove} />
            <img
               className="charImg card-img-top"
               src={charImg}
               alt="Character Card"
            />
            <div className="card-body">
               <h5 className="card-title">
                  {name}
                  {id > 0 ? id : ''}
               </h5>
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <LiveEditInput
                     name="order"
                     label="Initiative:"
                     value={order}
                     onChange={onFieldChange}
                     error={errors.order}
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
   order: PropTypes.number.isRequired,
   onFieldChange: PropTypes.func.isRequired,
   charImg: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   armor: PropTypes.string.isRequired,
   health: PropTypes.number.isRequired,
   attack: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   errors: PropTypes.object,
   removeCharacter: PropTypes.func.isRequired,
};

CharacterCardInput.defaultProps = {
   errors: {},
};

export default CharacterCardInput;
