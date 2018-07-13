import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import * as characterActions from '../../actions/characterActions';
import Loader from '../common/Loader';

class CharacterList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    charRow(char, i) {
        let onCharClick = (e) => {
            //let char = this.props.characters[e.key];
            console.log(e);
            //this.props.actions.saveCharacter(char);
        };

        return (
            <Link key={i} to={'/character/' + char.id} id="char-list-row" className="card col-12" onClick={onCharClick}>
                <div className="card-header row no-gutters">
                    <div className="col-3 py-0 pr-auto mr-auto">
                        <img src={char.charImg} alt="Character sidelist" />
                    </div>
                    <div className="col-9 text-left char-list-name pl-3"><h5>{char.name}</h5></div>
                </div>
            </Link>
        )
    }

    render() {
        const {characters} = this.props;

        return (
            <div className="row no-gutters">
                {(!Array.isArray(characters) || !characters.length) ?
                    <Loader /> :
                    characters.map(this.charRow)}
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