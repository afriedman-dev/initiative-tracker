import React from 'react';
import CharacterCard from './CharacterCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as trackerActions from '../../actions/trackerActions';

//Initiative List mapping all characters passed in
class InitiativeList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        return (
            <div className="initList col row align-items-center">
                <div className="col-1" onClick={() => this.props.updateCharList('back')}>
                    <i className="fa fa-arrow-circle-left fa-2x col btn" aria-hidden="true"></i>
                </div>
                <div className="col-10 row">
                    {
                        (!Array.isArray(this.props.characters) || !this.props.characters.length) ?

                            <div className="jumbotron">
                                <h1 className="display-4">Please add a character</h1>
                                <hr className="my-4" />
                                <p className="lead">Once you add a character the tracker will be active</p>
                            </div> :
                            this.props.characters.map((char, i) => <CharacterCard key={i} {...char} index={i} />)
                    }

                </div>
                <div className="col-1" onClick={() => this.props.updateCharList('forward')}>
                    <i className="fa fa-arrow-circle-right fa-2x col btn" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        characters: state.tracker
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(trackerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeList);