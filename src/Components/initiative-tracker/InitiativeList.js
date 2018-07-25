import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import CharacterCardInput from './CharacterCardInput';

//Initiative List mapping all characters passed in
class InitiativeList extends React.Component {
   constructor(props, context) {
      super(props, context);

      this.state = {};
   }

   render() {
      const {
         characters,
         updateInitiativeList,
         removeCharacter,
         onCharacterUpdate,
      } = this.props;

      const flipCard = id => {
         var targetCard = document.getElementById('flip-card-for_' + id);
         targetCard.classList.toggle('is-flipped');
      };

      return (
         <div className="initList col row align-items-center">
            <button
               className="col-1 remove-button-styles"
               onClick={() => updateInitiativeList('back')}
               type="button">
               <i
                  className="fa fa-arrow-circle-left fa-2x col btn"
                  aria-hidden="true"
               />
            </button>
            <div className="col-10 row">
               {!Array.isArray(characters) || !characters.length ? (
                  <div className="jumbotron">
                     <h1 className="display-4">Please add a character</h1>
                     <hr className="my-4" />
                     <p className="lead">
                        Once you add a character the tracker will be active
                     </p>
                  </div>
               ) : (
                  characters.map((char, i) => (
                     <div
                        className="flip-container char-card-container col ml-auto mb-2"
                        key={char.id}>
                        <div
                           className="flip-card"
                           id={'flip-card-for_' + char.id}>
                           <div className="flip-front">
                              <CharacterCard
                                 char={char}
                                 index={i}
                                 removeCharacter={removeCharacter}
                                 flipCard={flipCard}
                              />
                           </div>
                           <div className="flip-back">
                              <CharacterCardInput
                                 char={char}
                                 index={i}
                                 removeCharacter={removeCharacter}
                                 onCharacterUpdate={onCharacterUpdate}
                                 flipCard={flipCard}
                              />
                           </div>
                        </div>
                     </div>
                  ))
               )}
            </div>
            <button
               type="button"
               className="col-1 remove-button-styles"
               onClick={() => updateInitiativeList('forward')}>
               <i
                  className="fa fa-arrow-circle-right fa-2x col btn"
                  aria-hidden="true"
               />
            </button>
         </div>
      );
   }
}

InitiativeList.propTypes = {
   characters: PropTypes.array.isRequired,
   updateInitiativeList: PropTypes.func.isRequired,
   removeCharacter: PropTypes.func.isRequired,
   onCharacterUpdate: PropTypes.func.isRequired,
};

export default InitiativeList;
