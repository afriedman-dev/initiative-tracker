import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CharacterActions from '../../actions/characterActions';
import CharacterForm from './CharacterForm';

class CharacterFormPage extends React.Component {
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

  componentWillReceiveProps(nextProps) {
    const { char } = this.props;
    if (char.id !== nextProps.char.id) {
      // populate form when existing char is loaded directly
      this.setState({ char: { ...nextProps.char } });
    }
  }

  onFieldChange({ target: { name, value } }) {
    const { char } = this.state;
    char[name] = value; // mutating?
    return this.setState({ char });
  }

  checkCharImg = () => {
    const { char } = this.state;

    if (char.charImg === '') {
      return this.setState({ char: { ...char, charImg: 'http://vopool.net/images/diger.png' } });
    }
    return;
  };

  handleSubmit = e => {
    const { characterActions } = this.props;
    const { char } = this.state;
    e.preventDefault();
    this.setState({ saving: true });

    if (!this.formIsValid()) {
      this.setState({ saving: false });
      return;
    }

    this.checkCharImg();

    characterActions
      .saveCharacter(char)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        return error;
      });
  };

  formIsValid() {
    const { char } = this.state;
    let formIsValid = true;
    let errors = {};

    if (char.name.length < 2) {
      errors.name = 'Name must be at least 2 characters.';
      formIsValid = false;
    }

    if (!char.order.length) {
      errors.order = 'The character must have an initiative.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  redirect() {
    const { history } = this.props;
    this.setState({ saving: false });
    history.push('/');
  }

  render() {
    const { saving, char, errors } = this.state;
    return (
      <section className="col offset-3" style={{ marginTop: '2.5rem' }}>
        {saving ? (
          <div className="jumbotron col-6">
            <h1 className="display-4">
              Saving{' '}
              <i className="fa fa-spinner fa-pulse mx-auto mt-5" style={{ color: '#343a40' }} />
            </h1>
          </div>
        ) : (
          <CharacterForm
            char={char}
            onSubmit={this.handleSubmit}
            onFieldChange={this.onFieldChange}
            errors={errors}
          />
        )}
      </section>
    );
  }
}

CharacterFormPage.propTypes = {
  char: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  characterActions: PropTypes.object.isRequired
};

const getCharacterById = (characters, id) => characters.find(char => char.id === id);

const mapStateToProps = (
  { characters },
  {
    match: {
      params: { id: charId }
    }
  }
) => {
  // from the path '/character/:id'
  const char =
    charId && characters.length > 0
      ? getCharacterById(characters, charId)
      : {
          name: '',
          charImg: '',
          order: '',
          armor: '',
          health: '',
          attack: '',
          statuses: []
        };

  return { char };
}

const mapDispatchToProps = (dispatch) => ({
    characterActions: bindActionCreators(CharacterActions, dispatch)
  });

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterFormPage)
);
