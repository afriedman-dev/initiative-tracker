import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import '../Content/App.css';
import Header from './common/Header';
import NewCharacterFormPage from './add/NewCharacterFormPage';
import InitiativeTrackerPage from './initiative-tracker/InitiativeTrackerPage';

//App module for handling the app data state and components
class App extends Component {
  state = {
    characters: [
      {
        name: "Thorin Strongbeard",
        order: 4,
        charImg: "https://i.pinimg.com/736x/7c/c7/aa/7cc7aa6b6fd0d30b2ab78eabcd44c94e--dwarf-apocalypse.jpg",
        armor: 16,
        health: 25,
        attack: "+7, 2d6+4"
      },
      {
        name: "Minotaur",
        order: 3,
        charImg: "https://s-media-cache-ak0.pinimg.com/originals/20/ee/fc/20eefc59de0bd9d75a2b4889c18504bc.png",
        armor: 14,
        health: 32,
        attack: "+8, 1d10+5"
      },
      {
        name: "Elrik Battleborne",
        order: 5,
        charImg: "https://i.pinimg.com/originals/6c/0a/f9/6c0af91e8c7b7c8607091a755dcc483c.png",
        armor: 18,
        health: 28,
        attack: "+6, 2d6+4 +1d4 fire"
      },
    ],
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

              <Route exact path="/add" render={() =>
                <NewCharacterFormPage
                  addNewChar={this.addNewChar} />} />

            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    )
  }

  componentWillMount() {
    const beg = 0;
    const end = 7;

    this.setState({
      charList: this.sortCharList(this.state.characters).slice(beg, end)
    })
    this.calcProgress();
  }

  addNewChar = (charInput) => {
    charInput.charImg = this.checkCharImg(charInput.charImg);

    this.setState(prevState => ({
      characters: prevState.characters.concat(charInput)
    }))

    this.refreshCharList(0, 7);
  };

  refreshCharList = (beg, end) => {
    this.setState(prevState => ({
      charList: this.sortCharList(prevState.characters).slice(beg, end),
      charListIndex: 0
    }), this.calcProgress())
  }

  checkCharImg = (charImg) => {
    if (charImg === '') {
      return "http://vopool.net/images/diger.png";
    }
    return charImg;
  };

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

// App.propTypes = {
//   chidren: PropTypes.object.isRequired
// };

export default App;