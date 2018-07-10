import React, { Component } from 'react';
import '../Content/App.css';
import InitiativeList from './InitiativeList';
import NewCharacterForm from './NewCharacterForm';

//App module for handling the app data state and components
class App extends Component {
  state = {
    characters: [
      {
        name: "Thorin Strongbeard",
        order: 4,
        charImg: "https://i.pinimg.com/736x/7c/c7/aa/7cc7aa6b6fd0d30b2ab78eabcd44c94e--dwarf-apocalypse.jpg"
      },
      {
        name: "Minotaur",
        order: 3,
        charImg: "https://s-media-cache-ak0.pinimg.com/originals/20/ee/fc/20eefc59de0bd9d75a2b4889c18504bc.png"
      },
      {
        name: "Elrik Battleborne",
        order: 5,
        charImg: "https://i.pinimg.com/originals/6c/0a/f9/6c0af91e8c7b7c8607091a755dcc483c.png"
      },
    ],
    charList: [],
    charListIndex: 0
  }

  render() {
    return (
      <div className="App container-fluid text-center">
        <header className="navbar navbar-dark bg-dark">
          <a href="#" className="navbar-brand">Welcome to Initiative-Tracker</a>
          <i className="fa fa-spinner fa-pulse" style={{ color: '#FFF' }}></i>
        </header>
        <InitiativeList chars={this.state.charList} updateCharList={this.updateCharList} />
        <NewCharacterForm onSubmit={this.addNewChar} />
      </div>
    )
  }

  componentWillMount() {
    const charListBeginning = 0;
    const charListEnd = 7;

    this.setState({
      charList: this.sortCharList(this.state.characters).slice(charListBeginning, charListEnd)
    })
  }

  addNewChar = (charInput) => {

    charInput.charImg = this.checkCharImg(charInput.charImg);

    this.setState(prevState => ({
      characters: prevState.characters.concat(charInput)
    }))

    this.refreshCharList();
  };

  refreshCharList = () => {
    this.setState(prevState => ({
      charList: this.sortCharList(prevState.characters).slice(this.state.charListBeginning, this.state.charListEnd),
      charListIndex: 0
    }))
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
    }
  };

  incrementCharList = () => {
    let tempList = this.state.charList;
    tempList.shift();

    let increment = this.resetIndex();

    tempList.push(this.state.characters[this.state.charListIndex]);

    this.setState(prevState => ({
      charList: tempList,
      charListIndex: prevState.charListIndex + increment
    }))
  };

  decrementCharList = () => {
    let tempList = this.state.charList;
    tempList.pop();

    let newIndex = this.state.charListIndex - 1;

    if (newIndex === -1) {
      newIndex = this.state.characters.length - 1;
    }

    tempList.unshift(this.state.characters[newIndex]);

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
      return 0;
    }
    return 1;
  }

  sortCharList = (charList) => {
    return charList.sort(function (a, b) {
      return a.order - b.order
    });
  }

  removeChar = (index) => {
    this.setState(prevState => ({
      charList: prevState.charList.filter((_, i) => i !== index)
    }))

    this.updateCharList();
  };
}

export default App;