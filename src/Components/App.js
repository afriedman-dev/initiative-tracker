import React, { Component } from 'react';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import '../Content/App.css';
import InitiativeList from './InitiativeList';
import NewCharacterForm from './NewCharacterForm';
import TurnCounter from './TurnCounter';

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
    turn: 0
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={this.Header} />
          <Route exact path="/" component={this.AppWrapper} />
          <Route exact path="/add" component={this.NewCharacterFormWrapper} />
        </React.Fragment>
      </BrowserRouter>
    )
  }

  AppWrapper = () => {
    return (
      <div className="App">
        <div className="container-fluid text-center">
          <div className="row">
            <div className="offset-1 col-1 col-sm-2 col-xs-2" style={{ "marginTop": "2rem" }}>
              <TurnCounter turn={this.state.turn} />
            </div>
          </div>
          <div className="row">
            <InitiativeList chars={this.state.charList} updateCharList={this.updateCharList} />
          </div>
          <div className="row">
            <div className="col-2 offset-1">
              <Link to="/add" className="btn-lg btn-primary">Add Character</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  NewCharacterFormWrapper = () => {
    return (
      <div className="col offset-3" style={{"marginTop":"2.5rem"}}>
        <NewCharacterForm onSubmit={this.addNewChar} />
      </div>
    )
  }

  Header = () => {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Welcome to Initiative-Tracker</span>
        <i className="fa fa-spinner fa-pulse" style={{ color: '#FFF' }}></i>
      </nav>)
  }

  componentWillMount() {
    const beg = 0;
    const end = 7;

    this.setState({
      charList: this.sortCharList(this.state.characters).slice(beg, end)
    })
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

  removeChar = (index) => {
    this.setState(prevState => ({
      charList: prevState.charList.filter((_, i) => i !== index)
    }))

    this.updateCharList();
  };
}

export default App;