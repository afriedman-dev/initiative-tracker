import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {connect} from 'react-redux';
import '../Content/App.css';
import Header from './common/Header';
import CharacterFormPage from './character/CharacterFormPage';
import InitiativeTrackerPage from './initiative-tracker/InitiativeTrackerPage';

//App module for handling the app data state and components
class App extends Component {

  render() {
    return (
      <div className="App m-0 p-0">
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <div className="container-fluid text-center">

              <Route exact path="/"
                render={() =>
                  <InitiativeTrackerPage loading={this.props.loading} />} />

              <Route exact path="/character" render={() =>
                <CharacterFormPage />} />

              <Route exact path="/character/:id" render={() =>
                <CharacterFormPage />} />

            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return{
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);