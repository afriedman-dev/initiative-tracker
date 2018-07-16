import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InitiativeList from './InitiativeList';
import TurnCounter from './TurnCounter';
import CharacterList from '../character-list/CharacterList';

class InitiativeTrackerPage extends Component {
    constructor(props, context) {
        super(props, context);
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
                            <InitiativeList chars={this.props.charList} updateCharList={this.props.updateCharList} />
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

export default InitiativeTrackerPage;