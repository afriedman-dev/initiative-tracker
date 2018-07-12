import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as characterActions from '../../actions/characterActions';

//Form component for adding new characters
const NewCharacterForm = withRouter(class NewCharacterForm extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            char: {
                name: '',
                charImg: '',
                order: '',
                armor: '',
                health: '',
                attack: ''
            }
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onOrderChange = this.onOrderChange.bind(this);
        this.onArmorChange = this.onArmorChange.bind(this);
        this.onHealthChange = this.onHealthChange.bind(this);
        this.onAttackChange = this.onAttackChange.bind(this);
        this.onImgChange = this.onImgChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onNameChange(e){
        const char = this.state.char;
        char.name = e.target.value;
        this.setState({char:char});
    }

    onOrderChange(e){
        const char = this.state.char;
        char.order = e.target.value;
        this.setState({char:char});
    }

    onArmorChange(e){
        const char = this.state.char;
        char.armor = e.target.value;
        this.setState({char:char});
    }

    onHealthChange(e){
        const char = this.state.char;
        char.health = e.target.value;
        this.setState({char:char});
    }

    onAttackChange(e){
        const char = this.state.char;
        char.attack = e.target.value;
        this.setState({char:char});
    }

    onImgChange(e){
        const char = this.state.char;
        char.charImg = e.target.value;
        this.setState({char:char});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let char = this.state.char;
        this.props.actions.createCharacter(char);

        this.props.history.push('/');

        this.setState({char:{
            name: '', charImg: '', order: '',
            armor: '', health: '', attack: ''}
        });
    };

    render() {
        return (
            <div className="col-6">
                <form onSubmit={this.handleSubmit} className="card">
                    <h5 className="card-header text-white bg-secondary">New Character</h5>
                    <div className="card-body">
                        <div className="form-group row">
                            <label className="col-form-label col-4">Character Name:</label>
                            <input type="text" value={this.state.char.name}
                                onChange={this.onNameChange}
                                placeholder="Thorin Oakshield" required
                                className="form-control col-8" />
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-4">Initiative:</label>
                            <input type="text" value={this.state.char.order}
                                onChange={this.onOrderChange}
                                required className="form-control col-8" placeholder="Rolled initiative" />
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-4">Armor:</label>
                            <input type="text" value={this.state.char.armor}
                                onChange={this.onArmorChange}
                                className="form-control col-8" placeholder="Armor Class" />
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-4">Health:</label>
                            <input type="text" value={this.state.char.health}
                                onChange={this.onHealthChange}
                                className="form-control col-8" placeholder="Current Health" />
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-4">Attack:</label>
                            <input type="text" value={this.state.char.attack}
                                onChange={this.onAttackChange}
                                className="form-control col-8" placeholder="Attack Notes: +6 1d10+4" />
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-4 no-gutters">Character Image Token: </label>
                            <input type="text" name="imgUrl"
                                value={this.state.char.charImg}
                                onChange={this.onImgChange}
                                className="form-control col-8" placeholder="Enter image URL or leave blank for default token" />
                        </div>
                        <button type="submit" className="btn btn-primary"> Add Character </button>
                    </div>
                </form>
            </div>
        )
    }
})

function mapStateToProps(state, ownProps){
    return {
        characters: state.characters
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(characterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterForm);