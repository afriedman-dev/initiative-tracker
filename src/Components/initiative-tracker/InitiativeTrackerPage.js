import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InitiativeList from './InitiativeList';
import TurnCounter from './TurnCounter';

class InitiativeTrackerPage extends Component {

    render() {
        return (
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="offset-1 col-1 col-sm-2 col-xs-2" style={{ "marginTop": "2rem" }}>
                        <TurnCounter turn={this.props.turn} progress={this.props.progress} />
                    </div>
                </div>
                <div className="row">
                    <InitiativeList chars={this.props.charList} updateCharList={this.props.updateCharList} />
                </div>
                <div className="row">
                    <div className="col-2 offset-1">
                        <Link to="/add" className="btn-lg btn-primary">Add Character</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default InitiativeTrackerPage;