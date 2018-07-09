import React, { Component } from 'react';
import '../Content/App.css';
import InitiativeList from './InitiativeList';
import NewCharacterForm from './NewCharacterForm';

//App module for handling the app data state and components
class App extends Component {
  state = {
    characterList: [
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
        order: 2,
        charImg: "https://i.pinimg.com/originals/6c/0a/f9/6c0af91e8c7b7c8607091a755dcc483c.png"
      },
    ]
  }

  addNewChar = (charInput) => {

    charInput.charImg = this.checkCharImg(charInput.charImg);

    this.setState(prevState => ({
      characterList: prevState.characterList.concat(charInput)
    }))
  };

  checkCharImg = (charImg) => {
      if(charImg == ''){
        return "http://vopool.net/images/diger.png";
      }
      return charImg;
  };

  render() {
    return (
      <div className="App container-fluid text-center">
        <header className="navbar navbar-dark bg-dark">
          <a href="#" className="navbar-brand">Welcome to Initiative-Tracker</a>
          <i class="fa fa-spinner fa-pulse" style={{color:'#FFF'}}></i>
        </header>
        <InitiativeList chars={this.state.characterList} />
        <NewCharacterForm onSubmit={this.addNewChar} />
      </div>
    )
  }
}

export default App;
