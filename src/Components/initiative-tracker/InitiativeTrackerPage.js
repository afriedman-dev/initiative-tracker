import React, { Component } from 'react';
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

        this.state ={}; 
    }

    updateInitiativeList = (dir) => {
        if(dir === 'forward'){
            //this.props.actions.incrementInitiativeList();
            this.props.actions.addCharacter(this.props.characters[0]);
        }
        else{
            this.props.actions.decrementInitiativeList()
            .then(() => this.refreshInitiativeList())
            .catch(error => {
                return error;
            });
        }
        this.refreshInitiativeList();
    };

    refreshInitiativeList(){
        console.log("refreshed");
    }

    render() {
        return (
            <div className="row containing-row">
                <section className="col-2 char-list-container no-gutters">
                    <CharacterList loading={this.props.loading} />
                </section>
                <section className="col-10">
                    <section className="row">
                        <div className="offset-1 col-2 col-sm-3 col-xs-3" style={{ "marginTop": "2rem" }}>
                            <TurnCounter turn={this.props.turn} progress={this.props.progress} />
                        </div>
                    </section>
                    <section className="row">
                        <InitiativeList
                            characters={this.props.initiativeList}
                            updateInitiativeList={this.updateInitiativeList}
                        />
                    </section>
                    <section className="row">
                        <div className="col-3 offset-1">
                            <Link to="/character" className="btn-lg btn-primary">Add Character</Link>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        characters: state.characters,
        initiativeList: state.initiative.initiativeList,
        index: state.initiative.initiativeListIndex,
        progress: state.initiative.progress,
        turn: state.initiative.turn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(initiativeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeTrackerPage);