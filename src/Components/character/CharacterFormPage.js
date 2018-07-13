import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../../actions/characterActions';
import CharacterForm from './CharacterForm';

class CharacterFormPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            char: Object.assign({}, this.props.char),
            errors: {},
            saving: false
        };

        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.char.id != nextProps.char.id) {
            //populate form when existing char is loaded directly
            this.setState({ char: Object.assign({}, nextProps.char) });
        }
    }

    onFieldChange(e) {
        const field = e.target.name;
        let char = this.state.char;
        char[field] = e.target.value;
        return this.setState({ char: char });
    }

    formIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.char.name.length < 2) {
            errors.name = 'Name must be at least 2 characters.';
            formIsValid = false;
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    checkCharImg = () => {
        let char = this.state.char;

        if (char.charImg === '') {
            char.charImg = "http://vopool.net/images/diger.png";
            return this.setState({ char: char });
        }
        return;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ saving: true });

        if (!this.formIsValid()) {
            return;
        }

        this.checkCharImg();

        this.props.actions.saveCharacter(this.state.char)
            .then(() => this.redirect())
            .catch(error => {
                return error;
            });
    };

    redirect() {
        this.setState({
            saving: false
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="col offset-3" style={{ "marginTop": "2.5rem" }}>
                {this.state.saving ?
                    <div className="jumbotron col-6"><h1 className="display-4">Saving . . .</h1></div> :
                    <CharacterForm
                        char={this.state.char}
                        onSubmit={this.handleSubmit}
                        onFieldChange={this.onFieldChange}
                        errors={this.state.errors} />
                }
            </div>
        );
    }
}


function getCharacterById(characters, id) {
    const char = characters.filter(char => char.id == id);
    if (char) return char[0]; //filter returns array, grabbing first elem
    return null;
}

function mapStateToProps(state, ownProps) {
    const charId = ownProps.match.params.id; //from the path '/character/:id'

    let char = { name: '', charImg: '', order: '', armor: '', health: '', attack: '' };

    if (charId && state.characters.length > 0) {
        char = getCharacterById(state.characters, charId);
    }

    return {
        char: char
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(characterActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterFormPage));
