import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InitiativeList from './InitiativeList';
import TurnCounter from './TurnCounter';
import CharacterList from '../character-list/CharacterList';

class InitiativeTrackerPage extends Component {

    render() {
        return (
                <div className="row containing-row">
                    <div className="col-2 char-list-container no-gutters">
                        <CharacterList />
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="offset-1 col-2 col-sm-3 col-xs-3" style={{ "marginTop": "2rem" }}>
                                <TurnCounter turn={this.props.turn} progress={this.props.progress} />
                            </div>
                        </div>
                        <div className="row">
                            <InitiativeList chars={this.props.charList} updateCharList={this.props.updateCharList} />
                        </div>
                        <div className="row">
                            <div className="col-3 offset-1">
                                <Link to="/add" className="btn-lg btn-primary">Add Character</Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default InitiativeTrackerPage;