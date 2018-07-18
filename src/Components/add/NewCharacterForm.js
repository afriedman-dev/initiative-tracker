import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

//Form component for adding new characters
const NewCharacterForm = withRouter(
  class NewCharacterForm extends React.Component {
    state = {
      charNameInput: "",
      charImgInput: "",
      order: "",
      armor: "",
      health: "",
      attack: ""
    };

    handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit({
        name: this.state.charNameInput,
        charImg: this.state.charImgInput,
        order: this.state.order,
        armor: this.state.armor,
        health: this.state.health,
        attack: this.state.attack
      });

      this.props.history.push("/");

      this.setState({
        charNameInput: "",
        charImgInput: "",
        order: "",
        armor: "",
        health: "",
        attack: ""
      });
    };

    render() {
      const {
        charNameInput,
        charImgInput,
        order,
        armor,
        health,
        attack
      } = this.state;

      return (
        <div className="col-6">
          <form onSubmit={this.handleSubmit} className="card">
            <h5 className="card-header text-white bg-secondary">
              New Character
            </h5>
            <div className="card-body">
              <div className="form-group row">
                <label className="col-form-label col-4">Character Name:</label>
                <input
                  type="text"
                  value={charNameInput}
                  onChange={e =>
                    this.setState({ charNameInput: e.target.value })
                  }
                  placeholder="Thorin Oakshield"
                  required
                  className="form-control col-8"
                />
              </div>
              <div className="form-group row">
                <label className="col-form-label col-4">Initiative:</label>
                <input
                  type="text"
                  value={order}
                  onChange={e => this.setState({ order: e.target.value })}
                  required
                  className="form-control col-8"
                  placeholder="Rolled initiative"
                />
              </div>
              <div className="form-group row">
                <label className="col-form-label col-4">Armor:</label>
                <input
                  type="text"
                  value={armor}
                  onChange={e => this.setState({ armor: e.target.value })}
                  className="form-control col-8"
                  placeholder="Armor Class"
                />
              </div>
              <div className="form-group row">
                <label className="col-form-label col-4">Health:</label>
                <input
                  type="text"
                  value={health}
                  onChange={e => this.setState({ health: e.target.value })}
                  className="form-control col-8"
                  placeholder="Current Health"
                />
              </div>
              <div className="form-group row">
                <label className="col-form-label col-4">Attack:</label>
                <input
                  type="text"
                  value={attack}
                  onChange={e => this.setState({ attack: e.target.value })}
                  className="form-control col-8"
                  placeholder="Attack Notes: +6 1d10+4"
                />
              </div>
              <div className="form-group row">
                <label className="col-form-label col-4 no-gutters">
                  Character Image Token:{" "}
                </label>
                <input
                  type="text"
                  name="imgUrl"
                  value={charImgInput}
                  onChange={e =>
                    this.setState({ charImgInput: e.target.value })
                  }
                  className="form-control col-8"
                  placeholder="Enter image URL or leave blank for default token"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Character{" "}
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
);

NewCharacterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default NewCharacterForm;
