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
      const { characters, updateInitiativeList } = this.props;

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
                     <CharacterCard key={char.id} {...char} index={i} />
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
};

export default InitiativeList;
