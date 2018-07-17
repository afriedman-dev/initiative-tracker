import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as initiativeActions from "../../actions/initiativeActions";
import Loader from "../common/Loader";

class CharacterList extends React.Component {
  addCharacter = char => {
    this.props.actions.addCharacter(char);
    this.props.actions.resetIndex();
    this.props.actions.sortInitiativeList();
    this.props.actions.calculateProgress();
  };

  mapCharRow = function(addChar) {
    return function(char, i) {
      const add = () => {
        addChar(char);
      };
      return (
        <div key={i} id="char-list-row" className="card col-12" onClick={add}>
          <div className="card-header row no-gutters">
            <div className="col-3 py-0 pr-auto mr-auto">
              <img src={char.charImg} alt="Character sidelist" />
            </div>
            <div className="col-9 text-left char-list-name pl-3">
              <h5>{char.name}</h5>
            </div>
          </div>
        </div>
      );
    };
  };

  render() {
    const { characters } = this.props;

    return (
      <div className="row no-gutters">
        {this.props.loading ? (
          <Loader />
        ) : (
          characters.map(this.mapCharRow(this.addCharacter))
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    characters: state.characters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(initiativeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
