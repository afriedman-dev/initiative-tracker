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
    charListBeginning: 0,
    charListEnd: 6
  }

  render() {
    return (
      <div className="App container-fluid text-center">
        <header className="navbar navbar-dark bg-dark">
          <a href="#" className="navbar-brand">Welcome to Initiative-Tracker</a>
          <i class="fa fa-spinner fa-pulse" style={{ color: '#FFF' }}></i>
        </header>
        <InitiativeList chars={this.state.charList} updateCharList={this.updateCharList} />
        <NewCharacterForm onSubmit={this.addNewChar} />
      </div>
    )
  }

  componentWillMount() {
    this.setState({
      charList: this.sortCharList(this.state.characters).slice(this.state.charListBeginning, this.state.charListEnd)
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
      charList: this.sortCharList(prevState.characters).slice(this.state.charListBeginning, this.state.charListEnd)
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
        this.removeChar(0);
      case 'back':
        this.removeChar(this.state.charList.length - 1);
    }
  };

  removeChar = (index) => {
    this.setState(prevState => ({
      charList: prevState.charList.filter((_, i) => i !== index)
    }))
  };

  sortCharList = (charList) => {
    return charList.sort(function (a, b) {
      return a.order - b.order
    });
  }
}

export default App;