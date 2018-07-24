import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../../actions/characterActions';
import CharacterForm from './CharacterForm';

class CharacterFormPage extends React.Component {
   constructor(props, context) {
      super(props, context);

      const { char } = this.props;

      this.state = {
         char: Object.assign({}, char),
         errors: {},
         saving: false,
      };

      this.onFieldChange = this.onFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      const { char } = this.props;
      if (char.id !== nextProps.char.id) {
         //populate form when existing char is loaded directly
         this.setState({ char: Object.assign({}, nextProps.char) });
      }
   }

   onFieldChange(e) {
      const { char } = this.state;
      const field = e.target.name;
      char[field] = e.target.value;
      return this.setState({ char: char });
   }

   checkCharImg = () => {
      const { char } = this.state;

      if (char.charImg === '') {
         char.charImg = 'http://vopool.net/images/diger.png';
         return this.setState({ char: char });
      }
      return;
   };

   handleSubmit = e => {
      const { actions } = this.props;
      const { char } = this.state;
      e.preventDefault();
      this.setState({ saving: true });

      if (!this.formIsValid()) {
         this.setState({ saving: false });
         return;
      }

      this.checkCharImg();

      actions
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
                     <i
                        className="fa fa-spinner fa-pulse mx-auto mt-5"
                        style={{ color: '#343a40' }}
                     />
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
   actions: PropTypes.object.isRequired,
};

function getCharacterById(characters, id) {
   const char = characters.filter(char => char.id == id);
   if (char) return char[0]; //filter returns array, grabbing first elem
   return null;
}

function mapStateToProps(state, ownProps) {
   const charId = ownProps.match.params.id; //from the path '/character/:id'

   let char = {
      name: '',
      charImg: '',
      order: '',
      armor: '',
      health: '',
      attack: '',
   };

   if (charId && state.characters.length > 0) {
      char = getCharacterById(state.characters, charId);
   }

   return {
      char: char,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(characterActions, dispatch),
   };
}

export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(CharacterFormPage)
);
