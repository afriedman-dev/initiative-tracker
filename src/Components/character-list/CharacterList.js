import React, {PropTypes} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as characterActions from '../../actions/characterActions';

//Form component for adding new characters
const NewCharacterForm = withRouter(class NewCharacterForm extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let char = this.state.char;

        this.props.onSubmit(char);
        //below call replace above call
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
                {this.props.characters.map((char, i) => <div key={i}> {char.name}</div>)}
            </div>
        )
    }
})

// NewCharacterForm.propTypes = {
//     actions: PropTypes.object.isRequired
// };

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