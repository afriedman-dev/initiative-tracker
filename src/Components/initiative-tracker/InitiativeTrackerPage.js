import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as InitiativeActions from '../../actions/initiativeActions';
import InitiativeList from './InitiativeList';
import TurnCounter from './TurnCounter';
import CharacterList from '../character-list/CharacterList';

class InitiativeTrackerPage extends Component {
  onCharacterUpdate = (char, index) => {
    const { initiativeActions } = this.props;
    initiativeActions.updateCharacter(char, index);
    initiativeActions.resetIndex();
    initiativeActions.sortInitiativeList();
    initiativeActions.calculateProgress();
  };

  removeCharacter = index => {
    const { initiativeActions } = this.props;
    initiativeActions.removeCharacter(index);
    initiativeActions.resetIndex();
    initiativeActions.sortInitiativeList();
    initiativeActions.calculateProgress();
  };

  resetIndex = (len, curInd) => {
    const { initiativeActions } = this.props;
    if (curInd === len) {
      initiativeActions.resetIndex();
      initiativeActions.updateTurnCount(1);
      return 0;
    }
    return 1;
  };

  checkNewIndex = () => {
    const { initiativeList, initiativeListIndex, initiativeActions } = this.props;
    let newIndex = initiativeListIndex - 1;

    if (newIndex === -1) {
      newIndex = initiativeList.length - 1;
      initiativeActions.updateTurnCount(-1);
    }

    return newIndex;
  };

  updateInitiativeList = direction => {
    const { initiativeList, initiativeListIndex, initiativeActions } = this.props;
    if (this.initiativeListIsValid()) {
      if (direction === 'forward') {
        let increment = this.resetIndex(initiativeList.length - 1, initiativeListIndex);
        initiativeActions.incrementInitiativeList(increment);
      } else {
        initiativeActions.decrementInitiativeList(this.checkNewIndex());
      }
      initiativeActions.calculateProgress();
    }
  };

  initiativeListIsValid = () => {
    const { initiativeList } = this.props;
    return initiativeList.length > 0;
  };

  render() {
    const { loading, turn, progress, initiativeList } = this.props;
    return (
      <div className="row containing-row">
        <section className="col-2 char-list-container no-gutters">
          <CharacterList loading={loading} />
        </section>
        <section className="col-10">
          <section className="row">
            <div className="offset-1 col-2 col-sm-3 col-xs-3" style={{ marginTop: '2rem' }}>
              <TurnCounter turn={turn} progress={progress} />
            </div>
          </section>
          <section className="row">
            <InitiativeList
              characters={initiativeList}
              updateInitiativeList={this.updateInitiativeList}
              removeCharacter={this.removeCharacter}
              onCharacterUpdate={this.onCharacterUpdate}
            />
          </section>
        </section>
      </div>
    );
  }
}

InitiativeTrackerPage.propTypes = {
  initiativeList: PropTypes.array.isRequired,
  initiativeListIndex: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  turn: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  initiativeActions: PropTypes.object.isRequired
};

const mapStateToProps = ({
  initiative: { initiativeList, initiativeListIndex, progress, turn }
}) => ({
  initiativeList,
  initiativeListIndex,
  progress,
  turn
});

const mapDispatchToProps = dispatch => ({
  initiativeActions: bindActionCreators(InitiativeActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitiativeTrackerPage);
