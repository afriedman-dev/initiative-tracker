import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import "../Content/App.css";
import Header from "./common/Header";
import CharacterFormPage from "./character/CharacterFormPage";
import InitiativeTrackerPage from "./initiative-tracker/InitiativeTrackerPage";

import CharacterCardInput from "./initiative-tracker/CharacterCardInput";

//App module for handling the app data state and components
class App extends Component {
  render() {
    return (
      <div className="App m-0 p-0">
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <div className="container-fluid text-center">
              <Route
                exact
                path="/"
                render={() => (
                  <InitiativeTrackerPage loading={this.props.loading} />
                )}
              />

              <Route
                exact
                path="/character"
                render={() => <CharacterFormPage />}
              />

              <Route
                exact
                path="/character/:id"
                render={() => <CharacterFormPage />}
              />

              <Route
                exact
                path="/edit"
                render={() => (
                  <div className="col-3" style={{ marginTop: "1rem" }}>
                    <CharacterCardInput
                      charImg="https://i.pinimg.com/736x/7c/c7/aa/7cc7aa6b6fd0d30b2ab78eabcd44c94e--dwarf-apocalypse.jpg"
                      name="Thorin"
                      initiative="5"
                      armor="18"
                      health="23"
                      attack="+6 1d10+4"
                      onFieldChange="console.log('changed')"
                      errors={{}}
                    />
                  </div>
                )}
              />
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
