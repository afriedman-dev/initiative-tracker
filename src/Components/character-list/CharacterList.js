import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../../actions/characterActions';

class CharacterList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};

        this.onCharClick = this.onCharClick.bind(this);
    }

    onCharClick(e) {
        let char = this.props.characters[e.key];
        this.props.actions.createCharacter(char);
    };

    charRow(char, i) {
        return (
            <div key={i} className="card col-12" > {/* onClick={this.onCharClick}> */}
                <h5 className="card-header">
                    <img className="float-left" src={char.charImg} alt="Character sidelist" />
                    <span className="align-middle">{char.name}</span>
                </h5>
            </div>
        )
    }

    render() {
        return (
            <div className="row no-gutters">
                {(!Array.isArray(this.props.characters) || !this.props.characters.length) ?
                    <i className="fa fa-spinner fa-pulse fa-3x mx-auto mt-5" style={{ color: '#343a40' }}></i> :
                    this.props.characters.map(this.charRow)}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        characters: state.characters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(characterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);