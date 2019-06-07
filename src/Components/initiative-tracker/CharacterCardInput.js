import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LiveEditInput from '../common/LiveEditInput';
import Dropdown from '../common/Dropdown';

//basic character card
class CharacterCardInput extends Component {
  constructor(props, context) {
    super(props, context);

    const { char } = this.props;

    this.state = {
      char: { ...char },
      errors: {},
      saving: false
    };

    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onFieldChange({ target: { name, value } }) {
    const { char } = this.state;
    const field = name;
    char[field] = value;
    return this.setState({ char: char });
  }

  handleSubmit = () => {
    const { onCharacterUpdate, index } = this.props;
    const { char } = this.state;

    this.setState({ saving: true });

    if (!this.formIsValid()) {
      this.setState({ saving: false });
      return;
    }

    onCharacterUpdate(char, index);
    this.redirect();
  };

  formIsValid() {
    const { char } = this.state;
    let formIsValid = true;
    let errors = {};

    if (char.order === '' || char.order === null) {
      errors.order = 'The character must have an initiative.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  redirect() {
    const { flipCard } = this.props;
    const { char } = this.state;
    this.setState({ saving: false });
    flipCard(char.id);
  }

  render() {
    const { index, flipCard } = this.props;
    const { char, errors, saving } = this.state;

    let cardClass = 'charCard card pullUp';

    if (index === 0) {
      cardClass += ' current-card floating';
    }

    const flip = () => {
      flipCard(char.id);
    };

    const testDropdownData = {
      options: [
        'Eye',
        'Blind',
        'Blinded',
        'Flying',
        'Fire',
        'Drunk',
        'Exhaused',
        'Charmed',
        'Healing',
        'Stunned',
        'Heal',
        'Silenced',
        'Fatigued',
        'Silenced2',
        'NotEqual',
        'Square',
        'Poop',
        'Confused',
        'Sad',
        'Shield',
        'Blocking',
        'Incapacitated',
        'Chilled',
        'Star',
        'Protected',
        'Radiant',
        'Stealth',
        'Petrified',
        'Water',
        'Cover',
        'Paralyzed',
        'Poisoned'
      ]
    };

    return (
      <div>
        <div className={cardClass}>
          <button type="button" className="btn undo-btn fas fa-undo" onClick={flip} />
          <img className="charImg card-img-top" src={char.charImg} alt="Character Card" />
          <div className="card-body">
            <h5 className="card-title">{char.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Dropdown data={testDropdownData} />
            </li>
            <li className="list-group-item">
              <LiveEditInput
                name="order"
                label="Initiative:"
                value={char.order}
                onChange={this.onFieldChange}
                error={errors.order}
              />
            </li>
            <li className="list-group-item">
              <LiveEditInput
                name="armor"
                label="AC:"
                value={char.armor}
                onChange={this.onFieldChange}
                error={errors.armor}
              />
            </li>
            <li className="list-group-item">
              <LiveEditInput
                name="health"
                label="HP:"
                value={char.health}
                onChange={this.onFieldChange}
                error={errors.health}
              />
            </li>
            <li className="list-group-item">
              <LiveEditInput
                name="attack"
                label="ATTACK:"
                value={char.attack}
                onChange={this.onFieldChange}
                error={errors.attack}
              />
            </li>
          </ul>
          <button
            type="button"
            className="card-link btn btn-secondary"
            onClick={this.handleSubmit}
            style={{ width: `100%` }}
          >
            <i className="fa fa-save" aria-hidden="true" /> {saving ? 'Saving. . .' : 'Save'}
          </button>
        </div>
      </div>
    );
  }
}

CharacterCardInput.propTypes = {
  index: PropTypes.number.isRequired,
  char: PropTypes.object.isRequired,
  onCharacterUpdate: PropTypes.func.isRequired,
  flipCard: PropTypes.func.isRequired
};

export default CharacterCardInput;
