import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../../actions/characterActions';
import TextInput from '../common/TextInput';

//Form component for adding new characters
const NewCharacterForm = withRouter(class NewCharacterForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            char: Object.assign({}, props.char),
            errors: {}
        };

        this.onFieldChange = this.onFieldChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onFieldChange(e) {
        const field = e.target.name;
        let char = this.state.char;
        char[field] = e.target.value;
        this.setState({ char: char });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let char = this.state.char;
        this.props.actions.createCharacter(char);

        this.props.history.push('/');

        this.setState({
            char: {
                name: '', charImg: '', order: '',
                armor: '', health: '', attack: ''
            }
        });
    };

    render() {
        return (
            <div className="col-6">
                <form onSubmit={this.handleSubmit} className="card">
                    <h5 className="card-header text-white bg-secondary">New Character</h5>
                    <div className="card-body">
                        <TextInput
                            name="name"
                            label="Character Name:"
                            value={this.state.char.name}
                            onChange={this.onFieldChange}
                            placeholder="Thorin Oakshield"
                            error={this.state.errors.name} />
                        <TextInput
                            name="order"
                            label="Initiative:"
                            value={this.state.char.order}
                            onChange={this.onFieldChange}
                            placeholder="Rolled Initiative"
                            error={this.state.errors.order} />
                        <TextInput
                            name="armor"
                            label="Armor:"
                            value={this.state.char.armor}
                            onChange={this.onFieldChange}
                            placeholder="Armor Class"
                            error={this.state.errors.armor} />
                        <TextInput
                            name="health"
                            label="Health:"
                            value={this.state.char.health}
                            onChange={this.onFieldChange}
                            placeholder="Current Health"
                            error={this.state.errors.health} />
                        <TextInput
                            name="attack"
                            label="Attack:"
                            value={this.state.char.attack}
                            onChange={this.onFieldChange}
                            placeholder="Attack Notes: +6 1d10+4"
                            error={this.state.errors.attack} />
                        <TextInput
                            name="charImg"
                            label="Character Image Token:"
                            value={this.state.char.charImg}
                            onChange={this.onFieldChange}
                            placeholder="Enter image URL or leave blank for default token"
                            error={this.state.errors.charImg} />



                        <button type="submit" className="btn btn-primary"> Add Character </button>
                    </div>
                </form>
            </div>
        )
    }
})

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

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterForm);