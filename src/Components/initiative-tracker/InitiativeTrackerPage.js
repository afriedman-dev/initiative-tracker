import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as initiativeActions from '../../actions/initiativeActions';
import InitiativeList from './InitiativeList';
import TurnCounter from './TurnCounter';
import CharacterList from '../character-list/CharacterList';

class InitiativeTrackerPage extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {};
   }

   initiativeListIsValid = () => {
      const { initiativeList } = this.props;
      return initiativeList.length > 0;
   };

   updateInitiativeList = dir => {
      const { initiativeList, initiativeListIndex, actions } = this.props;
      if (this.initiativeListIsValid()) {
         if (dir === 'forward') {
            let increment = this.resetIndex(
               initiativeList.length - 1,
               initiativeListIndex
            );
            actions.incrementInitiativeList(increment);
         } else {
            actions.decrementInitiativeList(this.checkNewIndex());
         }
         actions.calculateProgress();
      }
   };

   checkNewIndex = () => {
      const { initiativeList, initiativeListIndex, actions } = this.props;
      let newIndex = initiativeListIndex - 1;

      if (newIndex === -1) {
         newIndex = initiativeList.length - 1;
         actions.updateTurnCount(-1);
      }

      return newIndex;
   };

   resetIndex = (len, curInd) => {
      const { actions } = this.props;
      if (curInd === len) {
         actions.resetIndex();
         actions.updateTurnCount(1);
         return 0;
      }
      return 1;
   };

   removeCharacter = index => {
      const { actions } = this.props;
      actions.removeCharacter(index);
      actions.resetIndex();
      actions.sortInitiativeList();
      actions.calculateProgress();
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
                  <div
                     className="offset-1 col-2 col-sm-3 col-xs-3"
                     style={{ marginTop: '2rem' }}>
                     <TurnCounter turn={turn} progress={progress} />
                  </div>
               </section>
               <section className="row">
                  <InitiativeList
                     characters={initiativeList}
                     updateInitiativeList={this.updateInitiativeList}
                     removeCharacter={this.removeCharacter}
                  />
               </section>
               <section className="row">
                  <div className="col-3 offset-1">
                     <Link to="/character" className="btn-lg btn-primary">
                        Add Character
                     </Link>
                  </div>
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
   actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
   return {
      initiativeList: state.initiative.initiativeList,
      initiativeListIndex: state.initiative.initiativeListIndex,
      progress: state.initiative.progress,
      turn: state.initiative.turn,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(initiativeActions, dispatch),
   };
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(InitiativeTrackerPage);
