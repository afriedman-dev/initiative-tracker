import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import '../Content/App.css';
import Header from './common/Header';
import NewCharacterFormPage from './add/NewCharacterFormPage';
import InitiativeTrackerPage from './initiative-tracker/InitiativeTrackerPage';

//App module for handling the app data state and components
class App extends Component {
  state = {
    characters: [],
    charList: [],
    charListIndex: 0,
    turn: 0,
    progress: 0
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <div className="container-fluid text-center">

              <Route exact path="/"
                render={() =>
                  <InitiativeTrackerPage
                    turn={this.state.turn}
                    progress={this.state.progress}
                    charList={this.state.charList}
                    updateCharList={this.updateCharList} />} />

              <Route exact path="/character" render={() =>
                <NewCharacterFormPage />} />

              <Route exact path="/character/:id" render={() =>
                <NewCharacterFormPage />} />

            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    )
  }

  componentWillMount() {
    this.setState({
      charList: this.sortCharList(this.state.characters)
    })
    this.calcProgress();
  }

  addNewChar = (charInput) => {
    this.setState(prevState => ({
      characters: prevState.characters.concat(charInput)
    }))

    this.refreshCharList(0, 7);
  }

  refreshCharList = (beg, end) => {
    this.setState(prevState => ({
      charList: this.sortCharList(prevState.characters).slice(beg, end),
      charListIndex: 0
    }), this.calcProgress())
  }

  updateCharList = (direction) => { //remove character and add next character
    switch (direction) {
      case 'forward':
        this.incrementCharList();
        break;
      case 'back':
        this.decrementCharList();
        break;
      default: return;
    }
    this.calcProgress();
  };

  incrementCharList = () => {
    const { characters, charList, charListIndex } = this.state;

    let tempList = charList;
    tempList.shift();

    let increment = this.resetIndex();

    tempList.push(characters[charListIndex]);

    this.setState(prevState => ({
      charList: tempList,
      charListIndex: prevState.charListIndex + increment
    }))
  };

  decrementCharList = () => {
    const { characters, charList, charListIndex } = this.state;

    let tempList = charList;
    tempList.pop();

    let newIndex = charListIndex - 1;

    if (newIndex === -1) {
      newIndex = characters.length - 1;
      this.updateTurnCount(-1);
    }

    tempList.unshift(characters[newIndex]);

    this.setState(prevState => ({
      charList: tempList,
      charListIndex: newIndex
    }))
  };

  resetIndex = () => {
    let len = this.state.characters.length - 1;
    let curInd = this.state.charListIndex;

    if (curInd === len) {
      this.setState(prevState => ({
        charListIndex: 0
      }))
      this.updateTurnCount(1);
      return 0;
    }
    return 1;
  }

  updateTurnCount = (val) => {
    this.setState(prevState => ({
      turn: prevState.turn + val
    }))
  }

  sortCharList = (charList) => {
    return charList.sort(function (a, b) {
      return a.order - b.order
    });
  }

  calcProgress = () => {
    let perc = ((this.state.charListIndex) / this.state.characters.length) * 100;

    if (perc > 50) {
      perc = 100;
    }
    else if (perc > 25) {
      perc = 75;
    }
    else if (perc > 0) {
      perc = 50;
    }
    else {
      perc = 25;
    }

    this.setState(prevState => ({
      progress: perc
    }))
  }

  removeChar = (index) => {
    this.setState(prevState => ({
      charList: prevState.charList.filter((_, i) => i !== index)
    }))

    this.updateCharList();
  };
}

export default App;