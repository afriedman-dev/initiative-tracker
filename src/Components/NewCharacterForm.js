import React from 'react';

//Form component for adding new characters
class NewCharacterForm extends React.Component {
    state = { charNameInput: '', charImgInput: '', order: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({ name: this.state.charNameInput, charImg: this.state.charImgInput, order: this.state.order });
        this.setState({ charNameInput: '', charImgInput: '', order: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="col-4">
                <div className="form-group">
                    <label>Character Name:</label>
                    <input type="text" value={this.state.charNameInput}
                        onChange={(e) => this.setState({ charNameInput: e.target.value })}
                        placeholder="Thorin Oakshield" required
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label>Initiative:</label>
                    <input type="text" value={this.state.order}
                        onChange={(e) => this.setState({ order: e.target.value })}
                        required className="form-control" />
                </div>
                <div className="form-group">
                    <label>
                        Character Image Token: </label>
                    <input type="text" name="imgUrl"
                        value={this.state.charImgInput}
                        onChange={(e) => this.setState({ charImgInput: e.target.value })}
                        className="form-control" placeholder="Enter image URL or leave blank for default token" />
                </div>
                <button type="submit" className="btn btn-primary"> Add Character </button>
            </form>
        )
    }
}

export default NewCharacterForm;