import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../../actions/characterActions';
import NewCharacterForm from './NewCharacterForm';

const NewCharacterFormPage = withRouter(
    class NewCharacterFormPage extends React.Component {
        constructor(props, context) {
            super(props, context);

            this.state = {
                char: Object.assign({}, this.props.char),
                errors: {}
            };

            this.onFieldChange = this.onFieldChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
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

        handleSubmit = (e) => {
            e.preventDefault();

            if (!this.formIsValid()) {
                return;
            }

            this.props.actions.saveCharacter(this.state.char)
                .then(() => this.redirect())
                .catch(error => {
                    return error;
                });
        };

        redirect() {
            this.setState({
                char: {
                    name: '', charImg: '', order: '',
                    armor: '', health: '', attack: ''
                }
            });
            this.props.history.push('/');
        }

        render() {
            return (
                <div className="col offset-3" style={{ "marginTop": "2.5rem" }}>
                    <NewCharacterForm
                        char={this.state.char}
                        onSubmit={this.handleSubmit}
                        onFieldChange={this.onFieldChange}
                        errors={this.state.errors} />
                </div>
            );
        }
    }
)

function getCharacterById(characters, id) {
    return;
}

function mapStateToProps(state, ownProps) {
    //const charId = ownProps.params.id; //from the path '/character/:id'

    let char = { name: '', charImg: '', order: '', armor: '', health: '', attack: '' };

    // if (charId && state.characters.length > 0){
    //     char = getCharacterById(state.characters, charId);
    // }

    return {
        char: char
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(characterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterFormPage);
