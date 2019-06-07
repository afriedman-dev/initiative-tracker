import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as initiativeActions from '../../actions/initiativeActions';
import Loader from '../common/Loader';

class CharacterList extends React.Component {
  addCharacter = char => {
    const { actions } = this.props;
    actions.addCharacter(char);
    actions.resetIndex();
    actions.sortInitiativeList();
    actions.calculateProgress();
  };

  mapCharRow = function() {
    return function(char) {
      const add = () => {
        this.addChar(char);
      };
      return (
        <button
          type="button"
          key={char.id}
          id="char-list-row"
          className="card col-12 remove-button-styles"
          onClick={add}
        >
          <div className="card-header row no-gutters">
            <div className="col-3 py-0 pr-auto mr-auto">
              <img src={char.charImg} alt="Character sidelist" />
            </div>
            <div className="col-9 text-left char-list-name pl-3">
              <h5>{char.name}</h5>
            </div>
          </div>
        </button>
      );
    };
  };

  render() {
    const { characters, loading } = this.props;

    return (
      <div className="row no-gutters">
        {loading ? <Loader /> : characters.map(this.mapCharRow())}
      </div>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ characters }) => ({ characters });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(initiativeActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
